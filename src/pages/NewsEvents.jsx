import { newsItems, events } from '../data/index';
import './InnerPage.css';

const categories = ['All','Research','Achievement','Campus','Events','Admission','Partnership'];

export default function NewsEvents() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-content container">
          <span className="label">Stay Informed</span>
          <h1 className="display-2" style={{ color:'#fff', marginTop:12 }}>News & <span className="gradient-text">Events</span></h1>
          <p className="lead" style={{ maxWidth:500, margin:'16px auto 0', color:'rgba(255,255,255,0.75)' }}>
            The latest breakthroughs, campus stories, and upcoming events from Evergreen University.
          </p>
        </div>
      </section>

      {/* News */}
      <section className="section section-dark">
        <div className="container">
          {/* Category Filters */}
          <div className="news-filters">
            {categories.map((c) => (
              <button key={c} className={`news-filter-btn ${c==='All'?'news-filter-btn--active':''}`}>{c}</button>
            ))}
          </div>
          <div className="section-header" style={{ marginTop:48 }}>
            <span className="label">Latest Stories</span>
            <h2 className="h1">Campus News</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-3">
            {newsItems.map((n) => (
              <div key={n.id} className="news-card card">
                <div className="news-card__img-placeholder">
                  <span>{n.category==='Research'?'🔬':n.category==='Achievement'?'🏆':n.category==='Campus'?'🏫':n.category==='Events'?'🎉':n.category==='Partnership'?'🤝':'📰'}</span>
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
        </div>
      </section>

      {/* Events */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header">
            <span className="label">Mark Your Calendar</span>
            <h2 className="h1">Upcoming Events</h2>
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
                <button className="btn btn-primary btn-sm event-row__btn">Register</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
