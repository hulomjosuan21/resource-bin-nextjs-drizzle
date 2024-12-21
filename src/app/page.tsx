import {db} from "@/db/drizzle";
import {resourceTable} from "@/db/schemas/schema";

export default async function Home(){
    const resources = await db.select().from(resourceTable);

    console.log(resources)

    return (
        <main>

        </main>
    )
}