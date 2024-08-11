
import { useSession } from "next-auth/react"
import { ProfileCard } from "../components/ProfileCard"
import db from '@/app/db'
import { getServerSession } from "next-auth"

async function getUserwallet() {
    const session = await getServerSession()

    const userWallet = await db.solWallet.findFirst({
        where: {
            //@ts-ignore
            userId: session?.user?.uid
        },
        select: {
            publicKey: true
        }
    })
    if (!userWallet) {
        return {
            error: "no solana wallet found associated to the user"
        }
    }

    return { error: null, userWallet }
}

export default async function () {
    const userWallet = await getUserwallet()
    if (userWallet.error || !userWallet.userWallet?.publicKey) {
        return <div>
            no solana wallet found!
        </div>
    }
    return <div>
        <ProfileCard publicKey={userWallet.userWallet?.publicKey} />
    </div>
}