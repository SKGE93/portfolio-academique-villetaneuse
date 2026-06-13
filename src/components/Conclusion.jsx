import Reveal from './Reveal'
import { conclusion } from '../data/content'

export default function Conclusion() {
  return (
    <section className="section conclusion" id="conclusion">
      <div className="container">
        <Reveal><span className="eyebrow">Pour conclure</span></Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title conclusion__title">
            Points forts, vigilance<br />&amp; <span className="serif">acquis pour la suite</span>
          </h2>
        </Reveal>
        <div className="conclusion__body">
          {conclusion.paragraphs.map((p, i) => (
            <Reveal delay={0.1 + i * 0.08} key={i}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
