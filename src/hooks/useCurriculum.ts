import { useState, useEffect } from 'react'
import { contentfulClient } from '@/lib/contentful'
import type { ModuloSemestral } from '@/types/curriculum'

export function useCurriculum() {
  const [modulos, setModulos] = useState<ModuloSemestral[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!import.meta.env.VITE_CONTENTFUL_SPACE_ID) {
      setIsLoading(false)
      return
    }

    contentfulClient
      .getEntries({
        content_type: 'moduloSemestral',
        include: 2,
      })
      .then((response) => {
        setModulos(response.items as unknown as ModuloSemestral[])
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [])

  return { modulos, isLoading }
}
