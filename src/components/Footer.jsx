import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__cta">
          <span className="eyebrow">Restons en contact</span>
          <a className="footer__mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>

        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio dev ↗</a>
        </div>

        <div className="footer__meta">
          <span>{profile.name}</span>
          <span>{profile.formation} · {profile.ecole}</span>
          <span>© {new Date().getFullYear()} · Portfolio académique</span>
        </div>
      </div>
    </footer>
  )
}
