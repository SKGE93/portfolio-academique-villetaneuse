import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Tag from './Tag'
import { competences } from '../data/content'

export default function Competences() {
  return (
    <section className="section competences" id="competences">
      <div className="container">
        <div className="competences__intro">
          <Reveal><span className="eyebrow">Référentiel BUT</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              Les six <span className="serif">compétences</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Pour chaque compétence, je fais une synthèse de mes outils, de mes expériences et de
              mes acquis, en m’appuyant sur les ressources (modules) et les SAÉ travaillées.
            </p>
          </Reveal>
        </div>

        <div className="comp-grid">
          {competences.map((c, i) => (
            <motion.article
              className="comp-card"
              key={c.id}
              id={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ '--accent': c.color }}
            >
              <header className="comp-card__top">
                <span className="comp-card__num">{c.num}</span>
                <span className="comp-card__dot" />
              </header>
              <h3 className="comp-card__title">{c.titre}</h3>
              <p className="comp-card__sub">{c.sous}</p>
              <p className="comp-card__resume">{c.resume}</p>

              <span className="comp-card__label">Outils</span>
              <div className="comp-card__tags">
                {c.outils.map((o) => <Tag label={o} key={o} />)}
              </div>

              <footer className="comp-card__foot">
                <div className="comp-card__fline">
                  <b>Ressources · modules</b>
                  <span>{c.ressources.join(' · ')}</span>
                </div>
                <div className="comp-card__fline">
                  <b>SAÉ &amp; preuves</b>
                  <span>{c.preuves.join(' · ')}</span>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
