"use client"
import { useSession } from "next-auth/react"
export default function () {
    const session = useSession()
    return <div className="pt-8 flex justify-center">
        <div className="max-w-4xl bg-white rounded shadow w-full p-12">
            <Greeting image={session.data?.user?.image || ''} name={session.data?.user?.name?.split(' ')[0] || ''} />
            <Assests />
        </div>
    </div>
}

function Assests({ }) {
    return <div>

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
