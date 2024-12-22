'use server'

import { db } from "@/db/drizzle";
import { resourceTable } from "@/db/schemas/schema";
import resourceType from "@/types/resource-type";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getResources() {
    return db.select().from(resourceTable);
}

export async function addResource(value: resourceType) {
    await db.insert(resourceTable).values(value);
    revalidatePath('/')
}

export async function deleteResource(id: number) {
    await db.delete(resourceTable).where(eq(resourceTable.id, id));
    revalidatePath('/')
}