/*
  Warnings:

  - You are about to drop the column `firstImg` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the column `secondImg` on the `foods` table. All the data in the column will be lost.
  - Added the required column `detail` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `people` to the `reservations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foods" DROP COLUMN "firstImg",
DROP COLUMN "secondImg",
ADD COLUMN     "detail" TEXT NOT NULL,
ADD COLUMN     "img" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "reservations" ADD COLUMN     "people" TEXT NOT NULL;
