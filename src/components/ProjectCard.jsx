import { KeyRound, Workflow, ShieldCheck } from 'lucide-react'

const projectIcons = { auth: KeyRound, payments: Workflow, access: ShieldCheck }

export default function ProjectCard({ project, index }) {
  const Icon = projectIcons[project.visual] || Workflow

  return <article className="project-card reveal" style={{ '--delay': (index * 80) + 'ms' }}>
    <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
      <span className="project-visual-orbit" />
      <span className="project-visual-symbol"><Icon size={32} strokeWidth={1.5} /></span>
      <span className="project-visual-line" />
    </div>
    <div className="project-card-top"><span className="project-index">0{index + 1}</span><span className="project-kind">Projeto corporativo</span></div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tag-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
  </article>
}