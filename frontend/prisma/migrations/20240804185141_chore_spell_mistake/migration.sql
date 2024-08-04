/*
  Warnings:

  - You are about to drop the column `InrWalletId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "InrWalletId",
ADD COLUMN     "inrWalletId" TEXT;
