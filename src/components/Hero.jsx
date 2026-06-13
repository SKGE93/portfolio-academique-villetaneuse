import { motion } from 'framer-motion'
import { profile } from '../data/content'

const rise = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: { delay: 0.15 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

const marquee = ['React', 'Angular', 'TypeScript', 'PHP MVC', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'Agile', 'IA & Data']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="blob" style={{ background: 'var(--violet)', width: 420, height: 420, top: -80, left: -60 }} />
      <div className="blob" style={{ background: 'var(--coral)', width: 360, height: 360, top: 120, right: -40 }} />
      <div className="blob" style={{ background: 'var(--mint)', width: 300, height: 300, bottom: -60, left: '40%' }} />

      <div className="container hero__inner">
        <motion.span
          className="hero__badge"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          ● Portfolio académique · BUT 3 Informatique
        </motion.span>

        <h1 className="hero__title">
          {['Séraphin', 'Eyala'].map((word, i) => (
            <span className="reveal-line" key={word}>
              <motion.span
                custom={i}
                variants={rise}
                initial="hidden"
                animate="show"
                className="hero__word"
                style={i === 1 ? { color: 'var(--violet-deep)' } : undefined}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <span className="reveal-line">
            <motion.span custom={2} variants={rise} initial="hidden" animate="show" className="hero__word hero__word--serif">
              démarche réflexive.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          {profile.role} — {profile.formation}.<br />
          Valorisation et auto-évaluation des compétences acquises tout au long du parcours à {profile.ecole}.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
        >
          <a href="#competences" className="btn">Explorer les compétences →</a>
          <a href="#intro" className="btn btn--ghost">Mon parcours</a>
        </motion.div>
      </div>

      <div className="hero__marquee" aria-hidden>
        <div className="hero__track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}<i>✦</i></span>
          ))}
        </div>
      </div>
    </section>
  )
}
