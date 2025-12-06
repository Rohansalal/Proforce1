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
      setShowBanner(true)
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Alert>
        <AlertTitle>We use cookies</AlertTitle>
        <AlertDescription>
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </AlertDescription>
        <div className="mt-4 flex gap-4">
          <Button onClick={handleAccept}>Accept All</Button>
        </div>
      </Alert>
    </div>
  )
}
