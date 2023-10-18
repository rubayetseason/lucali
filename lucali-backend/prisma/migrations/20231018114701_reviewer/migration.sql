/*
  Warnings:

  - You are about to drop the column `userName` on the `reviews` table. All the data in the column will be lost.
  - Added the required column `reviewer` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "userName",
ADD COLUMN     "reviewer" TEXT NOT NULL;
