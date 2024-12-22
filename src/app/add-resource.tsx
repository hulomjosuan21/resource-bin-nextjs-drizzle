'use client'
import { Button } from "@/components/ui/button";
import { addResource } from "@/actions/resource-actions";
import resourceType from "@/types/resource-type";
import { CirclePlus } from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState } from "react";
import { RESOURCE_ENUM } from "@/constants/resource-enum";

export default function AddResource() {
    const [newResource, setNewResource] = useState({ title: '', description: '', link: '', code: '' })

    const handleNewResourceInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setNewResource((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    const handleAddResource = async () => {
        let tags;
        if (!newResource.code && newResource.link) {
            tags = RESOURCE_ENUM.LINK_ONLY
        } else if (newResource.code && !newResource.link) {
            tags = RESOURCE_ENUM.CODE_ONLY
        } else {
            tags = RESOURCE_ENUM.CODE_LINK
        }

        const _newResource: resourceType = {
            ...newResource,
            tags: tags as string
        }
        await addResource(_newResource)
    }

    const isAdd = !(newResource.link || newResource.code);

    return (
        <Dialog>
            <DialogTrigger asChild={true}>
                <Button size={'icon'}><CirclePlus /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new resource</DialogTitle>
                </DialogHeader>

                <div className={'grid gap-4'}>
                    <Input placeholder={'Title'} onChange={handleNewResourceInputChange} id={'title'} />
                    <Textarea placeholder={'Description'} onChange={handleNewResourceInputChange} id={'description'} />
                    <Input placeholder={'Link'} onChange={handleNewResourceInputChange} id={'link'} />
                    <Textarea placeholder={'Code'} onChange={handleNewResourceInputChange} id={'code'} />
                </div>

                <DialogFooter className={'flex justify-end'}>
                    <DialogClose>
                        <Button onClick={handleAddResource} disabled={isAdd}>Add</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}