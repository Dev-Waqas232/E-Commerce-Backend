import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "instructor", "student"]);

export const usersTable = pgTable("users", {
  id: uuid().primaryKey(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: roleEnum(),
});
