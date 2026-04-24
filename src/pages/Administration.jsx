import { leaders } from '../data/index';
import './InnerPage.css';

const departments = [
  { icon:'💻', name:'Computer Science & Engineering', hod:'Prof. Arun Bose', faculty:42, programs:8 },
  { icon:'🧬', name:'Biological Sciences', hod:'Dr. Renu Kapoor', faculty:35, programs:6 },
  { icon:'⚖️', name:'School of Law', hod:'Prof. V.K. Sharma', faculty:28, programs:4 },
  { icon:'📊', name:'Business School', hod:'Dr. Priyanka Das', faculty:50, programs:10 },
  { icon:'🏗️', name:'Civil & Structural Engineering', hod:'Prof. Ramesh Iyer', faculty:30, programs:5 },
  { icon:'🎨', name:'Fine Arts & Design', hod:'Ms. Deepa Nair', faculty:20, programs:4 },
  { icon:'⚗️', name:'Chemistry & Materials Science', hod:'Dr. S. Pillai', faculty:32, programs:6 },
  { icon:'📡', name:'Electronics & Communication', hod:'Prof. K. Rao', faculty:38, programs:7 },
];

export default function Administration() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-content container">
          <span className="label">Governance & Leadership</span>
          <h1 className="display-2" style={{ color:'#fff', marginTop:12 }}>Administration</h1>
          <p className="lead" style={{ maxWidth:520, margin:'16px auto 0', color:'rgba(255,255,255,0.75)' }}>
            Guided by visionary leaders committed to academic excellence and institutional integrity.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section-dark" id="leadership">
        <div className="container">
          <div className="section-header">
            <span className="label">University Leadership</span>
            <h2 className="h1">Meet Our Leaders</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-3">
            {leaders.map((l) => (
              <div key={l.id} className="leader-card card">
                <div className="leader-card__avatar">
                  <span>{l.initials}</span>
                </div>
                <div className="leader-card__body">
                  <h3 className="leader-card__name">{l.name}</h3>
                  <span className="label leader-card__role">{l.role}</span>
                  <p className="leader-card__dept">{l.dept}</p>
                  <p className="leader-card__bio">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section section-darker" id="departments">
        <div className="container">
          <div className="section-header">
            <span className="label">Academic Departments</span>
            <h2 className="h1">Our Departments</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-4">
            {departments.map((d) => (
              <div key={d.name} className="dept-card glass-panel">
                <span style={{ fontSize:'2rem' }}>{d.icon}</span>
                <h4 className="dept-name">{d.name}</h4>
                <p className="dept-hod">HoD: {d.hod}</p>
                <div className="dept-stats">
                  <span>👨‍🏫 {d.faculty} Faculty</span>
                  <span>📚 {d.programs} Programs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Council */}
      <section className="section section-dark" id="council">
        <div className="container">
          <div className="section-header">
            <span className="label">Governance</span>
            <h2 className="h1">Academic Council</h2>
            <div className="section-divider" />
          </div>
          <div className="council-grid">
            {['Board of Governors','Academic Senate','Finance Committee','Research & Innovation Board','Student Affairs Council','International Relations Committee'].map((c) => (
              <div key={c} className="council-item glass-panel">
                <span className="council-icon">⚡</span>
                <span className="council-name">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
