import { useEffect, useState } from 'react'

const intro = 'Olá, eu sou'
const name = 'Fabiano'

export default function TypedName() {
  const [visibleIntro, setVisibleIntro] = useState('')
  const [visibleName, setVisibleName] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleIntro(intro)
      setVisibleName(name)
      return
    }

    let timer
    let introIndex = 0
    let nameIndex = 0

    const typeName = () => {
      nameIndex += 1
      setVisibleName(name.slice(0, nameIndex))
      if (nameIndex < name.length) timer = window.setTimeout(typeName, 170)
    }

    const typeIntro = () => {
      introIndex += 1
      setVisibleIntro(intro.slice(0, introIndex))
      timer = window.setTimeout(
        introIndex < intro.length ? typeIntro : typeName,
        introIndex < intro.length ? 160 : 380,
      )
    }

    timer = window.setTimeout(typeIntro, 300)
    return () => window.clearTimeout(timer)
  }, [])

  return <h1 aria-label="Olá, eu sou Fabiano">
    <small aria-hidden="true">{visibleIntro}{!visibleName && <span className="cursor" />}</small>
    <span className="typed-name-line" aria-hidden="true">{visibleName}{visibleName && <span className="cursor" />}</span>
  </h1>
}