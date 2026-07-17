"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const inputClass = "w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
const selectClass = "w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700"
const labelClass = "text-xs font-bold text-slate-500 uppercase"

type QuoteFormProps = {
    serviceName: string
    buttonLabel: string
    serviceLabel?: string
    serviceOptions?: string[]
    propertyLabel?: string
    propertyOptions?: string[]
    messageLabel?: string
    messagePlaceholder?: string
    /** Overrides the submit button's default red styling on pages with their own accent colour. */
    accentClassName?: string
}

export function QuoteForm({
    serviceName,
    buttonLabel,
    serviceLabel = "Service Needed",
    serviceOptions,
    propertyLabel = "Property Type",
    propertyOptions,
    messageLabel = "Your Requirements",
    messagePlaceholder = "Tell us about your property and security needs...",
    accentClassName = "bg-red-600 hover:bg-red-700 shadow-red-600/20",
}: QuoteFormProps) {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (status === "sending") return
        setStatus("sending")

        const form = e.currentTarget
        const fields = new FormData(form)
        const serviceSel = (fields.get("serviceOption") as string) || ""
        const propertySel = (fields.get("propertyOption") as string) || ""
        const message = (fields.get("message") as string) || ""

        const payload = new FormData()
        payload.append("firstName", (fields.get("firstName") as string) || "")
        payload.append("lastName", (fields.get("lastName") as string) || "")
        payload.append("email", (fields.get("email") as string) || "")
        payload.append("phone", (fields.get("phone") as string) || "")
        payload.append("propertyAddress", "")
        payload.append("duration", "")
        payload.append("serviceType", serviceSel ? `${serviceName} - ${serviceSel}` : serviceName)
        payload.append("message", propertySel ? `${message}\n\nProperty Type: ${propertySel}` : message)

        try {
            const res = await fetch("/api/contact", { method: "POST", body: payload })
            if (!res.ok) throw new Error("Request failed")
            setStatus("sent")
            form.reset()
        } catch {
            setStatus("error")
        }
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1">
                    <label className={labelClass}>First Name</label>
                    <input type="text" name="firstName" required className={inputClass} placeholder="John" />
                </div>
                <div className="space-y-1">
                    <label className={labelClass}>Last Name</label>
                    <input type="text" name="lastName" required className={inputClass} placeholder="Doe" />
                </div>
            </div>

            <div className="space-y-1">
                <label className={labelClass}>Work Email</label>
                <input type="email" name="email" required className={inputClass} placeholder="john@company.com" />
            </div>

            <div className="space-y-1">
                <label className={labelClass}>Phone Number</label>
                <input type="tel" name="phone" className={inputClass} placeholder="(800) 779-7691" />
            </div>

            {(serviceOptions || propertyOptions) && (
                <div className="grid grid-cols-2 gap-5">
                    {serviceOptions && (
                        <div className="space-y-1">
                            <label className={labelClass}>{serviceLabel}</label>
                            <select name="serviceOption" className={selectClass}>
                                {serviceOptions.map((opt) => (
                                    <option key={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    {propertyOptions && (
                        <div className="space-y-1">
                            <label className={labelClass}>{propertyLabel}</label>
                            <select name="propertyOption" className={selectClass}>
                                {propertyOptions.map((opt) => (
                                    <option key={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
            )}

            <div className="space-y-1">
                <label className={labelClass}>{messageLabel}</label>
                <textarea rows={3} name="message" required className={inputClass} placeholder={messagePlaceholder} />
            </div>

            <Button
                type="submit"
                disabled={status === "sending"}
                className={cn(
                    "w-full text-white h-14 text-lg font-bold rounded-lg shadow-xl mt-2 disabled:opacity-70",
                    accentClassName
                )}
            >
                {status === "sending" ? "Sending..." : buttonLabel}
            </Button>

            {status === "sent" && (
                <p className="text-sm font-medium text-green-600">
                    Thank you! Your request has been sent — our team will contact you shortly.
                </p>
            )}
            {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                    Something went wrong. Please call{" "}
                    <a href="tel:+18007797691" className="underline">(800) 779-7691</a> or email{" "}
                    <a href="mailto:info@proforce1protection.com" className="underline">info@proforce1protection.com</a>.
                </p>
            )}
        </form>
    )
}
