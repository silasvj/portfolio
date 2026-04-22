import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-xl border border-[#dedee5] bg-white px-4 py-3 text-base text-[#101114] transition-colors outline-none placeholder:text-[#9497a9] focus-visible:border-[#7132f5] focus-visible:ring-3 focus-visible:ring-[#7132f5]/20 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-3 aria-invalid:ring-red-500/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }