import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Shanks o Ruivo</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            shanks@piratasdoruivo.com
                        </span>
                    </div>
                    <CircleDashed className="size-5 shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Chapeu de palha</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            luffy@chapeduepalha.com
                        </span>
                    </div>
                    <CircleDashed className="size-5 shrink-0" />
                </div>
            </div>

            <Button variant='secondary' size='full'>
                <UserCog className='size-5' />
                Gerenciar Convidados
            </Button>
        </div>
    )
}