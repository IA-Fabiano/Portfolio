import { ArrowUpRight, GitFork } from 'lucide-react'
export default function ProjectCard({ project, index }) {
  return <article className="project-card reveal" style={{ '--delay': (index * 80) + 'ms' }}><div className="project-card-top"><span className="project-index">0{index + 1}</span><a href={project.link} aria-label={'Ver ' + project.title + ' no GitHub'}><GitFork size={18} /><ArrowUpRight size={15} /></a></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></article>
}
