// hooks/useLoading.ts
import { useEffect, useState } from 'react'

const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return [isLoading, setIsLoading] as const
}

export default useLoading
