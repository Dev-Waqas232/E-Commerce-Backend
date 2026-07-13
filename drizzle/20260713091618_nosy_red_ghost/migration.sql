CREATE TYPE "role" AS ENUM('admin', 'instructor', 'student');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" "role";