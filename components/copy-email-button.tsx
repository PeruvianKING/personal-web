"use client"

import { Mail } from "lucide-react"
import { toast } from "sonner"

interface CopyEmailButtonProps {
    email: string
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email)
            toast.success("Email copiado al portapapeles")
        } catch (err) {
            toast.error("Error al copiar el email")
        }
    }

    return (
        <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-secondary hover:bg-secondary/80 text-foreground rounded-md transition-colors cursor-pointer"
        >
            <Mail className="w-4 h-4" />
            {email}
        </button>
    )
}
