import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const resourceTable = pgTable("resources", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 1000 }).notNull(),
    description: text().notNull(),
    link: varchar({length: 1000}),
    code: text(),
    tags: varchar({length: 50}).notNull()
});
