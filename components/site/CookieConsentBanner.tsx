'use client'

import { useState, useEffect } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { getCookie, setCookie } from '@/lib/utils'
import Link from 'next/link'

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = getCookie('proforce_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 5000) // Delayed further to avoid LCP interference
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    setCookie('proforce_cookie_consent', 'true', 365)
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 md:p-4">
      <Alert className="max-w-2xl mx-auto shadow-2xl border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <AlertTitle className="text-sm font-bold">Cookie Policy</AlertTitle>
            <AlertDescription className="text-xs text-slate-600 leading-tight">
              We use cookies to enhance your experience and analyze traffic. By clicking "Accept", you consent to our use of cookies. See our{' '}
              <Link href="/privacy-policy" className="underline hover:text-red-600">
                Privacy Policy
              </Link>.
            </AlertDescription>
          </div>
          <div className="shrink-0">
            <Button
              size="sm"
              onClick={handleAccept}
              aria-label="Accept all cookies"
              className="bg-slate-900 text-white hover:bg-red-700 text-xs px-6"
            >
              Accept
            </Button>
          </div>
        </div>
      </Alert>
    </div>
  )
}
