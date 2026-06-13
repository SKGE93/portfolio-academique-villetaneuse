import Reveal from './Reveal'
import { stages } from '../data/content'

function StageBlock({ stage, index }) {
  return (
    <div className="stage-block">
      <div className="stage__grid">
        <div className="stage__left">
          <Reveal>
            <span className="stage__year">{stage.annee}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="stage__card">
              <h3>{stage.poste}</h3>
              <p className="stage__company">{stage.entreprise}</p>
              <p className="stage__where">{stage.lieu} · {stage.periode}</p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <ul className="stage__missions">
              {stage.missions.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </Reveal>
        </div>

        <div className="stage__right">
          <Reveal delay={0.1}>
            <h4 className="stage__crit-title">Recul critique &amp; auto-évaluation</h4>
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
                  <h5>{label}</h5>
                  <ul>{items.map((x, k) => <li key={k}>{x}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Stage() {
  return (
    <section className="section stage" id="stage">
      <div className="blob" style={{ background: 'var(--sky)', width: 360, height: 360, top: 40, right: -80, opacity: 0.4 }} />
      <div className="container">
        <div className="stage__intro">
          <Reveal><span className="eyebrow">Expériences professionnelles</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              Mes <span className="serif">stages</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Deux mises en situation professionnelle (BUT 2 &amp; BUT 3), analysées à travers
              les compétences du référentiel et un regard critique.
            </p>
          </Reveal>
        </div>

        <div className="stage__blocks">
          {stages.map((s, i) => (
            <StageBlock stage={s} index={i} key={s.annee} />
          ))}
        </div>
      </div>
    </section>
  )
}
