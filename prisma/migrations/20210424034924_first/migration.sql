-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "pack" INTEGER NOT NULL,
    "available" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Refill" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "equalsTo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "cardId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stream" (
    "id" TEXT NOT NULL,
    "cardId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card.cardId_unique" ON "Card"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_cardId_unique" ON "Owner"("cardId");

-- AddForeignKey
ALTER TABLE "Owner" ADD FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stream" ADD FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
