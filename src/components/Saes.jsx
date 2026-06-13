import Reveal from './Reveal'
import { saes } from '../data/content'

export default function Saes() {
  return (
    <section className="section saes" id="saes">
      <div className="container">
        <div className="saes__intro">
          <Reveal><span className="eyebrow">Mises en situation</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              Bilan des <span className="serif">SAÉ</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Pour chaque SAÉ : un mémo (objectif, équipe, durée, tâches, outils, résultats)
              et une auto-évaluation critique.
            </p>
          </Reveal>
        </div>

        <div className="sae-list">
          {saes.map((s, i) => (
            <Reveal delay={i * 0.06} key={i}>
              <article className="sae-card">
                <div className="sae-card__head">
                  <span className="sae-card__code">{s.code}</span>
                  <h3 className="sae-card__title">{s.titre}</h3>
                </div>

                <div className="sae-card__meta">
                  <div><b>Objectif</b><span>{s.objectif}</span></div>
                  <div><b>Équipe</b><span>{s.equipe}</span></div>
                  <div><b>Durée</b><span>{s.duree}</span></div>
                  <div><b>Résultats</b><span>{s.resultats}</span></div>
                </div>

                <div className="sae-card__cols">
                  <div className="sae-col sae-col--good">
                    <h4>Points forts</h4>
                    <ul>{s.pointsForts.map((x, k) => <li key={k}>{x}</li>)}</ul>
                  </div>
                  <div className="sae-col sae-col--watch">
                    <h4>Points de vigilance</h4>
                    <ul>{s.vigilance.map((x, k) => <li key={k}>{x}</li>)}</ul>
                  </div>
                  <div className="sae-col sae-col--next">
                    <h4>Acquis pour la suite</h4>
                    <ul>{s.acquis.map((x, k) => <li key={k}>{x}</li>)}</ul>
                  </div>
                </div>

                <div className="sae-card__tags">
                  {s.outils.map((o) => <span className="tag" key={o}>{o}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
