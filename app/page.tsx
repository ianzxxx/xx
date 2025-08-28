'use client'

import { Suspense } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import EnvelopeExperience from '../components/EnvelopeExperience'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingScreen />}>
        <EnvelopeExperience />
      </Suspense>
    </main>
  )
} 