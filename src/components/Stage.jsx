import Reveal from './Reveal'
import { stage } from '../data/content'

export default function Stage() {
  return (
    <section className="section stage" id="stage">
      <div className="blob" style={{ background: 'var(--sky)', width: 360, height: 360, top: 40, right: -80, opacity: 0.4 }} />
      <div className="container">
        <div className="stage__grid">
          <div className="stage__left">
            <Reveal><span className="eyebrow">BUT 3</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title">
                Mon <span className="serif">stage</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="stage__card">
                <h3>{stage.poste}</h3>
                <p className="stage__company">{stage.entreprise}</p>
                <p className="stage__where">{stage.lieu} · {stage.periode}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="stage__missions">
                {stage.missions.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </Reveal>
          </div>

          <div className="stage__right">
            <Reveal delay={0.1}>
              <h3 className="stage__crit-title">Recul critique &amp; auto-évaluation</h3>
            </Reveal>
            <div className="stage__crit">
              {[
                ['Points forts', stage.pointsForts, 'good'],
                ['Points de vigilance', stage.vigilance, 'watch'],
                ['Bonnes surprises', stage.surprises, 'next'],
                ['Acquis pour la suite', stage.acquis, 'good'],
              ].map(([label, items, tone], i) => (
                <Reveal delay={0.12 + i * 0.06} key={label}>
                  <div className={`crit-box crit-box--${tone}`}>
                    <h4>{label}</h4>
                    <ul>{items.map((x, k) => <li key={k}>{x}</li>)}</ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
