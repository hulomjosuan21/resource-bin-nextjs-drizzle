'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import resourceType from "@/types/resource-type";
import {Button} from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import {Input} from "@/components/ui/input";
import {RESOURCE_ENUM} from "@/constants/resource-enum";
import {useToast} from "@/hooks/use-toast";

export default function ResourceCard({resource}:{resource:resourceType}){
    const { toast } = useToast();

    function linkCopyToClipboard(text: string) {
        if (!navigator.clipboard) {
            toast({
                title: "Browser error!",
                variant: 'destructive',
                description: "can't support copy clipboard"
            })
            return;
        }

        navigator.clipboard.writeText(text)
            .then(() => {
                toast({
                    title: "Link",
                    description: "Copied to clipboard"
                })
            })
            .catch((error) => {
                toast({
                    title: "Failed to copy",
                    variant: 'destructive',
                    description: `text to clipboard: ${error}`
                })
            });
    }

    function codeCopyToClipboard(text: string) {
        if (!navigator.clipboard) {
            toast({
                title: "Browser error!",
                variant: 'destructive',
                description: "can't support copy clipboard"
            })
            return;
        }

        navigator.clipboard.writeText(text)
            .then(() => {
                toast({
                    title: "Code",
                    description: "Copied to clipboard"
                })
            })
            .catch((error) => {
                toast({
                    title: "Failed to copy",
                    variant: 'destructive',
                    description: `text to clipboard: ${error}`
                })
            });
    }

    const Content = () => {
        if(resource.tags == RESOURCE_ENUM.CODE_LINK){
            return ( <>
                <div className={'flex flex-row-reverse gap-1 items-center mb-2'}>
                    <Input value={resource.link as string} readOnly={true} className={'text-xs'} />
                    <Button variant={'ghost'} size={'icon'} onClick={() => linkCopyToClipboard(resource.link as string)}>
                        <Clipboard/>
                    </Button>
                </div>

                <div>
                    <div className="relative w-full p-2 rounded-lg border max-h-[200px] overflow-y-auto">
                        <div className={'sticky z-[2] top-0 flex justify-end w-full'}>
                            <Button variant={'ghost'} size={'icon'} onClick={() => codeCopyToClipboard(resource.code as string)}>
                                <Clipboard/>
                            </Button>
                        </div>
                        <pre className="overflow-x-auto text-xs break-words">
                        <code>
                            {resource.code}
                        </code>
                      </pre>
                    </div>
                </div>
            </>)
        }else if(resource.tags == RESOURCE_ENUM.CODE_ONLY) {
            return (
                <div className="relative w-full p-2 rounded-lg border max-h-[200px] overflow-y-auto">
                    <div className={'sticky z-[2] top-0 flex justify-end w-full'}>
                        <Button variant={'ghost'} size={'icon'} onClick={() => codeCopyToClipboard(resource.code as string)}>
                            <Clipboard/>
                        </Button>
                    </div>
                    <pre className="overflow-x-auto text-xs break-words">
                        <code>
                            {resource.code}
                        </code>
                      </pre>
                </div>
            )
        } else {
            return (<div className={'flex gap-1 items-center mb-2'}>
                <Input value={resource.link as string} readOnly={true} className={'text-xs'}/>
                <Button variant={'ghost'} size={'icon'} onClick={() => linkCopyToClipboard(resource.link as string)}>
                    <Clipboard/>
                </Button>
            </div>)
        }
    }

    return (
        <Card className={'w-80 h-fit'}>
            <CardHeader>
                <CardTitle className={'text-md break-words'}>{resource.title}</CardTitle>
                <CardDescription className={'text-xs'}>
                    <div className={'text-xs overflow-auto max-h-28'}>
                        {resource.description}
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                {<Content/>}
            </CardContent>
        </Card>
    )
}