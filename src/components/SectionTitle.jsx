export default function SectionTitle({ eyebrow, title, description }) {
  return <div className="section-title reveal"><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}
