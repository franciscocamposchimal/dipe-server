
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.21.2
 * Query Engine version: e421996c87d5f3c8f7eeadd502d4ad402c89464d
 */
Prisma.prismaVersion = {
  client: "2.21.2",
  engine: "e421996c87d5f3c8f7eeadd502d4ad402c89464d"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CardScalarFieldEnum = makeEnum({
  id: 'id',
  cardId: 'cardId',
  pack: 'pack',
  available: 'available',
  ownerId: 'ownerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.RefillScalarFieldEnum = makeEnum({
  id: 'id',
  quantity: 'quantity',
  equalsTo: 'equalsTo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.OwnerScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  phone: 'phone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.StreamScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  amount: 'amount',
  amountBefore: 'amountBefore',
  amountAfter: 'amountAfter',
  cardId: 'cardId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.TypeStream = makeEnum({
  DISCOUNT: 'DISCOUNT',
  ADD: 'ADD'
});

exports.Prisma.ModelName = makeEnum({
  Card: 'Card',
  Refill: 'Refill',
  Owner: 'Owner',
  Stream: 'Stream'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
