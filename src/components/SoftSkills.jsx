import Reveal from './Reveal'
import { softskills } from '../data/content'

export default function SoftSkills() {
  return (
    <section className="section softskills" id="softskills">
      <div className="container">
        <div className="soft__grid">
          <div className="soft__left">
            <Reveal><span className="eyebrow">En dehors du code</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title">
                Soft skills &amp;<br /><span className="serif">expérience terrain</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-lead">{softskills.intro}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="soft__chips">
                {softskills.skills.map((s) => (
                  <span className="soft-chip" key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="soft__right">
            {softskills.experiences.map((e, i) => (
              <Reveal delay={0.1 + i * 0.08} key={e.poste}>
                <article className="exp-card">
                  <div className="exp-card__head">
                    <h3>{e.poste}</h3>
                    <span className="exp-card__period">{e.periode}</span>
                  </div>
                  <p className="exp-card__structure">{e.structure}</p>
                  <ul className="exp-card__points">
                    {e.points.map((pt, k) => <li key={k}>{pt}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
