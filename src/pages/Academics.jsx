import { programs } from '../data/index';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './InnerPage.css';

const levels = ['Undergraduate','Postgraduate','PhD & Research','Certificate'];
const faculties = [
  { name:'Dr. Ananya Sharma', dept:'Computer Science', expertise:'Quantum Computing, AI', papers:42, initials:'AS' },
  { name:'Prof. Vikram Nair', dept:'Biological Sciences', expertise:'Genomics, Biotechnology', papers:68, initials:'VN' },
  { name:'Dr. Seema Joshi', dept:'Business School', expertise:'Strategic Management, Finance', papers:31, initials:'SJ' },
  { name:'Prof. Rajiv Mehta', dept:'Civil Engineering', expertise:'Structural Analysis, Green Buildings', papers:55, initials:'RM' },
  { name:'Dr. Lakshmi Iyer', dept:'Chemistry', expertise:'Nanomaterials, Drug Synthesis', papers:47, initials:'LI' },
  { name:'Prof. Arjun Kapoor', dept:'Electronics', expertise:'VLSI Design, IoT', papers:39, initials:'AK' },
];

export default function Academics() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-content container">
          <span className="label">Academics</span>
          <h1 className="display-2" style={{ color:'#fff', marginTop:12 }}>Academic <span className="gradient-text">Excellence</span></h1>
          <p className="lead" style={{ maxWidth:540, margin:'16px auto 0', color:'rgba(255,255,255,0.75)' }}>
            180+ programs across 12 schools — designed to challenge, inspire, and prepare you for the world.
          </p>
        </div>
      </section>

      {/* Program Levels */}
      <section className="section section-dark">
        <div className="container">
          <div className="acad-levels">
            {levels.map((l) => (
              <div key={l} className="acad-level-tab">{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section section-darker" id="ug">
        <div className="container">
          <div className="section-header">
            <span className="label">All Programs</span>
            <h2 className="h1">Our Degree Programs</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-3">
            {programs.map((p) => (
              <div key={p.id} className="program-card card">
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontSize:'2.5rem' }}>{p.icon}</span>
                  {p.badge && <span className="badge badge-accent">{p.badge}</span>}
                </div>
                <span className="label">{p.category}</span>
                <h3 className="h3" style={{ color:'#fff' }}>{p.title}</h3>
                <p style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.6)', lineHeight:1.6 }}>{p.description}</p>
                <div style={{ display:'flex', gap:20, fontSize:'0.8rem', color:'rgba(255,255,255,0.45)' }}>
                  <span>⏱ {p.duration}</span>
                  <span>👥 {p.seats} Seats</span>
                </div>
                <Link to="/admission" className="program-card__link">Apply Now <FiArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section section-dark" id="faculty">
        <div className="container">
          <div className="section-header">
            <span className="label">Our Educators</span>
            <h2 className="h1">Distinguished Faculty</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-3">
            {faculties.map((f) => (
              <div key={f.name} className="faculty-card card">
                <div className="faculty-avatar">{f.initials}</div>
                <div className="faculty-info">
                  <h4 className="faculty-name">{f.name}</h4>
                  <span className="label faculty-dept">{f.dept}</span>
                  <p className="faculty-expertise">{f.expertise}</p>
                  <span className="faculty-papers">📄 {f.papers} publications</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
