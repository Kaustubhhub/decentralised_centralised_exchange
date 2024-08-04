"use client";
import { ReactNode } from "react"

export const PrimaryButton = ({ children, onClick }: { children?: ReactNode, onClick?: () => void }) => {
    return (
        <button onClick={onClick} type="button" className="
        text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
            {children}
        </button>
    )
}

export const SecondaryButton = ({ children, onClick, prefix }: { children?: ReactNode, onClick?: () => void, prefix?: ReactNode }) => {
    return (
        <button onClick={onClick} type="button" className="
        text-white flex justify-between bg-[#007CBF] hover:bg-[#006399] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 items-center">
            {prefix &&
                <div className="flex flex-col items-center justify-center pr-3">
                    {prefix}
                </div>}

            <div className="flex flex-col items-center justify-center">
                {children}
            </div>
        </button>
    )
}