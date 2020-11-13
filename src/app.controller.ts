import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { Card as CardModel, Refill as RefillModel } from '@prisma/client';

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
  async getAllCards(): Promise<CardModel[]> {
    return await this.prisma.card.findMany({
      orderBy: {
        id: 'asc'
      }
    });
  }

  @Get('/api/pack')
  async getAllPacks(): Promise<RefillModel[]> {
    return await this.prisma.refill.findMany();
  }

  @Get('/api/cards/:id')
  async getOneCard(@Param('id') id: string): Promise<CardModel> {
    console.log('CARD GET_ONE: ', id);

    const [findCard] = await this.prisma.card.findMany({
      where: { cardId: id }
    }); 
    
    if(!findCard) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return findCard;
  }

  @Post('/api/cards')
  async createCard(
    @Body() card: { cardId: string; packId: string },
  ): Promise<CardModel> {
    const { cardId, packId } = card;
    const { quantity, equalsTo }: RefillModel = await this.prisma.refill.findOne({ where: { id: packId } });
    return await this.prisma.card.create({
      data: {
        cardId: cardId,
        pack: quantity,
        available: equalsTo
      }
    });
  }

  @Post('/api/pack')
  async createPack(
    @Body() pack: { quantity: string; equalsTo: string },
  ): Promise<RefillModel> {
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
    const [findCard] = await this.prisma.card.findMany({
      where: { cardId: id }
    }); 
    
    if(!findCard) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    if(findCard.available == 0 ) throw new HttpException('No Content', HttpStatus.NO_CONTENT); 

    if(findCard.available > 0 && findCard.available >= data.disp_up) {
      return await this.prisma.card.update({
        where: { id: findCard.id },
        data: {
          available: findCard.available - data.disp_up
        }
      });
    }
  }

  @Delete('/api/cards/:id')
  async deleteCard(@Param('id') id: string): Promise<CardModel> {
    return await this.prisma.card.delete({ where: { id } });
  }

  @Delete('/api/pack/:id')
  async deletePack(@Param('id') id: string): Promise<RefillModel> {
    return await this.prisma.refill.delete({ where: { id } });
  }
}
