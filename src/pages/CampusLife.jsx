import { clubs, events } from '../data/index';
import './InnerPage.css';

const facilities = [
  { icon:'🏠', title:'Student Housing', desc:'4,500+ hostel rooms across 12 residences. AC & non-AC options with Wi-Fi, laundry, and 24/7 security.' },
  { icon:'🍽️', title:'Dining', desc:'8 cafeterias with vegetarian, vegan, and diverse cuisine options. 24-hour food court available.' },
  { icon:'📚', title:'Central Library', desc:'1.2 million volumes, 200+ databases, 24/7 reading halls, and an advanced digital archive.' },
  { icon:'🏋️', title:'Sports Complex', desc:'Olympic-size pool, multi-sport courts, indoor stadium, gym, and yoga centre.' },
  { icon:'🏥', title:'Health Centre', desc:'On-campus clinic with doctors, counsellors, and emergency care available round the clock.' },
  { icon:'🚌', title:'Transport', desc:'Extensive bus network covering 25+ city routes. Cycle-sharing and EV charging stations on campus.' },
];

const galleryItems = ['🏛️','🌳','🔬','🎭','⚽','🎓','🏊','🌅'];

export default function CampusLife() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-content container">
          <span className="label">Life at Evergreen</span>
          <h1 className="display-2" style={{ color:'#fff', marginTop:12 }}>Campus <span className="gradient-text">Life</span></h1>
          <p className="lead" style={{ maxWidth:520, margin:'16px auto 0', color:'rgba(255,255,255,0.75)' }}>
            A vibrant, inclusive campus where learning extends well beyond the classroom.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="section section-dark" id="housing">
        <div className="container">
          <div className="section-header">
            <span className="label">Infrastructure</span>
            <h2 className="h1">World-Class Facilities</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-3">
            {facilities.map((f) => (
              <div key={f.title} className="facility-card glass-panel">
                <span style={{ fontSize:'2.5rem' }}>{f.icon}</span>
                <h3 style={{ color:'#fff', fontFamily:'var(--font-heading)', fontSize:'1.15rem', marginTop:16 }}>{f.title}</h3>
                <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.875rem', lineHeight:1.7, marginTop:8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="section section-darker" id="clubs">
        <div className="container">
          <div className="section-header">
            <span className="label">Student Activities</span>
            <h2 className="h1">Clubs & Societies</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-4">
            {clubs.map((c) => (
              <div key={c.id} className="club-card glass-panel">
                <span style={{ fontSize:'2rem' }}>{c.icon}</span>
                <h4 style={{ color:'#fff', fontWeight:600, marginTop:12 }}>{c.name}</h4>
                <span className="badge badge-accent" style={{ marginTop:4 }}>{c.category}</span>
                <p style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.8rem', marginTop:8 }}>👥 {c.members} members</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section section-dark" id="gallery">
        <div className="container">
          <div className="section-header">
            <span className="label">Campus Gallery</span>
            <h2 className="h1">Life in Pictures</h2>
            <div className="section-divider" />
          </div>
          <div className="gallery-grid">
            {galleryItems.map((g, i) => (
              <div key={i} className={`gallery-item gallery-item--${i%3===0?'tall':i%5===0?'wide':''}`}>
                <div className="gallery-item__placeholder">{g}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section section-darker" id="sports">
        <div className="container">
          <div className="section-header">
            <span className="label">Coming Up</span>
            <h2 className="h1">Upcoming Campus Events</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {events.map((ev) => (
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
                <button className="btn btn-ghost btn-sm">Register</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
