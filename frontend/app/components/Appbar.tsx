"use client";
import { signIn, signOut, useSession } from "next-auth/react"
import { PrimaryButton } from "./Button"
import { useRouter } from "next/navigation";

export const Appbar = () => {
    const router = useRouter();
    const session = useSession()
    return <div className="border-b px-2 py-2 flex justify-between">
        <div className="flex flex-col justify-center text-xl font-bold">
            tiplink
        </div>
        <div>
            {session.data?.user ? <PrimaryButton onClick={() => {{signOut(); router.push('/')}}}>logout</PrimaryButton> : <PrimaryButton onClick={() => (signIn())}>Sign in</PrimaryButton>}
        </div>
    </div>
}