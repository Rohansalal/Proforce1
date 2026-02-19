'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { getCookie, setCookie } from '@/lib/utils' // Use existing utils
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check for cookie consent after mount
    const consent = getCookie('proforce_cookie_consent')
    if (!consent) {
      // Small delay for better UX and to avoid interfering with LCP
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    setCookie('proforce_cookie_consent', 'true', 365)
    setShowBanner(false)
  }

  const handleDecline = () => {
    // Optionally handle decline - for now just hide it or set a 'false' cookie
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 sm:left-6 sm:bottom-6 sm:right-auto z-[9999] p-4 sm:p-0 w-full sm:w-[400px]"
        >
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-xl p-6 relative overflow-hidden">

            {/* Glossy/Modern Effect Background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg shrink-0">
                <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Cookie Policy
                  </h3>
                  <button
                    onClick={handleDecline}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors sm:hidden"
                  >
                    <X className="w-4 h-4" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We use cookies to enhance your experience and analyze traffic. By
                  clicking "Accept", you consent to our use of cookies.
                  <Link
                    href="/privacy-policy"
                    className="underline decoration-slate-300 hover:decoration-blue-500 hover:text-blue-600 dark:decoration-slate-600 dark:hover:text-blue-400 transition-colors ml-1"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAccept}
                className="w-full sm:w-auto sm:flex-1 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 shadow-lg shadow-slate-900/20 dark:shadow-none transition-all duration-300 transform hover:scale-[1.02]"
              >
                Accept All Cookies
              </Button>
              <Button
                variant="outline"
                onClick={handleDecline}
                className="w-full sm:w-auto border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                Decline
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
