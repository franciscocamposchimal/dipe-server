import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { join } from 'path';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService
  ) { }

  @Get()
  getIndex(@Res() res) {
    return res.sendFile(join(__dirname, '..', 'dipe_card/index.html'));
  }

  @Get('/api/cards')
  async getAllCards() {
    return await this.prisma.card.findMany({
      include: { logs: true, owner: true },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  @Get('/api/pack')
  async getAllPacks() {
    return await this.prisma.refill.findMany();
  }

  @Get('/api/v2/cards/:id')
  async getOneCardV2(@Param('id') id: string) {
    console.log('CARD GET_ONE: ', id);

    const findCard = await this.prisma.card.findFirst({
      where: { cardId: id },
      include: { logs: true }
    });

    console.log('CARD FIND: ', findCard);

    if (!findCard) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return findCard;
  }

  @Get('/api/cards/:id')
  async getOneCard(@Param('id') id: string) {
    console.log('CARD GET_ONE: ', id);

    const findCard = await this.prisma.card.findFirst({
      where: { cardId: id },
      include: { logs: true }
    });

    console.log('CARD FIND: ', findCard);

    if (!findCard) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return {
      id: findCard.id,
      number: findCard.cardId,
      pack: findCard.pack,
      disp: findCard.available,
      created_at: findCard.createdAt,
      logs: findCard.logs.map(({ id, amount, amountBefore, amountAfter, createdAt }) => {
        return {
          id,
          amount,
          amount_before: amountBefore,
          amount_after: amountAfter,
          created_at: createdAt
        }
      })
    };
  }

  @Post('/api/cards')
  async createCard(
    @Body() card: {
      cardId: string;
      packId: string;
      owner?: { id?: string; name?: string; phone?: string; }
    },
  ) {
    const { cardId, packId, owner } = card;
    const { quantity, equalsTo } = await this.prisma.refill.findUnique({ where: { id: packId } });
    let createOwner: any = {};
    if (owner) {
      createOwner = {
        owner: {
          connectOrCreate: {
            where: { id: owner.id ? owner.id : '' },
            create: {
              name: owner.name ? owner.name : '',
              phone: owner.phone ? owner.phone : ''
            },
          }
        }
      };
    }

    const newCard = await this.prisma.card.create({
      data: {
        cardId: cardId,
        pack: quantity,
        available: equalsTo,
        ...createOwner
      },
      include: { owner: true }
    });

    return newCard;
  }

  @Post('/api/pack')
  async createPack(
    @Body() pack: { quantity: string; equalsTo: string },
  ) {
    const { quantity, equalsTo } = pack;

    return await this.prisma.refill.create({
      data: {
        quantity: parseInt(quantity, 10),
        equalsTo: parseInt(equalsTo, 10)
      }
    });
  }

  @Put('/api/cards/:id')
  async updateCard(@Param('id') id: string, @Body() data: any) {
    console.log('CARD UPDATE: ', id);
    console.log('CARD DATA: ', data);

    const findCard = await this.prisma.card.findFirst({
      where: { cardId: id }
    });

    if (!findCard) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    if (findCard.available == 0) throw new HttpException('No Content', HttpStatus.NO_CONTENT);

    if (findCard.available > 0 && findCard.available >= data.disp_up) {

      const cardUpdated = await this.prisma.card.update({
        where: { id: findCard.id },
        data: {
          available: findCard.available - data.disp_up,
          logs: {
            create: {
              type: 'DISCOUNT',
              amount: data.disp_up,
              amountBefore: findCard.available,
              amountAfter: findCard.available - data.disp_up

            }
          }
        }
      });

      return {
        id: cardUpdated.id,
        number: cardUpdated.cardId,
        pack: cardUpdated.pack,
        disp: cardUpdated.available,
        created_at: cardUpdated.createdAt
      };
    }
  }

  @Put('/api/owner/cards/:id')
  async updateOwnerCardUser(
    @Param('id') id: string,
    @Body() data: { name?: string; phone?: string; }
  ) {

    const findCard = await this.prisma.card.findFirst({
      where: { cardId: id }
    });

    if (!findCard) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    let getData: any = {};

    if (data.name) getData.name = data.name;
    if (data.phone) getData.phone = data.phone;

    const cardUpdated = await this.prisma.card.update({
      where: { id: findCard.id },
      data: {
        owner: {
          upsert: {
            update: { ...getData },
            create: { ...getData },
          }
        }
      }, include: { owner: true, logs: true }
    });

    return cardUpdated;
  }

  @Put('/api/reload/cards/:id')
  async reloadCard(@Param('id') id: string, @Body() data: { packId: string; }) {
    console.log('CARD UPDATE: ', id);
   
    const findCard = await this.prisma.card.findFirst({
      where: { cardId: id },
    });

    const findPack = await this.prisma.refill.findUnique({
      where: { id: data.packId }
    });

    if (!findCard || !findPack) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    const cardUpdated = await this.prisma.card.update({
      where: { id: findCard.id },
      data: {
        pack: findPack.quantity,
        available: findCard.available + findPack.equalsTo,
        logs: {
          create: {
            type: 'ADD',
            amount: findPack.equalsTo,
            amountBefore: findCard.available,
            amountAfter: findCard.available + findPack.equalsTo
          }
        }
      },
      include: { owner: true, logs: true }
    });

    return cardUpdated;
  }

  @Delete('/api/cards/:id')
  async deleteCard(@Param('id') id: string) {
    return await this.prisma.card.delete({ where: { id } });
  }

  @Delete('/api/pack/:id')
  async deletePack(@Param('id') id: string) {
    return await this.prisma.refill.delete({ where: { id } });
  }
}
