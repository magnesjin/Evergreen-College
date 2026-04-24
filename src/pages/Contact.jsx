import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import './InnerPage.css';
import './Contact.css';

const departments = [
  { icon:'🎓', name:'Admissions Office', phone:'+91 20 1234 5601', email:'admissions@evergreen.edu', hours:'Mon–Fri: 9am–5pm' },
  { icon:'🔬', name:'Research Office', phone:'+91 20 1234 5620', email:'research@evergreen.edu', hours:'Mon–Fri: 9am–5pm' },
  { icon:'💼', name:'Placement Cell', phone:'+91 20 1234 5640', email:'placements@evergreen.edu', hours:'Mon–Sat: 9am–6pm' },
  { icon:'🏠', name:'Hostel Office', phone:'+91 20 1234 5660', email:'hostel@evergreen.edu', hours:'24/7' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', subject:'', dept:'General Inquiry', message:'' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-content container">
          <span className="label">We're Here to Help</span>
          <h1 className="display-2" style={{ color:'#fff', marginTop:12 }}>Contact <span className="gradient-text">Us</span></h1>
          <p className="lead" style={{ maxWidth:480, margin:'16px auto 0', color:'rgba(255,255,255,0.75)' }}>
            Have questions? Reach out to the right department and we'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section section-dark">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card glass-panel">
              <FiMapPin size={28} style={{ color:'var(--accent)' }} />
              <h4>Address</h4>
              <p>42 University Avenue,<br />Greenfield, MH 411001, India</p>
            </div>
            <div className="contact-info-card glass-panel">
              <FiPhone size={28} style={{ color:'var(--accent)' }} />
              <h4>Phone</h4>
              <p>+91 20 1234 5678<br />+91 20 1234 5679</p>
            </div>
            <div className="contact-info-card glass-panel">
              <FiMail size={28} style={{ color:'var(--accent)' }} />
              <h4>Email</h4>
              <p>info@evergreen.edu<br />support@evergreen.edu</p>
            </div>
            <div className="contact-info-card glass-panel">
              <FiClock size={28} style={{ color:'var(--accent)' }} />
              <h4>Office Hours</h4>
              <p>Mon–Fri: 9am–5pm<br />Sat: 9am–1pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Dept */}
      <section className="section section-darker">
        <div className="container">
          <div className="contact-main-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="h2" style={{ color:'#fff', marginBottom:8 }}>Send Us a Message</h2>
              <p style={{ color:'rgba(255,255,255,0.55)', marginBottom:28 }}>We typically respond within 1 business day.</p>
              {sent ? (
                <div className="contact-success glass-panel">
                  <FiCheckCircle size={40} style={{ color:'var(--accent)' }} />
                  <h3 style={{ color:'#fff' }}>Message Sent!</h3>
                  <p style={{ color:'rgba(255,255,255,0.6)' }}>Thank you for reaching out. We'll get back to you within 1 business day.</p>
                </div>
              ) : (
                <form className="contact-form glass-panel" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Full Name *</label>
                      <input type="text" placeholder="Your full name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                    </div>
                    <div className="contact-form__field">
                      <label>Email Address *</label>
                      <input type="email" placeholder="your@email.com" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Department</label>
                      <select value={form.dept} onChange={e=>setForm({...form,dept:e.target.value})}>
                        <option>General Inquiry</option>
                        <option>Admissions</option>
                        <option>Research</option>
                        <option>Placements</option>
                        <option>Finance</option>
                        <option>Hostel</option>
                      </select>
                    </div>
                    <div className="contact-form__field">
                      <label>Subject *</label>
                      <input type="text" placeholder="How can we help?" required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label>Message *</label>
                    <textarea rows={5} placeholder="Describe your query in detail..." required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width:'100%', justifyContent:'center' }}>
                    <FiSend /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="h2" style={{ color:'#fff', marginBottom:8 }}>Department Contacts</h2>
              <p style={{ color:'rgba(255,255,255,0.55)', marginBottom:28 }}>Reach out directly to the team you need.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {departments.map((d) => (
                  <div key={d.name} className="dept-contact-card glass-panel">
                    <span style={{ fontSize:'1.8rem' }}>{d.icon}</span>
                    <div>
                      <h4 style={{ color:'#fff', fontWeight:700 }}>{d.name}</h4>
                      <p style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.55)', marginTop:4 }}>📞 {d.phone}</p>
                      <p style={{ fontSize:'0.85rem', color:'var(--accent)', marginTop:2 }}>✉️ {d.email}</p>
                      <p style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.35)', marginTop:4 }}>🕐 {d.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
