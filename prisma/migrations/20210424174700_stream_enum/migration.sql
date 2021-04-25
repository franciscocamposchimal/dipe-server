/*
  Warnings:

  - Added the required column `type` to the `Stream` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeStream" AS ENUM ('DISCOUNT', 'ADD');

-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "type" "TypeStream" NOT NULL;
