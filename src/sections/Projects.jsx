import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { portfolioData } from '../data/portfolioData'
export default function Projects() { return <section id="projetos" className="projects section-shell section"><SectionTitle eyebrow="SELEÇÃO DE PROJETOS" title="Projetos" description="Experiências em sistemas corporativos apresentadas de forma conceitual, com detalhes internos preservados." /><div className="projects-grid">{portfolioData.projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}</div></section> }
