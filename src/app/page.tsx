import {getResources} from "@/actions/resource-actions";
import DisplayResources from "@/app/display-resouces";

export default async function Home(){
    const resources = await getResources();

    return (
        <main>
            <DisplayResources resources={resources}/>

        </main>
    )
}