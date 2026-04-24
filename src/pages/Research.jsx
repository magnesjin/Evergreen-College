import { researchAreas } from '../data/index';
import './InnerPage.css';

const publications = [
  { title:'Quantum Error Correction via Topological Codes', authors:'Sharma, A. et al.', journal:'Nature Physics', year:2025, citations:142 },
  { title:'CRISPR-Based Gene Therapy for Sickle Cell Disease', authors:'Pillai, R. & Kapoor, V.', journal:'Cell', year:2025, citations:89 },
  { title:'Solar-to-Hydrogen Conversion with Perovskite Catalysts', authors:'Rajan, K. et al.', journal:'Science', year:2024, citations:201 },
  { title:'Deep Learning Models for Climate Pattern Prediction', authors:'Nair, M. & Singh, P.', journal:'Nature Climate Change', year:2024, citations:175 },
];

const researchStats = [
  { value:'₹210 Cr', label:'Annual Research Funding' },
  { value:'600+', label:'Publications per Year' },
  { value:'95+', label:'Research Centers' },
  { value:'48', label:'Active Patents' },
];

export default function Research() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-content container">
          <span className="label">Discovery & Innovation</span>
          <h1 className="display-2" style={{ color:'#fff', marginTop:12 }}>Research at <span className="gradient-text">Evergreen</span></h1>
          <p className="lead" style={{ maxWidth:540, margin:'16px auto 0', color:'rgba(255,255,255,0.75)' }}>
            Pushing the boundaries of knowledge to solve humanity's most pressing challenges.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="research-stats-bar">
        <div className="container" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0 }}>
          {researchStats.map((s) => (
            <div key={s.label} className="research-stat">
              <span className="research-stat__value">{s.value}</span>
              <span className="research-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Research Areas */}
      <section className="section section-dark" id="centers">
        <div className="container">
          <div className="section-header">
            <span className="label">Focus Areas</span>
            <h2 className="h1">Research Domains</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-3">
            {researchAreas.map((r) => (
              <div key={r.id} className="research-card glass-panel">
                <span style={{ fontSize:'2.8rem' }}>{r.icon}</span>
                <h3 className="h3" style={{ color:'#fff', marginTop:16 }}>{r.title}</h3>
                <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.9rem', lineHeight:1.7, marginTop:8 }}>{r.desc}</p>
                <div className="research-card__meta">
                  <span>🔬 {r.projects} Active Projects</span>
                  <span>💰 {r.funding} Funding</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section section-darker" id="publications">
        <div className="container">
          <div className="section-header">
            <span className="label">Academic Output</span>
            <h2 className="h1">Recent Publications</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {publications.map((p, i) => (
              <div key={i} className="publication-row glass-panel">
                <div className="pub-index gradient-text">{String(i+1).padStart(2,'0')}</div>
                <div className="pub-content">
                  <h4 className="pub-title">{p.title}</h4>
                  <p className="pub-authors">{p.authors} · <span style={{ color:'var(--accent)' }}>{p.journal}</span> · {p.year}</p>
                </div>
                <div className="pub-citations">
                  <span className="pub-cit-num">{p.citations}</span>
                  <span className="pub-cit-label">citations</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate CTA */}
      <section className="section section-dark">
        <div className="container">
          <div className="collab-box glass-panel">
            <h2 className="h1" style={{ color:'#fff' }}>Collaborate With Us</h2>
            <p style={{ color:'rgba(255,255,255,0.65)', maxWidth:480, lineHeight:1.8 }}>
              We welcome partnerships with industry, government bodies, and international institutions. Let's create impact together.
            </p>
            <a href="mailto:research@evergreen.edu" className="btn btn-primary btn-lg" style={{ marginTop:8 }}>
              Get in Touch →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
