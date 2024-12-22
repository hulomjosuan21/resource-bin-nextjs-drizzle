'use server'

import {db} from "@/db/drizzle";
import {resourceTable} from "@/db/schemas/schema";
import resourceType from "@/types/resource-type";
import {revalidatePath} from "next/cache";

export async function getResources(){
    return db.select().from(resourceTable);
}

export async function addResource(value: resourceType){
    await db.insert(resourceTable).values(value);
    revalidatePath('/')
}
