"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { PrimaryButton } from "./Button"
import { useEffect, useState } from "react"

export const ProfileCard = ({ publicKey }: { publicKey: string }) => {
    const session = useSession()
    const router = useRouter()

    if (session.status == 'loading') {
        return <div>
            loading
        </div>
    }

    if (!session.data?.user) {
        router.push('/')
        return null;
    }

    return <div className="pt-8 flex justify-center">
        <div className="max-w-4xl bg-white rounded shadow w-full p-12">
            <Greeting image={session.data?.user?.image || ''} name={session.data?.user?.name?.split(' ')[0] || ''} />
            <Assests publicKey={publicKey} />
        </div>
    </div>
}

function Assests({ publicKey }: { publicKey: string }) {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (copied) {
            let timeOut = setTimeout(() => {
                setCopied(false)
            }, 3000)
            return () => {
                clearTimeout(timeOut)
            }
        }


    }, [copied])

    return <div className="text-slate-500 mt-4">
        Account Assests
        <br />
        <div className="flex justify-between ">
            <div></div>
            <div>
                <PrimaryButton onClick={() => { 
                    navigator.clipboard.writeText(publicKey)
                setCopied(true)
                }}>{copied ? "copied" : 'Your wallet address'}</PrimaryButton>
            </div>
        </div>
    </div>
}

function Greeting({ image, name }: { image: string, name: string }) {
    return <div className="flex justify-start items-center">
        <img className="rounded-full w-16 h-16 mr-4" src={image} alt="" />
        <div className="text-2xl font-bold flex flex-col justify-center">
            Welcome back, {name}!
        </div>
    </div>
}

