import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { glossary } from '../data/glossary'

// Badge de techno/notion : cliquable si une définition existe dans le glossaire.
export default function Tag({ label }) {
  const def = glossary[label]
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Pas de définition → badge simple, non cliquable.
  if (!def) return <span className="tag">{label}</span>

  return (
    <span className="tag-wrap" ref={ref}>
      <button
        type="button"
        className={`tag tag--info ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label}
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            className="tag-pop"
            role="tooltip"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {def}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
