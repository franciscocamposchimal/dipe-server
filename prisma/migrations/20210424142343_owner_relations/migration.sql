/*
  Warnings:

  - You are about to drop the column `cardId` on the `Owner` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Owner" DROP CONSTRAINT "Owner_cardId_fkey";

-- DropIndex
DROP INDEX "Owner_cardId_unique";

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "ownerId" TEXT;

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "cardId";

-- AddForeignKey
ALTER TABLE "Card" ADD FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
