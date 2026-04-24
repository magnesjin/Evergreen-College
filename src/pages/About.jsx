import './InnerPage.css';

const timeline = [
  { year:'1952', title:'Foundation', desc:'Established by visionary educator Dr. A.K. Menon with a founding batch of 120 students across three departments.' },
  { year:'1968', title:'University Status', desc:'Granted full university status by the UGC, enabling postgraduate and doctoral programs.' },
  { year:'1985', title:'Research Expansion', desc:'Opened the Centre for Advanced Sciences, launching a new era of interdisciplinary research.' },
  { year:'2001', title:'Global Reach', desc:'Signed first international MoU with the University of Cambridge, initiating global exchange programs.' },
  { year:'2015', title:'Innovation Hub', desc:'Launched the Innovation & Entrepreneurship Centre, incubating 80+ startups to date.' },
  { year:'2026', title:'Today', desc:'28,000+ students, 1,200+ faculty, 180+ programs, ranked #3 in India by QS World Rankings.' },
];

const values = [
  { icon:'🔬', title:'Inquiry', desc:'We nurture curiosity and critical thinking as the foundation of all learning.' },
  { icon:'🌍', title:'Impact', desc:'Our research and graduates create meaningful, lasting change in the world.' },
  { icon:'🤝', title:'Integrity', desc:'We uphold the highest standards of honesty, ethics, and transparency.' },
  { icon:'🌱', title:'Inclusion', desc:'A diverse, equitable community where every voice is valued and heard.' },
];

const accreditations = [
  { name:'NAAC', grade:'A++', body:'National Assessment & Accreditation Council' },
  { name:'NBA', grade:'Accredited', body:'National Board of Accreditation' },
  { name:'QS', grade:'#3 India', body:'QS World University Rankings 2026' },
  { name:'NIRF', grade:'Rank 7', body:'National Institutional Ranking Framework' },
];

export default function About() {
  return (
    <div className="inner-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content container">
          <span className="label">Who We Are</span>
          <h1 className="display-2" style={{ color:'#fff', marginTop:12 }}>About <span className="gradient-text">Evergreen University</span></h1>
          <p className="lead" style={{ maxWidth:560, margin:'16px auto 0', color:'rgba(255,255,255,0.75)' }}>
            Shaping minds, inspiring innovation, and building a better world since 1952.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-dark" id="mission">
        <div className="container">
          <div className="about-mv-grid">
            <div className="about-mv-card glass-panel">
              <span style={{ fontSize:'2.5rem' }}>🎯</span>
              <h2 className="h2" style={{ color:'#fff', marginTop:16 }}>Our Mission</h2>
              <p style={{ color:'rgba(255,255,255,0.65)', lineHeight:1.8, marginTop:12 }}>
                To advance knowledge, foster innovation, and prepare graduates who contribute positively to society through excellence in teaching, research, and service.
              </p>
            </div>
            <div className="about-mv-card glass-panel">
              <span style={{ fontSize:'2.5rem' }}>🌟</span>
              <h2 className="h2" style={{ color:'#fff', marginTop:16 }}>Our Vision</h2>
              <p style={{ color:'rgba(255,255,255,0.65)', lineHeight:1.8, marginTop:12 }}>
                To be a globally recognised centre of learning that shapes the next generation of ethical, innovative, and compassionate leaders for a sustainable world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header">
            <span className="label">Our Core Values</span>
            <h2 className="h1">What Drives Us</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-4">
            {values.map((v) => (
              <div key={v.title} className="value-card glass-panel">
                <span style={{ fontSize:'2.5rem' }}>{v.icon}</span>
                <h3 className="h3" style={{ color:'#fff', marginTop:16 }}>{v.title}</h3>
                <p style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.6)', marginTop:8, lineHeight:1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-dark" id="history">
        <div className="container">
          <div className="section-header">
            <span className="label">Our Journey</span>
            <h2 className="h1">75 Years of Excellence</h2>
            <div className="section-divider" />
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={item.year} className={`timeline-item ${i%2===0?'timeline-item--left':'timeline-item--right'}`}>
                <div className="timeline-card glass-panel">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="section section-darker" id="rankings">
        <div className="container">
          <div className="section-header">
            <span className="label">Accreditations & Rankings</span>
            <h2 className="h1">Recognised Excellence</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-4">
            {accreditations.map((a) => (
              <div key={a.name} className="accred-card glass-panel">
                <div className="accred-name">{a.name}</div>
                <div className="accred-grade gradient-text">{a.grade}</div>
                <p className="accred-body">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
