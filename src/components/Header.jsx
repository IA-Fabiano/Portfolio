import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import '../styles/navigation.css'

const links = [['Projetos', 'projetos'], ['Experiência', 'experiencia'], ['Formação', 'formacao'], ['Stack', 'tecnologias']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const close = () => setOpen(false)

  useEffect(() => {
    const sections = [...links.map(([, id]) => document.getElementById(id)), document.getElementById('contato')].filter(Boolean)
    let frame = 0
    const update = () => {
      const marker = window.innerHeight * 0.35
      let current = ''
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section.id
      }
      setActive(current)
      frame = 0
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    const onKey = (event) => { if (event.key === 'Escape') setOpen(false) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('keydown', onKey)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <header className="header pill-header">
    <a className="brand" href="#home" onClick={close}><span>&lt;/&gt;</span> Fabiano</a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-navigation">{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" aria-label="Navegação principal" className={open ? 'nav open' : 'nav'}>
      {links.map(([name, id]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={close}>{name}</a>)}
      <a className="nav-contact" href="#contato" aria-current={active === 'contato' ? 'location' : undefined} onClick={close}>Conversar</a>
    </nav>
    <a className="cv-button" href={portfolioData.socialLinks.cv} download><Download size={16} /> Baixar CV</a>
  </header>
}
