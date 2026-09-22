import { GraduationCap } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { portfolioData } from '../data/portfolioData'
export default function Education() { return <section id="formacao" className="education section-shell section"><SectionTitle eyebrow="APRENDIZADO CONTÍNUO" title="Formação" /><article className="education-card reveal"><span className="education-icon"><GraduationCap size={25} /></span><div><h3>{portfolioData.education.title}</h3><p>{portfolioData.education.description}</p></div></article></section> }
