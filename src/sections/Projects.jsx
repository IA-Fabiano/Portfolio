import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { portfolioData } from '../data/portfolioData'
export default function Projects() { return <section id="projetos" className="projects section-shell section"><SectionTitle eyebrow="SELEÇÃO DE PROJETOS" title="Projetos" description="Soluções com foco em segurança, organização e integração." /><div className="projects-grid">{portfolioData.projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}</div></section> }
