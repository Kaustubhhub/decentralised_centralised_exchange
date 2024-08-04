"use client";
import { signIn, useSession } from "next-auth/react"
import { SecondaryButton } from "./Button"
import { useRouter } from "next/navigation";

export const Hero = () => {
    const session = useSession()
    const router = useRouter();
    return <div className="flex flex-col items-center justify-center">
        <div className="text-6xl font-extrabold">
            The crypto of tomorrow, <span className="text-[#007cbf]">today</span>
        </div>
        <div className="pt-6 text-2xl">
            <span className="text-[#526b79]">Create a frictionless wallet with just a Google Account. </span>
        </div>
        <div className="pt-10">
            {session.data?.user ? <SecondaryButton  onClick={() => {
                router.push('./dashboard')
            }}><span className="font-semibold text-lg">Go to Dashboard</span></SecondaryButton> : <SecondaryButton prefix={<img width={30} height={30} src="https://static.vecteezy.com/system/resources/previews/013/948/549/non_2x/google-logo-on-transparent-white-background-free-vector.jpg" />} onClick={() => {
                signIn()
            }}><span className="font-semibold text-lg">Sign Up with Google</span></SecondaryButton>}
        </div>
    </div>
}