import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { projects } from '../data/content'

const filters = ['Tous', 'Universitaire', 'Personnel']

const img = (f) => `${import.meta.env.BASE_URL}img/${f}`

export default function Projects() {
  const [filter, setFilter] = useState('Tous')
  const shown = filter === 'Tous' ? projects : projects.filter((p) => p.type === filter)

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects__intro">
          <Reveal><span className="eyebrow">Réalisations</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              Mes <span className="serif">projets</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">
              Projets <b>universitaires</b> (SAÉ, travaux encadrés) et projets <b>personnels</b>
              {' '}développés en autonomie — chaque carte indique clairement sa nature.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="projects__filters" role="tablist">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`pfilter ${filter === f ? 'is-active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div className="proj-grid" layout>
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.article
                key={p.nom}
                className="proj-card"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {p.img && (
                  <a className="proj-card__imgwrap" href={img(p.img)} target="_blank" rel="noreferrer">
                    <img src={img(p.img)} alt={p.nom} loading="lazy" />
                  </a>
                )}
                <header className="proj-card__top">
                  <span className={`proj-badge proj-badge--${p.type === 'Personnel' ? 'perso' : 'univ'}`}>
                    {p.type}
                  </span>
                  <span className="proj-card__year">{p.annee}</span>
                </header>

                <h3 className="proj-card__title">{p.nom}</h3>
                <p className="proj-card__desc">{p.desc}</p>

                <div className="proj-card__tech">
                  {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>

                {p.link ? (
                  <a className="proj-card__link" href={p.link} target="_blank" rel="noreferrer">
                    Voir sur GitHub ↗
                  </a>
                ) : (
                  <span className="proj-card__link proj-card__link--off">Projet d’école</span>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
