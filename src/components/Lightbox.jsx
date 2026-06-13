import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Ctx = createContext(null)
export const useLightbox = () => useContext(Ctx)
const src = (f) => `${import.meta.env.BASE_URL}img/${f}`

export function LightboxProvider({ children }) {
  const [state, setState] = useState(null) // { images: [...], index }

  const open = useCallback((images, index = 0) => setState({ images, index }), [])
  const close = useCallback(() => setState(null), [])
  const go = useCallback((dir) => {
    setState((s) => (s ? { ...s, index: (s.index + dir + s.images.length) % s.images.length } : s))
  }, [])

  useEffect(() => {
    if (!state) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [state, close, go])

  const multi = state && state.images.length > 1

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {state && (
          <motion.div
            className="lb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button className="lb__close" onClick={close} aria-label="Fermer">✕</button>

            {multi && (
              <>
                <button className="lb__nav lb__nav--prev" aria-label="Précédent"
                  onClick={(e) => { e.stopPropagation(); go(-1) }}>‹</button>
                <button className="lb__nav lb__nav--next" aria-label="Suivant"
                  onClick={(e) => { e.stopPropagation(); go(1) }}>›</button>
              </>
            )}

            <motion.img
              key={state.index}
              className="lb__img"
              src={src(state.images[state.index])}
              alt=""
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />

            {multi && (
              <div className="lb__count">{state.index + 1} / {state.images.length}</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  )
}
