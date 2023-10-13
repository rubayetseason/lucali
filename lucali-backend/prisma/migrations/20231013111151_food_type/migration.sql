/*
  Warnings:

  - Added the required column `type` to the `foods` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FoodType" AS ENUM ('STARTERS', 'MAINCOURSE', 'DESSERTS', 'MOCKTAILS');

-- AlterTable
ALTER TABLE "foods" ADD COLUMN     "type" "FoodType" NOT NULL;
