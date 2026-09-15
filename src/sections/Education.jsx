import { GraduationCap, PencilLine } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { portfolioData } from '../data/portfolioData'
export default function Education() { return <section id="formacao" className="education section-shell section"><SectionTitle eyebrow="APRENDIZADO CONTÍNUO" title="Formação" /><article className="education-card reveal"><span className="education-icon"><GraduationCap size={25} /></span><div><span className="editable"><PencilLine size={13} /> Editável em portfolioData.js</span><h3>{portfolioData.education.title}</h3><p>{portfolioData.education.description}</p></div></article></section> }
