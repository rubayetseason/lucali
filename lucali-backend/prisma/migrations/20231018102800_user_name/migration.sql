/*
  Warnings:

  - You are about to drop the column `userId` on the `reviews` table. All the data in the column will be lost.
  - Added the required column `userName` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "userId",
ADD COLUMN     "userName" TEXT NOT NULL;
