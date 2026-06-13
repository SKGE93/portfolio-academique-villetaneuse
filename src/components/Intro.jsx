import Reveal from './Reveal'
import { intro } from '../data/content'

export default function Intro() {
  return (
    <section className="section intro" id="intro">
      <div className="container">
        <div className="intro__grid">
          <div className="intro__head">
            <Reveal><span className="eyebrow">Introduction</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title">
                La logique<br />de mon <span className="serif">parcours</span>
              </h2>
            </Reveal>
          </div>

          <div className="intro__body">
            {intro.paragraphs.map((p, i) => (
              <Reveal delay={0.1 + i * 0.08} key={i}>
                <p className="intro__p">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="intro__stats">
                {intro.highlights.map((h) => (
                  <div className="stat" key={h.v}>
                    <span className="stat__k">{h.k}</span>
                    <span className="stat__v">{h.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
