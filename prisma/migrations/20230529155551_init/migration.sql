/*
  Warnings:

  - You are about to drop the column `authorId` on the `Accounts` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Accounts` DROP FOREIGN KEY `Accounts_authorId_fkey`;

-- AlterTable
ALTER TABLE `Accounts` DROP COLUMN `authorId`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `password` VARCHAR(191) NOT NULL;
