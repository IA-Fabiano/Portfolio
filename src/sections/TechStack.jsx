import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import TechCard from '../components/TechCard'
import { technologies } from '../data/portfolioData'
const filters = ['Todas', 'Full Stack', 'Banco de dados', 'Segurança', 'Integrações', 'DevOps', 'Ferramentas']
export default function TechStack() { const [filter, setFilter] = useState('Todas'); const visible = filter === 'Todas' ? technologies : technologies.filter(t => t.category === filter); return <section id="tecnologias" className="tech-stack section-shell section"><SectionTitle eyebrow="FERRAMENTAS DE TRABALHO" title="Tecnologias" description="Um stack direcionado a produtos confiáveis, integrações e dados." /><div className="filters reveal" role="tablist">{filters.map(f => <button role="tab" aria-selected={filter === f} className={filter === f ? 'selected' : ''} onClick={() => setFilter(f)} key={f}>{f}</button>)}</div><div className="tech-grid">{visible.map(t => <TechCard key={t.name} tech={t} />)}</div></section> }
