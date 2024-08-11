import { clusterApiUrl, Connection } from "@solana/web3.js"

export const SUPPORTED_TOKENS: {
    name: string,
    mint: string
}[] = [
        {
            name: "USDC",
            mint: "FSxJ85FXVsXSr51SeWf9ciJWTcRnqKFSmBgRDeL3KyWw "
        },
        {
            name: "USDT",
            mint: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA "
        },
    ]

export const connection = new Connection(clusterApiUrl('mainnet-beta'))