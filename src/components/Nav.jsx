import { useEffect, useState } from 'react'

const links = [
  { href: '#intro', label: 'Introduction' },
  { href: '#competences', label: 'Compétences' },
  { href: '#saes', label: 'SAÉ' },
  { href: '#projects', label: 'Projets' },
  { href: '#stage', label: 'Stages' },
  { href: '#softskills', label: 'Soft skills' },
  { href: '#conclusion', label: 'Conclusion' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          SÉ<span>.</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav__cta" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
        <button
          className="nav__burger"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
