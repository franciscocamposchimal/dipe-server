
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Card
 */

export type Card = {
  id: string
  cardId: string
  pack: number
  available: number
  ownerId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

/**
 * Model Refill
 */

export type Refill = {
  id: string
  quantity: number
  equalsTo: number
  createdAt: Date | null
  updatedAt: Date | null
}

/**
 * Model Owner
 */

export type Owner = {
  id: string
  name: string | null
  phone: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

/**
 * Model Stream
 */

export type Stream = {
  id: string
  amount: number | null
  amountBefore: number | null
  amountAfter: number | null
  cardId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cards
 * const cards = await prisma.card.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cards
   * const cards = await prisma.card.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<GlobalReject>;

  /**
   * `prisma.refill`: Exposes CRUD operations for the **Refill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refills
    * const refills = await prisma.refill.findMany()
    * ```
    */
  get refill(): Prisma.RefillDelegate<GlobalReject>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<GlobalReject>;

  /**
   * `prisma.stream`: Exposes CRUD operations for the **Stream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.stream.findMany()
    * ```
    */
  get stream(): Prisma.StreamDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.21.2
   * Query Engine version: e421996c87d5f3c8f7eeadd502d4ad402c89464d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  export type Union = any

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Card: 'Card',
    Refill: 'Refill',
    Owner: 'Owner',
    Stream: 'Stream'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Card
   */


  export type AggregateCard = {
    count: CardCountAggregateOutputType | null
    avg: CardAvgAggregateOutputType | null
    sum: CardSumAggregateOutputType | null
    min: CardMinAggregateOutputType | null
    max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    pack: number | null
    available: number | null
  }

  export type CardSumAggregateOutputType = {
    pack: number | null
    available: number | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    pack: number | null
    available: number | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    pack: number | null
    available: number | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    cardId: number
    pack: number
    available: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    pack?: true
    available?: true
  }

  export type CardSumAggregateInputType = {
    pack?: true
    available?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    cardId?: true
    pack?: true
    available?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    cardId?: true
    pack?: true
    available?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    cardId?: true
    pack?: true
    available?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardAggregateArgs = {
    /**
     * Filter which Card to aggregate.
    **/
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
    **/
    orderBy?: Enumerable<CardOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
    [P in keyof T & keyof AggregateCard]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }


    
    
  export type CardGroupByArgs = {
    where?: CardWhereInput
    orderBy?: Enumerable<CardOrderByInput>
    by: Array<CardScalarFieldEnum>
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: CardCountAggregateInputType | true
    avg?: CardAvgAggregateInputType
    sum?: CardSumAggregateInputType
    min?: CardMinAggregateInputType
    max?: CardMaxAggregateInputType
  }


  export type CardGroupByOutputType = {
    id: string
    cardId: string
    pack: number
    available: number
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    count: CardCountAggregateOutputType | null
    avg: CardAvgAggregateOutputType | null
    sum: CardSumAggregateOutputType | null
    min: CardMinAggregateOutputType | null
    max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Promise<Array<
    PickArray<CardGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof CardGroupByOutputType))]: GetScalarType<T[P], CardGroupByOutputType[P]>
    }
  >>
    

  export type CardSelect = {
    id?: boolean
    cardId?: boolean
    pack?: boolean
    available?: boolean
    logs?: boolean | StreamFindManyArgs
    ownerId?: boolean
    owner?: boolean | OwnerArgs
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardInclude = {
    logs?: boolean | StreamFindManyArgs
    owner?: boolean | OwnerArgs
  }

  export type CardGetPayload<
    S extends boolean | null | undefined | CardArgs,
    U = keyof S
      > = S extends true
        ? Card
    : S extends undefined
    ? never
    : S extends CardArgs | CardFindManyArgs
    ?'include' extends U
    ? Card  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'logs'
        ? Array < StreamGetPayload<S['include'][P]>>  :
        P extends 'owner'
        ? OwnerGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Card ?Card [P]
  : 
          P extends 'logs'
        ? Array < StreamGetPayload<S['select'][P]>>  :
        P extends 'owner'
        ? OwnerGetPayload<S['select'][P]> | null : never
  } 
    : Card
  : Card


  type CardCountArgs = Merge<
    Omit<CardFindManyArgs, 'select' | 'include'> & {
      select?: CardCountAggregateInputType | true
    }
  >

  export interface CardDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CardFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CardFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Card'> extends True ? CheckSelect<T, Prisma__CardClient<Card>, Prisma__CardClient<CardGetPayload<T>>> : CheckSelect<T, Prisma__CardClient<Card | null >, Prisma__CardClient<CardGetPayload<T> | null >>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CardFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CardFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Card'> extends True ? CheckSelect<T, Prisma__CardClient<Card>, Prisma__CardClient<CardGetPayload<T>>> : CheckSelect<T, Prisma__CardClient<Card | null >, Prisma__CardClient<CardGetPayload<T> | null >>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CardFindManyArgs>(
      args?: SelectSubset<T, CardFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Card>>, PrismaPromise<Array<CardGetPayload<T>>>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
    **/
    create<T extends CardCreateArgs>(
      args: SelectSubset<T, CardCreateArgs>
    ): CheckSelect<T, Prisma__CardClient<Card>, Prisma__CardClient<CardGetPayload<T>>>

    /**
     * Create many Cards.
     *     @param {CardCreateManyArgs} args - Arguments to create many Cards.
     *     @example
     *     // Create many Cards
     *     const card = await prisma.card.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CardCreateManyArgs>(
      args?: SelectSubset<T, CardCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
    **/
    delete<T extends CardDeleteArgs>(
      args: SelectSubset<T, CardDeleteArgs>
    ): CheckSelect<T, Prisma__CardClient<Card>, Prisma__CardClient<CardGetPayload<T>>>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CardUpdateArgs>(
      args: SelectSubset<T, CardUpdateArgs>
    ): CheckSelect<T, Prisma__CardClient<Card>, Prisma__CardClient<CardGetPayload<T>>>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CardDeleteManyArgs>(
      args?: SelectSubset<T, CardDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CardUpdateManyArgs>(
      args: SelectSubset<T, CardUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
    **/
    upsert<T extends CardUpsertArgs>(
      args: SelectSubset<T, CardUpsertArgs>
    ): CheckSelect<T, Prisma__CardClient<Card>, Prisma__CardClient<CardGetPayload<T>>>

    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CardClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    logs<T extends StreamFindManyArgs = {}>(args?: Subset<T, StreamFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Stream>>, PrismaPromise<Array<StreamGetPayload<T>>>>;

    owner<T extends OwnerArgs = {}>(args?: Subset<T, OwnerArgs>): CheckSelect<T, Prisma__OwnerClient<Owner | null >, Prisma__OwnerClient<OwnerGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Card
    **/
    select?: CardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CardInclude | null
    /**
     * Throw an Error if a Card can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Card to fetch.
    **/
    where: CardWhereUniqueInput
  }


  /**
   * Card findFirst
   */
  export type CardFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Card
    **/
    select?: CardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CardInclude | null
    /**
     * Throw an Error if a Card can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Card to fetch.
    **/
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
    **/
    orderBy?: Enumerable<CardOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
    **/
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
    **/
    distinct?: Enumerable<CardScalarFieldEnum>
  }


  /**
   * Card findMany
   */
  export type CardFindManyArgs = {
    /**
     * Select specific fields to fetch from the Card
    **/
    select?: CardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CardInclude | null
    /**
     * Filter, which Cards to fetch.
    **/
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
    **/
    orderBy?: Enumerable<CardOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
    **/
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
    **/
    skip?: number
    distinct?: Enumerable<CardScalarFieldEnum>
  }


  /**
   * Card create
   */
  export type CardCreateArgs = {
    /**
     * Select specific fields to fetch from the Card
    **/
    select?: CardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CardInclude | null
    /**
     * The data needed to create a Card.
    **/
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }


  /**
   * Card createMany
   */
  export type CardCreateManyArgs = {
    data: Enumerable<CardCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Card update
   */
  export type CardUpdateArgs = {
    /**
     * Select specific fields to fetch from the Card
    **/
    select?: CardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CardInclude | null
    /**
     * The data needed to update a Card.
    **/
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
    **/
    where: CardWhereUniqueInput
  }


  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs = {
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    where?: CardWhereInput
  }


  /**
   * Card upsert
   */
  export type CardUpsertArgs = {
    /**
     * Select specific fields to fetch from the Card
    **/
    select?: CardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CardInclude | null
    /**
     * The filter to search for the Card to update in case it exists.
    **/
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
    **/
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }


  /**
   * Card delete
   */
  export type CardDeleteArgs = {
    /**
     * Select specific fields to fetch from the Card
    **/
    select?: CardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CardInclude | null
    /**
     * Filter which Card to delete.
    **/
    where: CardWhereUniqueInput
  }


  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs = {
    where?: CardWhereInput
  }


  /**
   * Card without action
   */
  export type CardArgs = {
    /**
     * Select specific fields to fetch from the Card
    **/
    select?: CardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CardInclude | null
  }



  /**
   * Model Refill
   */


  export type AggregateRefill = {
    count: RefillCountAggregateOutputType | null
    avg: RefillAvgAggregateOutputType | null
    sum: RefillSumAggregateOutputType | null
    min: RefillMinAggregateOutputType | null
    max: RefillMaxAggregateOutputType | null
  }

  export type RefillAvgAggregateOutputType = {
    quantity: number | null
    equalsTo: number | null
  }

  export type RefillSumAggregateOutputType = {
    quantity: number | null
    equalsTo: number | null
  }

  export type RefillMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    equalsTo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefillMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    equalsTo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefillCountAggregateOutputType = {
    id: number
    quantity: number
    equalsTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefillAvgAggregateInputType = {
    quantity?: true
    equalsTo?: true
  }

  export type RefillSumAggregateInputType = {
    quantity?: true
    equalsTo?: true
  }

  export type RefillMinAggregateInputType = {
    id?: true
    quantity?: true
    equalsTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefillMaxAggregateInputType = {
    id?: true
    quantity?: true
    equalsTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefillCountAggregateInputType = {
    id?: true
    quantity?: true
    equalsTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefillAggregateArgs = {
    /**
     * Filter which Refill to aggregate.
    **/
    where?: RefillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refills to fetch.
    **/
    orderBy?: Enumerable<RefillOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: RefillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refills from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refills.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refills
    **/
    count?: true | RefillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: RefillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: RefillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: RefillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: RefillMaxAggregateInputType
  }

  export type GetRefillAggregateType<T extends RefillAggregateArgs> = {
    [P in keyof T & keyof AggregateRefill]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefill[P]>
      : GetScalarType<T[P], AggregateRefill[P]>
  }


    
    
  export type RefillGroupByArgs = {
    where?: RefillWhereInput
    orderBy?: Enumerable<RefillOrderByInput>
    by: Array<RefillScalarFieldEnum>
    having?: RefillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: RefillCountAggregateInputType | true
    avg?: RefillAvgAggregateInputType
    sum?: RefillSumAggregateInputType
    min?: RefillMinAggregateInputType
    max?: RefillMaxAggregateInputType
  }


  export type RefillGroupByOutputType = {
    id: string
    quantity: number
    equalsTo: number
    createdAt: Date | null
    updatedAt: Date | null
    count: RefillCountAggregateOutputType | null
    avg: RefillAvgAggregateOutputType | null
    sum: RefillSumAggregateOutputType | null
    min: RefillMinAggregateOutputType | null
    max: RefillMaxAggregateOutputType | null
  }

  type GetRefillGroupByPayload<T extends RefillGroupByArgs> = Promise<Array<
    PickArray<RefillGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof RefillGroupByOutputType))]: GetScalarType<T[P], RefillGroupByOutputType[P]>
    }
  >>
    

  export type RefillSelect = {
    id?: boolean
    quantity?: boolean
    equalsTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefillGetPayload<
    S extends boolean | null | undefined | RefillArgs,
    U = keyof S
      > = S extends true
        ? Refill
    : S extends undefined
    ? never
    : S extends RefillArgs | RefillFindManyArgs
    ?'include' extends U
    ? Refill 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Refill ?Refill [P]
  : 
     never
  } 
    : Refill
  : Refill


  type RefillCountArgs = Merge<
    Omit<RefillFindManyArgs, 'select' | 'include'> & {
      select?: RefillCountAggregateInputType | true
    }
  >

  export interface RefillDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Refill that matches the filter.
     * @param {RefillFindUniqueArgs} args - Arguments to find a Refill
     * @example
     * // Get one Refill
     * const refill = await prisma.refill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RefillFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RefillFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Refill'> extends True ? CheckSelect<T, Prisma__RefillClient<Refill>, Prisma__RefillClient<RefillGetPayload<T>>> : CheckSelect<T, Prisma__RefillClient<Refill | null >, Prisma__RefillClient<RefillGetPayload<T> | null >>

    /**
     * Find the first Refill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefillFindFirstArgs} args - Arguments to find a Refill
     * @example
     * // Get one Refill
     * const refill = await prisma.refill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RefillFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RefillFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Refill'> extends True ? CheckSelect<T, Prisma__RefillClient<Refill>, Prisma__RefillClient<RefillGetPayload<T>>> : CheckSelect<T, Prisma__RefillClient<Refill | null >, Prisma__RefillClient<RefillGetPayload<T> | null >>

    /**
     * Find zero or more Refills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refills
     * const refills = await prisma.refill.findMany()
     * 
     * // Get first 10 Refills
     * const refills = await prisma.refill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refillWithIdOnly = await prisma.refill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RefillFindManyArgs>(
      args?: SelectSubset<T, RefillFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Refill>>, PrismaPromise<Array<RefillGetPayload<T>>>>

    /**
     * Create a Refill.
     * @param {RefillCreateArgs} args - Arguments to create a Refill.
     * @example
     * // Create one Refill
     * const Refill = await prisma.refill.create({
     *   data: {
     *     // ... data to create a Refill
     *   }
     * })
     * 
    **/
    create<T extends RefillCreateArgs>(
      args: SelectSubset<T, RefillCreateArgs>
    ): CheckSelect<T, Prisma__RefillClient<Refill>, Prisma__RefillClient<RefillGetPayload<T>>>

    /**
     * Create many Refills.
     *     @param {RefillCreateManyArgs} args - Arguments to create many Refills.
     *     @example
     *     // Create many Refills
     *     const refill = await prisma.refill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RefillCreateManyArgs>(
      args?: SelectSubset<T, RefillCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Refill.
     * @param {RefillDeleteArgs} args - Arguments to delete one Refill.
     * @example
     * // Delete one Refill
     * const Refill = await prisma.refill.delete({
     *   where: {
     *     // ... filter to delete one Refill
     *   }
     * })
     * 
    **/
    delete<T extends RefillDeleteArgs>(
      args: SelectSubset<T, RefillDeleteArgs>
    ): CheckSelect<T, Prisma__RefillClient<Refill>, Prisma__RefillClient<RefillGetPayload<T>>>

    /**
     * Update one Refill.
     * @param {RefillUpdateArgs} args - Arguments to update one Refill.
     * @example
     * // Update one Refill
     * const refill = await prisma.refill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RefillUpdateArgs>(
      args: SelectSubset<T, RefillUpdateArgs>
    ): CheckSelect<T, Prisma__RefillClient<Refill>, Prisma__RefillClient<RefillGetPayload<T>>>

    /**
     * Delete zero or more Refills.
     * @param {RefillDeleteManyArgs} args - Arguments to filter Refills to delete.
     * @example
     * // Delete a few Refills
     * const { count } = await prisma.refill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RefillDeleteManyArgs>(
      args?: SelectSubset<T, RefillDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refills
     * const refill = await prisma.refill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RefillUpdateManyArgs>(
      args: SelectSubset<T, RefillUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Refill.
     * @param {RefillUpsertArgs} args - Arguments to update or create a Refill.
     * @example
     * // Update or create a Refill
     * const refill = await prisma.refill.upsert({
     *   create: {
     *     // ... data to create a Refill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refill we want to update
     *   }
     * })
    **/
    upsert<T extends RefillUpsertArgs>(
      args: SelectSubset<T, RefillUpsertArgs>
    ): CheckSelect<T, Prisma__RefillClient<Refill>, Prisma__RefillClient<RefillGetPayload<T>>>

    /**
     * Count the number of Refills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefillCountArgs} args - Arguments to filter Refills to count.
     * @example
     * // Count the number of Refills
     * const count = await prisma.refill.count({
     *   where: {
     *     // ... the filter for the Refills we want to count
     *   }
     * })
    **/
    count<T extends RefillCountArgs>(
      args?: Subset<T, RefillCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefillAggregateArgs>(args: Subset<T, RefillAggregateArgs>): PrismaPromise<GetRefillAggregateType<T>>

    /**
     * Group by Refill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefillGroupByArgs['orderBy'] }
        : { orderBy?: RefillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefillGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RefillClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Refill findUnique
   */
  export type RefillFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Refill
    **/
    select?: RefillSelect | null
    /**
     * Throw an Error if a Refill can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Refill to fetch.
    **/
    where: RefillWhereUniqueInput
  }


  /**
   * Refill findFirst
   */
  export type RefillFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Refill
    **/
    select?: RefillSelect | null
    /**
     * Throw an Error if a Refill can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Refill to fetch.
    **/
    where?: RefillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refills to fetch.
    **/
    orderBy?: Enumerable<RefillOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refills.
    **/
    cursor?: RefillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refills from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refills.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refills.
    **/
    distinct?: Enumerable<RefillScalarFieldEnum>
  }


  /**
   * Refill findMany
   */
  export type RefillFindManyArgs = {
    /**
     * Select specific fields to fetch from the Refill
    **/
    select?: RefillSelect | null
    /**
     * Filter, which Refills to fetch.
    **/
    where?: RefillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refills to fetch.
    **/
    orderBy?: Enumerable<RefillOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refills.
    **/
    cursor?: RefillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refills from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refills.
    **/
    skip?: number
    distinct?: Enumerable<RefillScalarFieldEnum>
  }


  /**
   * Refill create
   */
  export type RefillCreateArgs = {
    /**
     * Select specific fields to fetch from the Refill
    **/
    select?: RefillSelect | null
    /**
     * The data needed to create a Refill.
    **/
    data: XOR<RefillCreateInput, RefillUncheckedCreateInput>
  }


  /**
   * Refill createMany
   */
  export type RefillCreateManyArgs = {
    data: Enumerable<RefillCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Refill update
   */
  export type RefillUpdateArgs = {
    /**
     * Select specific fields to fetch from the Refill
    **/
    select?: RefillSelect | null
    /**
     * The data needed to update a Refill.
    **/
    data: XOR<RefillUpdateInput, RefillUncheckedUpdateInput>
    /**
     * Choose, which Refill to update.
    **/
    where: RefillWhereUniqueInput
  }


  /**
   * Refill updateMany
   */
  export type RefillUpdateManyArgs = {
    data: XOR<RefillUpdateManyMutationInput, RefillUncheckedUpdateManyInput>
    where?: RefillWhereInput
  }


  /**
   * Refill upsert
   */
  export type RefillUpsertArgs = {
    /**
     * Select specific fields to fetch from the Refill
    **/
    select?: RefillSelect | null
    /**
     * The filter to search for the Refill to update in case it exists.
    **/
    where: RefillWhereUniqueInput
    /**
     * In case the Refill found by the `where` argument doesn't exist, create a new Refill with this data.
    **/
    create: XOR<RefillCreateInput, RefillUncheckedCreateInput>
    /**
     * In case the Refill was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<RefillUpdateInput, RefillUncheckedUpdateInput>
  }


  /**
   * Refill delete
   */
  export type RefillDeleteArgs = {
    /**
     * Select specific fields to fetch from the Refill
    **/
    select?: RefillSelect | null
    /**
     * Filter which Refill to delete.
    **/
    where: RefillWhereUniqueInput
  }


  /**
   * Refill deleteMany
   */
  export type RefillDeleteManyArgs = {
    where?: RefillWhereInput
  }


  /**
   * Refill without action
   */
  export type RefillArgs = {
    /**
     * Select specific fields to fetch from the Refill
    **/
    select?: RefillSelect | null
  }



  /**
   * Model Owner
   */


  export type AggregateOwner = {
    count: OwnerCountAggregateOutputType | null
    min: OwnerMinAggregateOutputType | null
    max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OwnerAggregateArgs = {
    /**
     * Filter which Owner to aggregate.
    **/
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
    **/
    orderBy?: Enumerable<OwnerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
    [P in keyof T & keyof AggregateOwner]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }


    
    
  export type OwnerGroupByArgs = {
    where?: OwnerWhereInput
    orderBy?: Enumerable<OwnerOrderByInput>
    by: Array<OwnerScalarFieldEnum>
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: OwnerCountAggregateInputType | true
    min?: OwnerMinAggregateInputType
    max?: OwnerMaxAggregateInputType
  }


  export type OwnerGroupByOutputType = {
    id: string
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    count: OwnerCountAggregateOutputType | null
    min: OwnerMinAggregateOutputType | null
    max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Promise<Array<
    PickArray<OwnerGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: GetScalarType<T[P], OwnerGroupByOutputType[P]>
    }
  >>
    

  export type OwnerSelect = {
    id?: boolean
    name?: boolean
    phone?: boolean
    cards?: boolean | CardFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OwnerInclude = {
    cards?: boolean | CardFindManyArgs
  }

  export type OwnerGetPayload<
    S extends boolean | null | undefined | OwnerArgs,
    U = keyof S
      > = S extends true
        ? Owner
    : S extends undefined
    ? never
    : S extends OwnerArgs | OwnerFindManyArgs
    ?'include' extends U
    ? Owner  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'cards'
        ? Array < CardGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Owner ?Owner [P]
  : 
          P extends 'cards'
        ? Array < CardGetPayload<S['select'][P]>>  : never
  } 
    : Owner
  : Owner


  type OwnerCountArgs = Merge<
    Omit<OwnerFindManyArgs, 'select' | 'include'> & {
      select?: OwnerCountAggregateInputType | true
    }
  >

  export interface OwnerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OwnerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OwnerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Owner'> extends True ? CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>> : CheckSelect<T, Prisma__OwnerClient<Owner | null >, Prisma__OwnerClient<OwnerGetPayload<T> | null >>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OwnerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OwnerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Owner'> extends True ? CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>> : CheckSelect<T, Prisma__OwnerClient<Owner | null >, Prisma__OwnerClient<OwnerGetPayload<T> | null >>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OwnerFindManyArgs>(
      args?: SelectSubset<T, OwnerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Owner>>, PrismaPromise<Array<OwnerGetPayload<T>>>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
    **/
    create<T extends OwnerCreateArgs>(
      args: SelectSubset<T, OwnerCreateArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Create many Owners.
     *     @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owner = await prisma.owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OwnerCreateManyArgs>(
      args?: SelectSubset<T, OwnerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
    **/
    delete<T extends OwnerDeleteArgs>(
      args: SelectSubset<T, OwnerDeleteArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OwnerUpdateArgs>(
      args: SelectSubset<T, OwnerUpdateArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OwnerDeleteManyArgs>(
      args?: SelectSubset<T, OwnerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OwnerUpdateManyArgs>(
      args: SelectSubset<T, OwnerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
    **/
    upsert<T extends OwnerUpsertArgs>(
      args: SelectSubset<T, OwnerUpsertArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OwnerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cards<T extends CardFindManyArgs = {}>(args?: Subset<T, CardFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Card>>, PrismaPromise<Array<CardGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Owner
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OwnerInclude | null
    /**
     * Throw an Error if a Owner can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Owner to fetch.
    **/
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Owner
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OwnerInclude | null
    /**
     * Throw an Error if a Owner can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Owner to fetch.
    **/
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
    **/
    orderBy?: Enumerable<OwnerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
    **/
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
    **/
    distinct?: Enumerable<OwnerScalarFieldEnum>
  }


  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Owner
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OwnerInclude | null
    /**
     * Filter, which Owners to fetch.
    **/
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
    **/
    orderBy?: Enumerable<OwnerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
    **/
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
    **/
    skip?: number
    distinct?: Enumerable<OwnerScalarFieldEnum>
  }


  /**
   * Owner create
   */
  export type OwnerCreateArgs = {
    /**
     * Select specific fields to fetch from the Owner
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OwnerInclude | null
    /**
     * The data needed to create a Owner.
    **/
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }


  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs = {
    data: Enumerable<OwnerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Owner update
   */
  export type OwnerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Owner
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OwnerInclude | null
    /**
     * The data needed to update a Owner.
    **/
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
    **/
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs = {
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    where?: OwnerWhereInput
  }


  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Owner
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OwnerInclude | null
    /**
     * The filter to search for the Owner to update in case it exists.
    **/
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
    **/
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }


  /**
   * Owner delete
   */
  export type OwnerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Owner
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OwnerInclude | null
    /**
     * Filter which Owner to delete.
    **/
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs = {
    where?: OwnerWhereInput
  }


  /**
   * Owner without action
   */
  export type OwnerArgs = {
    /**
     * Select specific fields to fetch from the Owner
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OwnerInclude | null
  }



  /**
   * Model Stream
   */


  export type AggregateStream = {
    count: StreamCountAggregateOutputType | null
    avg: StreamAvgAggregateOutputType | null
    sum: StreamSumAggregateOutputType | null
    min: StreamMinAggregateOutputType | null
    max: StreamMaxAggregateOutputType | null
  }

  export type StreamAvgAggregateOutputType = {
    amount: number | null
    amountBefore: number | null
    amountAfter: number | null
  }

  export type StreamSumAggregateOutputType = {
    amount: number | null
    amountBefore: number | null
    amountAfter: number | null
  }

  export type StreamMinAggregateOutputType = {
    id: string | null
    amount: number | null
    amountBefore: number | null
    amountAfter: number | null
    cardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    amountBefore: number | null
    amountAfter: number | null
    cardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamCountAggregateOutputType = {
    id: number
    amount: number
    amountBefore: number
    amountAfter: number
    cardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreamAvgAggregateInputType = {
    amount?: true
    amountBefore?: true
    amountAfter?: true
  }

  export type StreamSumAggregateInputType = {
    amount?: true
    amountBefore?: true
    amountAfter?: true
  }

  export type StreamMinAggregateInputType = {
    id?: true
    amount?: true
    amountBefore?: true
    amountAfter?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamMaxAggregateInputType = {
    id?: true
    amount?: true
    amountBefore?: true
    amountAfter?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamCountAggregateInputType = {
    id?: true
    amount?: true
    amountBefore?: true
    amountAfter?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreamAggregateArgs = {
    /**
     * Filter which Stream to aggregate.
    **/
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
    **/
    orderBy?: Enumerable<StreamOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streams
    **/
    count?: true | StreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: StreamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: StreamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: StreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: StreamMaxAggregateInputType
  }

  export type GetStreamAggregateType<T extends StreamAggregateArgs> = {
    [P in keyof T & keyof AggregateStream]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStream[P]>
      : GetScalarType<T[P], AggregateStream[P]>
  }


    
    
  export type StreamGroupByArgs = {
    where?: StreamWhereInput
    orderBy?: Enumerable<StreamOrderByInput>
    by: Array<StreamScalarFieldEnum>
    having?: StreamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: StreamCountAggregateInputType | true
    avg?: StreamAvgAggregateInputType
    sum?: StreamSumAggregateInputType
    min?: StreamMinAggregateInputType
    max?: StreamMaxAggregateInputType
  }


  export type StreamGroupByOutputType = {
    id: string
    amount: number | null
    amountBefore: number | null
    amountAfter: number | null
    cardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    count: StreamCountAggregateOutputType | null
    avg: StreamAvgAggregateOutputType | null
    sum: StreamSumAggregateOutputType | null
    min: StreamMinAggregateOutputType | null
    max: StreamMaxAggregateOutputType | null
  }

  type GetStreamGroupByPayload<T extends StreamGroupByArgs> = Promise<Array<
    PickArray<StreamGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof StreamGroupByOutputType))]: GetScalarType<T[P], StreamGroupByOutputType[P]>
    }
  >>
    

  export type StreamSelect = {
    id?: boolean
    amount?: boolean
    amountBefore?: boolean
    amountAfter?: boolean
    cardId?: boolean
    card?: boolean | CardArgs
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreamInclude = {
    card?: boolean | CardArgs
  }

  export type StreamGetPayload<
    S extends boolean | null | undefined | StreamArgs,
    U = keyof S
      > = S extends true
        ? Stream
    : S extends undefined
    ? never
    : S extends StreamArgs | StreamFindManyArgs
    ?'include' extends U
    ? Stream  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'card'
        ? CardGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Stream ?Stream [P]
  : 
          P extends 'card'
        ? CardGetPayload<S['select'][P]> | null : never
  } 
    : Stream
  : Stream


  type StreamCountArgs = Merge<
    Omit<StreamFindManyArgs, 'select' | 'include'> & {
      select?: StreamCountAggregateInputType | true
    }
  >

  export interface StreamDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Stream that matches the filter.
     * @param {StreamFindUniqueArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StreamFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StreamFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Stream'> extends True ? CheckSelect<T, Prisma__StreamClient<Stream>, Prisma__StreamClient<StreamGetPayload<T>>> : CheckSelect<T, Prisma__StreamClient<Stream | null >, Prisma__StreamClient<StreamGetPayload<T> | null >>

    /**
     * Find the first Stream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StreamFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StreamFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Stream'> extends True ? CheckSelect<T, Prisma__StreamClient<Stream>, Prisma__StreamClient<StreamGetPayload<T>>> : CheckSelect<T, Prisma__StreamClient<Stream | null >, Prisma__StreamClient<StreamGetPayload<T> | null >>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.stream.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.stream.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamWithIdOnly = await prisma.stream.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StreamFindManyArgs>(
      args?: SelectSubset<T, StreamFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Stream>>, PrismaPromise<Array<StreamGetPayload<T>>>>

    /**
     * Create a Stream.
     * @param {StreamCreateArgs} args - Arguments to create a Stream.
     * @example
     * // Create one Stream
     * const Stream = await prisma.stream.create({
     *   data: {
     *     // ... data to create a Stream
     *   }
     * })
     * 
    **/
    create<T extends StreamCreateArgs>(
      args: SelectSubset<T, StreamCreateArgs>
    ): CheckSelect<T, Prisma__StreamClient<Stream>, Prisma__StreamClient<StreamGetPayload<T>>>

    /**
     * Create many Streams.
     *     @param {StreamCreateManyArgs} args - Arguments to create many Streams.
     *     @example
     *     // Create many Streams
     *     const stream = await prisma.stream.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StreamCreateManyArgs>(
      args?: SelectSubset<T, StreamCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Stream.
     * @param {StreamDeleteArgs} args - Arguments to delete one Stream.
     * @example
     * // Delete one Stream
     * const Stream = await prisma.stream.delete({
     *   where: {
     *     // ... filter to delete one Stream
     *   }
     * })
     * 
    **/
    delete<T extends StreamDeleteArgs>(
      args: SelectSubset<T, StreamDeleteArgs>
    ): CheckSelect<T, Prisma__StreamClient<Stream>, Prisma__StreamClient<StreamGetPayload<T>>>

    /**
     * Update one Stream.
     * @param {StreamUpdateArgs} args - Arguments to update one Stream.
     * @example
     * // Update one Stream
     * const stream = await prisma.stream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StreamUpdateArgs>(
      args: SelectSubset<T, StreamUpdateArgs>
    ): CheckSelect<T, Prisma__StreamClient<Stream>, Prisma__StreamClient<StreamGetPayload<T>>>

    /**
     * Delete zero or more Streams.
     * @param {StreamDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.stream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StreamDeleteManyArgs>(
      args?: SelectSubset<T, StreamDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StreamUpdateManyArgs>(
      args: SelectSubset<T, StreamUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Stream.
     * @param {StreamUpsertArgs} args - Arguments to update or create a Stream.
     * @example
     * // Update or create a Stream
     * const stream = await prisma.stream.upsert({
     *   create: {
     *     // ... data to create a Stream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stream we want to update
     *   }
     * })
    **/
    upsert<T extends StreamUpsertArgs>(
      args: SelectSubset<T, StreamUpsertArgs>
    ): CheckSelect<T, Prisma__StreamClient<Stream>, Prisma__StreamClient<StreamGetPayload<T>>>

    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.stream.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends StreamCountArgs>(
      args?: Subset<T, StreamCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamAggregateArgs>(args: Subset<T, StreamAggregateArgs>): PrismaPromise<GetStreamAggregateType<T>>

    /**
     * Group by Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamGroupByArgs['orderBy'] }
        : { orderBy?: StreamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StreamClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    card<T extends CardArgs = {}>(args?: Subset<T, CardArgs>): CheckSelect<T, Prisma__CardClient<Card | null >, Prisma__CardClient<CardGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Stream findUnique
   */
  export type StreamFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Stream
    **/
    select?: StreamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StreamInclude | null
    /**
     * Throw an Error if a Stream can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Stream to fetch.
    **/
    where: StreamWhereUniqueInput
  }


  /**
   * Stream findFirst
   */
  export type StreamFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Stream
    **/
    select?: StreamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StreamInclude | null
    /**
     * Throw an Error if a Stream can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Stream to fetch.
    **/
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
    **/
    orderBy?: Enumerable<StreamOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
    **/
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
    **/
    distinct?: Enumerable<StreamScalarFieldEnum>
  }


  /**
   * Stream findMany
   */
  export type StreamFindManyArgs = {
    /**
     * Select specific fields to fetch from the Stream
    **/
    select?: StreamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StreamInclude | null
    /**
     * Filter, which Streams to fetch.
    **/
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
    **/
    orderBy?: Enumerable<StreamOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streams.
    **/
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
    **/
    skip?: number
    distinct?: Enumerable<StreamScalarFieldEnum>
  }


  /**
   * Stream create
   */
  export type StreamCreateArgs = {
    /**
     * Select specific fields to fetch from the Stream
    **/
    select?: StreamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StreamInclude | null
    /**
     * The data needed to create a Stream.
    **/
    data: XOR<StreamCreateInput, StreamUncheckedCreateInput>
  }


  /**
   * Stream createMany
   */
  export type StreamCreateManyArgs = {
    data: Enumerable<StreamCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Stream update
   */
  export type StreamUpdateArgs = {
    /**
     * Select specific fields to fetch from the Stream
    **/
    select?: StreamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StreamInclude | null
    /**
     * The data needed to update a Stream.
    **/
    data: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
    /**
     * Choose, which Stream to update.
    **/
    where: StreamWhereUniqueInput
  }


  /**
   * Stream updateMany
   */
  export type StreamUpdateManyArgs = {
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyInput>
    where?: StreamWhereInput
  }


  /**
   * Stream upsert
   */
  export type StreamUpsertArgs = {
    /**
     * Select specific fields to fetch from the Stream
    **/
    select?: StreamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StreamInclude | null
    /**
     * The filter to search for the Stream to update in case it exists.
    **/
    where: StreamWhereUniqueInput
    /**
     * In case the Stream found by the `where` argument doesn't exist, create a new Stream with this data.
    **/
    create: XOR<StreamCreateInput, StreamUncheckedCreateInput>
    /**
     * In case the Stream was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
  }


  /**
   * Stream delete
   */
  export type StreamDeleteArgs = {
    /**
     * Select specific fields to fetch from the Stream
    **/
    select?: StreamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StreamInclude | null
    /**
     * Filter which Stream to delete.
    **/
    where: StreamWhereUniqueInput
  }


  /**
   * Stream deleteMany
   */
  export type StreamDeleteManyArgs = {
    where?: StreamWhereInput
  }


  /**
   * Stream without action
   */
  export type StreamArgs = {
    /**
     * Select specific fields to fetch from the Stream
    **/
    select?: StreamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StreamInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CardScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    pack: 'pack',
    available: 'available',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const RefillScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    equalsTo: 'equalsTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefillScalarFieldEnum = (typeof RefillScalarFieldEnum)[keyof typeof RefillScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const StreamScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    amountBefore: 'amountBefore',
    amountAfter: 'amountAfter',
    cardId: 'cardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreamScalarFieldEnum = (typeof StreamScalarFieldEnum)[keyof typeof StreamScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type CardWhereInput = {
    AND?: Enumerable<CardWhereInput>
    OR?: Enumerable<CardWhereInput>
    NOT?: Enumerable<CardWhereInput>
    id?: StringFilter | string
    cardId?: StringFilter | string
    pack?: IntFilter | number
    available?: IntFilter | number
    logs?: StreamListRelationFilter
    ownerId?: StringNullableFilter | string | null
    owner?: XOR<OwnerRelationFilter, OwnerWhereInput> | null
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type CardOrderByInput = {
    id?: SortOrder
    cardId?: SortOrder
    pack?: SortOrder
    available?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardWhereUniqueInput = {
    id?: string
    cardId?: string
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CardScalarWhereWithAggregatesInput>
    OR?: Enumerable<CardScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CardScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    cardId?: StringWithAggregatesFilter | string
    pack?: IntWithAggregatesFilter | number
    available?: IntWithAggregatesFilter | number
    ownerId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type RefillWhereInput = {
    AND?: Enumerable<RefillWhereInput>
    OR?: Enumerable<RefillWhereInput>
    NOT?: Enumerable<RefillWhereInput>
    id?: StringFilter | string
    quantity?: IntFilter | number
    equalsTo?: IntFilter | number
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type RefillOrderByInput = {
    id?: SortOrder
    quantity?: SortOrder
    equalsTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefillWhereUniqueInput = {
    id?: string
  }

  export type RefillScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RefillScalarWhereWithAggregatesInput>
    OR?: Enumerable<RefillScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RefillScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    quantity?: IntWithAggregatesFilter | number
    equalsTo?: IntWithAggregatesFilter | number
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type OwnerWhereInput = {
    AND?: Enumerable<OwnerWhereInput>
    OR?: Enumerable<OwnerWhereInput>
    NOT?: Enumerable<OwnerWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    cards?: CardListRelationFilter
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type OwnerOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnerWhereUniqueInput = {
    id?: string
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OwnerScalarWhereWithAggregatesInput>
    OR?: Enumerable<OwnerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OwnerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type StreamWhereInput = {
    AND?: Enumerable<StreamWhereInput>
    OR?: Enumerable<StreamWhereInput>
    NOT?: Enumerable<StreamWhereInput>
    id?: StringFilter | string
    amount?: IntNullableFilter | number | null
    amountBefore?: IntNullableFilter | number | null
    amountAfter?: IntNullableFilter | number | null
    cardId?: StringNullableFilter | string | null
    card?: XOR<CardRelationFilter, CardWhereInput> | null
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type StreamOrderByInput = {
    id?: SortOrder
    amount?: SortOrder
    amountBefore?: SortOrder
    amountAfter?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamWhereUniqueInput = {
    id?: string
  }

  export type StreamScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StreamScalarWhereWithAggregatesInput>
    OR?: Enumerable<StreamScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StreamScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    amount?: IntNullableWithAggregatesFilter | number | null
    amountBefore?: IntNullableWithAggregatesFilter | number | null
    amountAfter?: IntNullableWithAggregatesFilter | number | null
    cardId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type CardCreateInput = {
    id?: string
    cardId: string
    pack?: number
    available?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    logs?: StreamCreateNestedManyWithoutCardInput
    owner?: OwnerCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    cardId: string
    pack?: number
    available?: number
    ownerId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    logs?: StreamUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs?: StreamUpdateManyWithoutCardInput
    owner?: OwnerUpdateOneWithoutCardsInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs?: StreamUncheckedUpdateManyWithoutCardInput
  }

  export type CardCreateManyInput = {
    id?: string
    cardId: string
    pack?: number
    available?: number
    ownerId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefillCreateInput = {
    id?: string
    quantity?: number
    equalsTo?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type RefillUncheckedCreateInput = {
    id?: string
    quantity?: number
    equalsTo?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type RefillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    equalsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    equalsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefillCreateManyInput = {
    id?: string
    quantity?: number
    equalsTo?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type RefillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    equalsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    equalsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerCreateInput = {
    id?: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    cards?: CardCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    cards?: CardUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: CardUpdateManyWithoutOwnerInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: CardUncheckedUpdateManyWithoutOwnerInput
  }

  export type OwnerCreateManyInput = {
    id?: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StreamCreateInput = {
    id?: string
    amount?: number | null
    amountBefore?: number | null
    amountAfter?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    card?: CardCreateNestedOneWithoutLogsInput
  }

  export type StreamUncheckedCreateInput = {
    id?: string
    amount?: number | null
    amountBefore?: number | null
    amountAfter?: number | null
    cardId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StreamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    amountBefore?: NullableIntFieldUpdateOperationsInput | number | null
    amountAfter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    card?: CardUpdateOneWithoutLogsInput
  }

  export type StreamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    amountBefore?: NullableIntFieldUpdateOperationsInput | number | null
    amountAfter?: NullableIntFieldUpdateOperationsInput | number | null
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StreamCreateManyInput = {
    id?: string
    amount?: number | null
    amountBefore?: number | null
    amountAfter?: number | null
    cardId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StreamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    amountBefore?: NullableIntFieldUpdateOperationsInput | number | null
    amountAfter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StreamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    amountBefore?: NullableIntFieldUpdateOperationsInput | number | null
    amountAfter?: NullableIntFieldUpdateOperationsInput | number | null
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StreamListRelationFilter = {
    every?: StreamWhereInput
    some?: StreamWhereInput
    none?: StreamWhereInput
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type OwnerRelationFilter = {
    is?: OwnerWhereInput | null
    isNot?: OwnerWhereInput | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    count?: NestedIntNullableFilter
    min?: NestedStringNullableFilter
    max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    count?: NestedIntNullableFilter
    min?: NestedDateTimeNullableFilter
    max?: NestedDateTimeNullableFilter
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type CardRelationFilter = {
    is?: CardWhereInput | null
    isNot?: CardWhereInput | null
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    count?: NestedIntNullableFilter
    avg?: NestedFloatNullableFilter
    sum?: NestedIntNullableFilter
    min?: NestedIntNullableFilter
    max?: NestedIntNullableFilter
  }

  export type StreamCreateNestedManyWithoutCardInput = {
    create?: XOR<Enumerable<StreamCreateWithoutCardInput>, Enumerable<StreamUncheckedCreateWithoutCardInput>>
    connectOrCreate?: Enumerable<StreamCreateOrConnectWithoutCardInput>
    createMany?: StreamCreateManyCardInputEnvelope
    connect?: Enumerable<StreamWhereUniqueInput>
  }

  export type OwnerCreateNestedOneWithoutCardsInput = {
    create?: XOR<OwnerCreateWithoutCardsInput, OwnerUncheckedCreateWithoutCardsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutCardsInput
    connect?: OwnerWhereUniqueInput
  }

  export type StreamUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<Enumerable<StreamCreateWithoutCardInput>, Enumerable<StreamUncheckedCreateWithoutCardInput>>
    connectOrCreate?: Enumerable<StreamCreateOrConnectWithoutCardInput>
    createMany?: StreamCreateManyCardInputEnvelope
    connect?: Enumerable<StreamWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StreamUpdateManyWithoutCardInput = {
    create?: XOR<Enumerable<StreamCreateWithoutCardInput>, Enumerable<StreamUncheckedCreateWithoutCardInput>>
    connectOrCreate?: Enumerable<StreamCreateOrConnectWithoutCardInput>
    upsert?: Enumerable<StreamUpsertWithWhereUniqueWithoutCardInput>
    createMany?: StreamCreateManyCardInputEnvelope
    connect?: Enumerable<StreamWhereUniqueInput>
    set?: Enumerable<StreamWhereUniqueInput>
    disconnect?: Enumerable<StreamWhereUniqueInput>
    delete?: Enumerable<StreamWhereUniqueInput>
    update?: Enumerable<StreamUpdateWithWhereUniqueWithoutCardInput>
    updateMany?: Enumerable<StreamUpdateManyWithWhereWithoutCardInput>
    deleteMany?: Enumerable<StreamScalarWhereInput>
  }

  export type OwnerUpdateOneWithoutCardsInput = {
    create?: XOR<OwnerCreateWithoutCardsInput, OwnerUncheckedCreateWithoutCardsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutCardsInput
    upsert?: OwnerUpsertWithoutCardsInput
    connect?: OwnerWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<OwnerUpdateWithoutCardsInput, OwnerUncheckedUpdateWithoutCardsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StreamUncheckedUpdateManyWithoutCardInput = {
    create?: XOR<Enumerable<StreamCreateWithoutCardInput>, Enumerable<StreamUncheckedCreateWithoutCardInput>>
    connectOrCreate?: Enumerable<StreamCreateOrConnectWithoutCardInput>
    upsert?: Enumerable<StreamUpsertWithWhereUniqueWithoutCardInput>
    createMany?: StreamCreateManyCardInputEnvelope
    connect?: Enumerable<StreamWhereUniqueInput>
    set?: Enumerable<StreamWhereUniqueInput>
    disconnect?: Enumerable<StreamWhereUniqueInput>
    delete?: Enumerable<StreamWhereUniqueInput>
    update?: Enumerable<StreamUpdateWithWhereUniqueWithoutCardInput>
    updateMany?: Enumerable<StreamUpdateManyWithWhereWithoutCardInput>
    deleteMany?: Enumerable<StreamScalarWhereInput>
  }

  export type CardCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CardCreateWithoutOwnerInput>, Enumerable<CardUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CardCreateOrConnectWithoutOwnerInput>
    createMany?: CardCreateManyOwnerInputEnvelope
    connect?: Enumerable<CardWhereUniqueInput>
  }

  export type CardUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CardCreateWithoutOwnerInput>, Enumerable<CardUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CardCreateOrConnectWithoutOwnerInput>
    createMany?: CardCreateManyOwnerInputEnvelope
    connect?: Enumerable<CardWhereUniqueInput>
  }

  export type CardUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CardCreateWithoutOwnerInput>, Enumerable<CardUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CardCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<CardUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: CardCreateManyOwnerInputEnvelope
    connect?: Enumerable<CardWhereUniqueInput>
    set?: Enumerable<CardWhereUniqueInput>
    disconnect?: Enumerable<CardWhereUniqueInput>
    delete?: Enumerable<CardWhereUniqueInput>
    update?: Enumerable<CardUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<CardUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<CardScalarWhereInput>
  }

  export type CardUncheckedUpdateManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CardCreateWithoutOwnerInput>, Enumerable<CardUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CardCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<CardUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: CardCreateManyOwnerInputEnvelope
    connect?: Enumerable<CardWhereUniqueInput>
    set?: Enumerable<CardWhereUniqueInput>
    disconnect?: Enumerable<CardWhereUniqueInput>
    delete?: Enumerable<CardWhereUniqueInput>
    update?: Enumerable<CardUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<CardUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<CardScalarWhereInput>
  }

  export type CardCreateNestedOneWithoutLogsInput = {
    create?: XOR<CardCreateWithoutLogsInput, CardUncheckedCreateWithoutLogsInput>
    connectOrCreate?: CardCreateOrConnectWithoutLogsInput
    connect?: CardWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardUpdateOneWithoutLogsInput = {
    create?: XOR<CardCreateWithoutLogsInput, CardUncheckedCreateWithoutLogsInput>
    connectOrCreate?: CardCreateOrConnectWithoutLogsInput
    upsert?: CardUpsertWithoutLogsInput
    connect?: CardWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<CardUpdateWithoutLogsInput, CardUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    count?: NestedIntNullableFilter
    min?: NestedStringNullableFilter
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    count?: NestedIntNullableFilter
    min?: NestedDateTimeNullableFilter
    max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    count?: NestedIntNullableFilter
    avg?: NestedFloatNullableFilter
    sum?: NestedIntNullableFilter
    min?: NestedIntNullableFilter
    max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type StreamCreateWithoutCardInput = {
    id?: string
    amount?: number | null
    amountBefore?: number | null
    amountAfter?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StreamUncheckedCreateWithoutCardInput = {
    id?: string
    amount?: number | null
    amountBefore?: number | null
    amountAfter?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StreamCreateOrConnectWithoutCardInput = {
    where: StreamWhereUniqueInput
    create: XOR<StreamCreateWithoutCardInput, StreamUncheckedCreateWithoutCardInput>
  }

  export type StreamCreateManyCardInputEnvelope = {
    data: Enumerable<StreamCreateManyCardInput>
    skipDuplicates?: boolean
  }

  export type OwnerCreateWithoutCardsInput = {
    id?: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OwnerUncheckedCreateWithoutCardsInput = {
    id?: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OwnerCreateOrConnectWithoutCardsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutCardsInput, OwnerUncheckedCreateWithoutCardsInput>
  }

  export type StreamUpsertWithWhereUniqueWithoutCardInput = {
    where: StreamWhereUniqueInput
    update: XOR<StreamUpdateWithoutCardInput, StreamUncheckedUpdateWithoutCardInput>
    create: XOR<StreamCreateWithoutCardInput, StreamUncheckedCreateWithoutCardInput>
  }

  export type StreamUpdateWithWhereUniqueWithoutCardInput = {
    where: StreamWhereUniqueInput
    data: XOR<StreamUpdateWithoutCardInput, StreamUncheckedUpdateWithoutCardInput>
  }

  export type StreamUpdateManyWithWhereWithoutCardInput = {
    where: StreamScalarWhereInput
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyWithoutLogsInput>
  }

  export type StreamScalarWhereInput = {
    AND?: Enumerable<StreamScalarWhereInput>
    OR?: Enumerable<StreamScalarWhereInput>
    NOT?: Enumerable<StreamScalarWhereInput>
    id?: StringFilter | string
    amount?: IntNullableFilter | number | null
    amountBefore?: IntNullableFilter | number | null
    amountAfter?: IntNullableFilter | number | null
    cardId?: StringNullableFilter | string | null
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type OwnerUpsertWithoutCardsInput = {
    update: XOR<OwnerUpdateWithoutCardsInput, OwnerUncheckedUpdateWithoutCardsInput>
    create: XOR<OwnerCreateWithoutCardsInput, OwnerUncheckedCreateWithoutCardsInput>
  }

  export type OwnerUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CardCreateWithoutOwnerInput = {
    id?: string
    cardId: string
    pack?: number
    available?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    logs?: StreamCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutOwnerInput = {
    id?: string
    cardId: string
    pack?: number
    available?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    logs?: StreamUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutOwnerInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutOwnerInput, CardUncheckedCreateWithoutOwnerInput>
  }

  export type CardCreateManyOwnerInputEnvelope = {
    data: Enumerable<CardCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type CardUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutOwnerInput, CardUncheckedUpdateWithoutOwnerInput>
    create: XOR<CardCreateWithoutOwnerInput, CardUncheckedCreateWithoutOwnerInput>
  }

  export type CardUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutOwnerInput, CardUncheckedUpdateWithoutOwnerInput>
  }

  export type CardUpdateManyWithWhereWithoutOwnerInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutCardsInput>
  }

  export type CardScalarWhereInput = {
    AND?: Enumerable<CardScalarWhereInput>
    OR?: Enumerable<CardScalarWhereInput>
    NOT?: Enumerable<CardScalarWhereInput>
    id?: StringFilter | string
    cardId?: StringFilter | string
    pack?: IntFilter | number
    available?: IntFilter | number
    ownerId?: StringNullableFilter | string | null
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type CardCreateWithoutLogsInput = {
    id?: string
    cardId: string
    pack?: number
    available?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    owner?: OwnerCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutLogsInput = {
    id?: string
    cardId: string
    pack?: number
    available?: number
    ownerId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CardCreateOrConnectWithoutLogsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutLogsInput, CardUncheckedCreateWithoutLogsInput>
  }

  export type CardUpsertWithoutLogsInput = {
    update: XOR<CardUpdateWithoutLogsInput, CardUncheckedUpdateWithoutLogsInput>
    create: XOR<CardCreateWithoutLogsInput, CardUncheckedCreateWithoutLogsInput>
  }

  export type CardUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: OwnerUpdateOneWithoutCardsInput
  }

  export type CardUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StreamCreateManyCardInput = {
    id?: string
    amount?: number | null
    amountBefore?: number | null
    amountAfter?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StreamUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    amountBefore?: NullableIntFieldUpdateOperationsInput | number | null
    amountAfter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StreamUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    amountBefore?: NullableIntFieldUpdateOperationsInput | number | null
    amountAfter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StreamUncheckedUpdateManyWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    amountBefore?: NullableIntFieldUpdateOperationsInput | number | null
    amountAfter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CardCreateManyOwnerInput = {
    id?: string
    cardId: string
    pack?: number
    available?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CardUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs?: StreamUpdateManyWithoutCardInput
  }

  export type CardUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs?: StreamUncheckedUpdateManyWithoutCardInput
  }

  export type CardUncheckedUpdateManyWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    pack?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}