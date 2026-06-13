import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { saes, saesY1 } from '../data/content'

const img = (f) => `${import.meta.env.BASE_URL}img/${f}`

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
              Les SAÉ (Situations d’Apprentissage et d’Évaluation) jalonnent les trois années :
              une par compétence et par semestre en 1ʳᵉ année, puis des projets plus ambitieux ensuite.
            </p>
          </Reveal>
        </div>

        {/* — 1ʳᵉ année : grille compacte, 1 par compétence × semestre — */}
        <Reveal>
          <h3 className="saes__sub">1ʳᵉ année — une SAÉ par compétence (S1 &amp; S2)</h3>
        </Reveal>
        <div className="saey1-grid">
          {saesY1.map((s, i) => {
            const todo = s.titre === 'À compléter'
            return (
              <motion.article
                key={`${s.competence}-${s.semestre}`}
                className={`saey1-card ${todo ? 'is-todo' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 4) * 0.05, duration: 0.5 }}
                style={{ '--accent': s.color }}
              >
                {s.img && (
                  <a className="saey1-card__imgwrap" href={img(s.img)} target="_blank" rel="noreferrer">
                    <img src={img(s.img)} alt={s.titre} loading="lazy" />
                  </a>
                )}
                <header className="saey1-card__top">
                  <span className="saey1-card__comp">{s.competence}</span>
                  <span className="saey1-card__sem">{s.semestre}</span>
                </header>
                <h4 className="saey1-card__title">{s.titre}</h4>
                <p className="saey1-card__desc">{s.desc}</p>
              </motion.article>
            )
          })}
        </div>

        {/* — 2ᵉ & 3ᵉ année : cartes détaillées — */}
        <Reveal>
          <h3 className="saes__sub saes__sub--mt">2ᵉ &amp; 3ᵉ année — SAÉ projets (mémo &amp; auto-évaluation)</h3>
        </Reveal>
        <div className="sae-list">
          {saes.map((s, i) => (
            <Reveal delay={i * 0.06} key={i}>
              <article className="sae-card">
                <div className="sae-card__head">
                  <span className="sae-card__code">{s.code}</span>
                  <h3 className="sae-card__title">{s.titre}</h3>
                </div>

                {s.img && (
                  <a className="sae-card__imgwrap" href={img(s.img)} target="_blank" rel="noreferrer">
                    <img className="sae-card__img" src={img(s.img)} alt={s.titre} loading="lazy" />
                  </a>
                )}

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
