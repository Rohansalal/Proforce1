"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "18007797691"; // Remove dashes/brackets. Must include country code, e.g., 1 for US

const services = [
    "Armed Security",
    "Unarmed Security",
    "Mobile Patrol Security",
    "Event Security",
    "Construction Site Security",
    "Fire Watch Security",
    "High Rise Building Security",
    "Hospital Security",
    "Shopping Center Security",
    "Financial Institution Security",
    "Loss Prevention Security",
    "Executive Protection",
    "School & Campus Security",
];

export function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    // Close popup if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleServiceClick = (service: string) => {
        const message = `Hi! I am interested in your ${service} services. Could you provide more information?`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
            {/* Popup Menu */}
            <div
                ref={popupRef}
                className={`mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-bottom-left ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10 pointer-events-none"
                    }`}
            >
                {/* Header */}
                <div className="bg-[#25D366] text-white p-4 flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-lg leading-tight">ProForce 1</h3>
                        <p className="text-white/80 text-sm">Online • How can we help?</p>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Close WhatsApp Menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 bg-[#E5DDD5]">
                    <div className="bg-white rounded-xl p-3 shadow-sm inline-block max-w-[90%] mb-3 rounded-tl-none relative">
                        <p className="text-sm text-gray-800">
                            Welcome to ProForce 1! Which security service are you looking for today?
                        </p>
                    </div>

                    {/* Services List */}
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => handleServiceClick(service)}
                                className="w-full text-left bg-white text-gray-800 px-4 py-3 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:bg-green-50 hover:text-[#25D366] transition-all duration-200 border border-gray-100 group flex justify-between items-center"
                            >
                                {service}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#25D366]">→</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:-translate-y-1"
                aria-label="Chat on WhatsApp"
            >
                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Chat with us
                        {/* Tooltip Triangle */}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-white"></div>
                    </div>
                )}

                {/* Ripple Effect Animation */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
                )}

                <Image
                    src="/whatsapp.1897bfc4.svg"
                    alt="WhatsApp"
                    width={36}
                    height={36}
                    className="relative z-10"
                />
            </button>

            {/* Custom Scrollbar Styles embedded */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.2);
          border-radius: 10px;
        }
      `}} />
        </div>
    );
}
