import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiAward, FiUsers, FiBookOpen, FiGlobe } from 'react-icons/fi';
import { programs, newsItems, events } from '../data/index';
import './Home.css';

const stats = [
  { icon: <FiUsers />, value: '28,000+', label: 'Students Enrolled' },
  { icon: <FiAward />, value: '1,200+', label: 'Faculty Members' },
  { icon: <FiBookOpen />, value: '180+', label: 'Academic Programs' },
  { icon: <FiGlobe />, value: '95+', label: 'Countries Represented' },
];

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid-pattern" />
        </div>
        <div className="container hero__content">
          <div className="highlight-bar"><FiAward size={14} /> Ranked #3 in India — QS World Rankings 2026</div>
          <h1 className="display-1 hero__title">Shape the Future.<br /><span className="gradient-text">Define Your Legacy.</span></h1>
          <p className="lead hero__desc">Evergreen University — where world-class research, innovative teaching, and a vibrant campus community converge to create leaders who transform the world.</p>
          <div className="hero__actions">
            <Link to="/admission" className="btn btn-primary btn-lg">Apply for 2026 <FiArrowRight /></Link>
            <button className="btn btn-ghost btn-lg">
              <span className="hero__play-icon"><FiPlay size={14} /></span> Watch Our Story
            </button>
          </div>
          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-icon">{s.icon}</span>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__scroll-hint"><span /></div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {['Excellence in Research','NAAC A++ Accredited','World-Class Faculty','Global Alumni Network','75 Years of Legacy','95+ Research Centers','Industry Partnerships','Vibrant Campus Life','Excellence in Research','NAAC A++ Accredited','World-Class Faculty','Global Alumni Network'].map((t, i) => (
            <span key={i} className="marquee-item">{t} <span className="marquee-dot">✦</span></span>
          ))}
        </div>
      </div>

      {/* PROGRAMS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="label">Academic Excellence</span>
            <h2 className="h1">Explore Our Programs</h2>
            <p>From science to the arts, discover programs designed to challenge, inspire, and prepare you for tomorrow.</p>
            <div className="section-divider" />
          </div>
          <div className="grid-3">
            {programs.map((p) => (
              <div key={p.id} className="program-card card">
                <div className="program-card__top">
                  <span className="program-card__icon">{p.icon}</span>
                  {p.badge && <span className="badge badge-accent">{p.badge}</span>}
                </div>
                <span className="label">{p.category}</span>
                <h3 className="h3 program-card__title">{p.title}</h3>
                <p className="program-card__desc">{p.description}</p>
                <div className="program-card__meta">
                  <span>⏱ {p.duration}</span>
                  <span>👥 {p.seats} Seats</span>
                </div>
                <Link to="/academics" className="program-card__link">Learn More <FiArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:48 }}>
            <Link to="/academics" className="btn btn-outline">View All Programs <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="section why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <span className="label">Why Choose Us</span>
              <h2 className="h1" style={{ marginTop:12, marginBottom:24 }}>Built for <span className="gradient-text">Tomorrow's Leaders</span></h2>
              <p className="lead" style={{ marginBottom:32 }}>We combine a prestigious 75-year legacy with cutting-edge innovation and a truly global community.</p>
              {[
                { icon:'🏆', title:'Top-Ranked Research', desc:'Over ₹200 Cr in annual research funding across 95+ active research centers.' },
                { icon:'🌐', title:'Global Exposure', desc:'Exchange programs with 200+ universities in 60+ countries worldwide.' },
                { icon:'🤝', title:'Industry Connect', desc:'500+ corporate partners enabling internships, placements & live projects.' },
                { icon:'💡', title:'Innovation Ecosystem', desc:'On-campus incubator with 80+ funded startups and counting.' },
              ].map((item) => (
                <div key={item.title} className="why-item">
                  <span className="why-item__icon">{item.icon}</span>
                  <div>
                    <h4 className="why-item__title">{item.title}</h4>
                    <p className="why-item__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="why-visual">
              <div className="why-card why-card--main glass-panel">
                <div className="why-card__rank">
                  <span className="why-card__rank-num">#3</span>
                  <span className="why-card__rank-label">in India<br />QS 2026</span>
                </div>
              </div>
              <div className="why-card why-card--sm glass-panel why-card--tl">
                <span style={{ fontSize:'2rem' }}>🎓</span>
                <strong>98%</strong><span>Placement</span>
              </div>
              <div className="why-card why-card--sm glass-panel why-card--br">
                <span style={{ fontSize:'2rem' }}>🔬</span>
                <strong>600+</strong><span>Publications/yr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="label">Latest Updates</span>
            <h2 className="h1">News & Highlights</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-3">
            {newsItems.slice(0,3).map((n) => (
              <div key={n.id} className="news-card card">
                <div className="news-card__img-placeholder">
                  <span>{n.category==='Research'?'🔬':n.category==='Achievement'?'🏆':n.category==='Campus'?'🏫':'📰'}</span>
                </div>
                <div className="news-card__body">
                  <div className="news-card__meta">
                    <span className="badge badge-accent">{n.category}</span>
                    <span className="news-card__date">{n.date}</span>
                  </div>
                  <h3 className="news-card__title">{n.title}</h3>
                  <p className="news-card__excerpt">{n.excerpt}</p>
                  <span className="news-card__read">{n.readTime}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:48 }}>
            <Link to="/news-events" className="btn btn-outline">All News & Events <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header">
            <span className="label">Upcoming</span>
            <h2 className="h1">Events Calendar</h2>
            <div className="section-divider" />
          </div>
          <div className="events-list">
            {events.slice(0,4).map((ev) => (
              <div key={ev.id} className="event-row glass-panel">
                <div className="event-row__date">
                  <span className="event-row__day">{ev.date.day}</span>
                  <span className="event-row__month">{ev.date.month}</span>
                </div>
                <div className="event-row__info">
                  <span className="badge badge-primary">{ev.type}</span>
                  <h4 className="event-row__title">{ev.title}</h4>
                  <div className="event-row__meta">
                    <span>🕐 {ev.time}</span>
                    <span>📍 {ev.location}</span>
                  </div>
                </div>
                <Link to="/news-events" className="btn btn-ghost btn-sm event-row__btn">Register</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner__bg"><div className="hero__orb hero__orb--1" style={{ opacity:0.3 }} /></div>
        <div className="container cta-banner__content">
          <h2 className="display-2">Ready to Begin Your Journey?</h2>
          <p className="lead">Applications for 2026–27 are now open. Join a community of 28,000+ students from across the globe.</p>
          <div className="hero__actions" style={{ justifyContent:'center' }}>
            <Link to="/admission" className="btn btn-primary btn-lg animate-pulse-glow">Apply Now <FiArrowRight /></Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
