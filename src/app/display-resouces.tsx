import resourceType from "@/types/resource-type";
import ResourceCard from "@/components/resource-card";
import { useMemo } from "react";

export default function DisplayResources({ resources }: { resources: resourceType[] }) {
    const display = useMemo(() => {
        return resources.map((r, i) => (
            <ResourceCard resource={r} key={i} />
        ))
    }, [resources])

    if (resources.length <= 0) {
        return (
            <div className={'h-[calc(100vh-60px)] grid place-items-center'}>
                No resource.
            </div>
        )
    }

    return (
        <section className={'flex justify-center flex-wrap gap-4 p-4'}>
            {display}
        </section>
    )
}