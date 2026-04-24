import { useRef } from 'react';
import jsPDF from 'jspdf';
import { FiDownload, FiCheckCircle, FiArrowRight, FiCalendar, FiDollarSign, FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './InnerPage.css';
import './Admission.css';

const steps = [
  { num:'01', title:'Create Account', desc:'Register on our online portal with your email and basic details.' },
  { num:'02', title:'Fill Application', desc:'Complete the application form with academic history and personal statement.' },
  { num:'03', title:'Submit Documents', desc:'Upload transcripts, ID proof, recommendation letters, and test scores.' },
  { num:'04', title:'Pay Application Fee', desc:'Pay the ₹1,500 non-refundable application processing fee.' },
  { num:'05', title:'Entrance Test / Interview', desc:'Appear for program-specific entrance test or personal interview.' },
  { num:'06', title:'Receive Decision', desc:'Get your admission decision via email and the student portal.' },
];

const deadlines = [
  { round:'Early Decision', date:'30 June 2026', status:'Open', note:'Priority scholarship consideration' },
  { round:'Regular Decision', date:'31 August 2026', status:'Open', note:'Standard admission round' },
  { round:'Late Admission', date:'30 September 2026', status:'Upcoming', note:'Subject to seat availability' },
];

const fees = [
  { program:'B.Tech / B.E.', tuition:'₹1,85,000/year', hostel:'₹75,000/year', total:'₹2,60,000/year' },
  { program:'B.Sc / B.A / B.Com', tuition:'₹95,000/year', hostel:'₹75,000/year', total:'₹1,70,000/year' },
  { program:'MBA / M.Tech', tuition:'₹2,50,000/year', hostel:'₹80,000/year', total:'₹3,30,000/year' },
  { program:'PhD Programs', tuition:'₹60,000/year', hostel:'₹75,000/year', total:'₹1,35,000/year' },
];

const scholarships = [
  { name:'Chancellor\'s Merit Scholarship', value:'100% Tuition Waiver', criteria:'Top 1% — Entrance Rank' },
  { name:'Academic Excellence Award', value:'50% Tuition Waiver', criteria:'95%+ in qualifying exam' },
  { name:'Need-Based Financial Aid', value:'Up to ₹1,00,000/year', criteria:'Family income < ₹5 LPA' },
  { name:'Sports & Cultural Quota', value:'25% Tuition Waiver', criteria:'National/State level achievement' },
];

function generateAdmissionPDF() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const W = 210, margin = 20;

  // Header background
  doc.setFillColor(26, 35, 126);
  doc.rect(0, 0, W, 45, 'F');

  // Gold accent bar
  doc.setFillColor(200, 169, 81);
  doc.rect(0, 45, W, 3, 'F');

  // University name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('EVERGREEN UNIVERSITY', W / 2, 18, { align: 'center' });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('42 University Avenue, Greenfield, MH 411001 | info@evergreen.edu | +91 20 1234 5678', W / 2, 26, { align: 'center' });

  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('UNDERGRADUATE ADMISSION APPLICATION FORM 2026-27', W / 2, 37, { align: 'center' });

  // Reset text color
  doc.setTextColor(30, 30, 30);

  let y = 58;

  const sectionHeader = (title) => {
    doc.setFillColor(240, 242, 255);
    doc.rect(margin, y - 5, W - margin * 2, 10, 'F');
    doc.setDrawColor(26, 35, 126);
    doc.setLineWidth(0.5);
    doc.rect(margin, y - 5, W - margin * 2, 10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(26, 35, 126);
    doc.text(title, margin + 3, y + 1);
    doc.setTextColor(30, 30, 30);
    y += 12;
  };

  const field = (label, width = 80, x = margin) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(90, 90, 90);
    doc.text(label + ':', x, y);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.3);
    doc.line(x, y + 1, x + width, y + 1);
    doc.setTextColor(30, 30, 30);
  };

  const row2 = (l1, l2) => { field(l1, 78, margin); field(l2, 78, margin + 87); y += 10; };
  const row1 = (l1) => { field(l1, 165, margin); y += 10; };

  // SECTION 1 — Personal Info
  sectionHeader('SECTION 1 — PERSONAL INFORMATION');
  row2('Full Name (as per documents)', 'Date of Birth (DD/MM/YYYY)');
  row2('Father\'s Name', 'Mother\'s Name');
  row2('Gender', 'Nationality');
  row2('Category (General/OBC/SC/ST)', 'Religion');
  row1('Permanent Address');
  row1('City / State / Pin Code');
  row2('Mobile Number', 'Email Address');
  row2('Aadhaar Number', 'PAN (if applicable)');
  y += 4;

  // SECTION 2 — Academic
  sectionHeader('SECTION 2 — ACADEMIC BACKGROUND');
  const headers10 = ['Examination', 'Board / University', 'Year', 'Max Marks', 'Obtained', '%'];
  const colX10 = [margin, margin+30, margin+78, margin+100, margin+118, margin+138];
  doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
  headers10.forEach((h, i) => doc.text(h, colX10[i], y));
  y += 2;
  doc.setLineWidth(0.3); doc.setDrawColor(180,180,180);
  doc.line(margin, y, W - margin, y); y += 5;
  ['10th Standard','12th Standard / Equivalent','Graduation (if applicable)'].forEach((exam) => {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8);
    doc.text(exam, colX10[0], y);
    colX10.slice(1).forEach((x) => { doc.line(x - 2, y + 1, x + 24, y + 1); });
    y += 8;
  });
  y += 4;

  // SECTION 3 — Program
  sectionHeader('SECTION 3 — PROGRAM SELECTION');
  row2('First Choice Program', 'Second Choice Program');
  row2('Mode of Study (Full-time / Part-time)', 'Campus Preference');
  row1('Why Evergreen University? (Brief Statement)');
  y += 8; row1('');
  y += 4;

  // SECTION 4 — Documents Checklist
  sectionHeader('SECTION 4 — DOCUMENTS CHECKLIST');
  const docs = [
    '☐  10th Marksheet (Self-attested copy)',
    '☐  12th / Equivalent Marksheet (Self-attested copy)',
    '☐  Transfer Certificate from last institution',
    '☐  Character Certificate',
    '☐  Passport-size Photographs (4 copies)',
    '☐  Aadhaar Card / Government ID Proof',
    '☐  Category Certificate (if applicable)',
    '☐  Migration Certificate (if applicable)',
  ];
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  docs.forEach((d, i) => {
    doc.text(d, i < 4 ? margin : margin + 90, y + (i % 4) * 7);
    if (i === 3) {}
  });
  y += 32;

  // SECTION 5 — Declaration
  sectionHeader('SECTION 5 — DECLARATION');
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
  const decl = 'I hereby declare that all information provided in this application is true, complete, and correct to the best of my knowledge and belief. I understand that any false or misleading information may result in the cancellation of my admission. I agree to abide by all rules and regulations of Evergreen University.';
  const lines = doc.splitTextToSize(decl, W - margin * 2);
  doc.text(lines, margin, y); y += lines.length * 5 + 10;

  row2('Place', 'Date (DD/MM/YYYY)');
  y += 12;
  doc.setFont('helvetica', 'bold'); doc.setFontSize(9);
  doc.text('Applicant\'s Signature:', margin, y);
  doc.setDrawColor(100,100,100); doc.setLineWidth(0.4);
  doc.line(margin + 40, y, margin + 110, y);
  doc.text('Parent/Guardian Signature:', margin + 115, y);
  doc.line(margin + 160, y, W - margin, y);
  y += 14;

  // Footer
  doc.setFillColor(26, 35, 126);
  doc.rect(0, 282, W, 15, 'F');
  doc.setTextColor(200, 169, 81);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
  doc.text('OFFICE USE ONLY — Application No: ____________   Received By: ____________   Date: ____________   Fee Paid: ₹1,500 ☐', W / 2, 291, { align: 'center' });

  doc.save('Evergreen_University_Admission_Form_2026.pdf');
}

export default function Admission() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-content container">
          <span className="label">Join Our Community</span>
          <h1 className="display-2" style={{ color:'#fff', marginTop:12 }}>Admissions <span className="gradient-text">2026–27</span></h1>
          <p className="lead" style={{ maxWidth:520, margin:'16px auto 0', color:'rgba(255,255,255,0.75)' }}>
            Your journey to Evergreen University begins here. Applications are now open.
          </p>
          <div style={{ marginTop:28 }}>
            <Link to="#download" className="btn btn-primary btn-lg" onClick={generateAdmissionPDF}>
              <FiDownload /> Download Admission Form
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section section-dark" id="how">
        <div className="container">
          <div className="section-header">
            <span className="label">Application Process</span>
            <h2 className="h1">How to Apply</h2>
            <div className="section-divider" />
          </div>
          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.num} className="step-card glass-panel">
                <div className="step-num">{s.num}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="section section-darker" id="requirements">
        <div className="container">
          <div className="section-header">
            <span className="label">Important Dates</span>
            <h2 className="h1">Application Deadlines</h2>
            <div className="section-divider" />
          </div>
          <div className="deadlines-list">
            {deadlines.map((d) => (
              <div key={d.round} className="deadline-row glass-panel">
                <FiCalendar size={24} style={{ color:'var(--accent)', flexShrink:0 }} />
                <div className="deadline-info">
                  <h4 className="deadline-round">{d.round}</h4>
                  <p className="deadline-note">{d.note}</p>
                </div>
                <div className="deadline-date">{d.date}</div>
                <span className={`badge ${d.status==='Open'?'badge-open':'badge-upcoming'}`}>{d.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="section section-dark" id="fees">
        <div className="container">
          <div className="section-header">
            <span className="label">Financial Information</span>
            <h2 className="h1">Tuition & Fees</h2>
            <div className="section-divider" />
          </div>
          <div className="fees-table glass-panel">
            <div className="fees-table__head">
              <span>Program</span><span>Tuition</span><span>Hostel</span><span>Total/Year</span>
            </div>
            {fees.map((f) => (
              <div key={f.program} className="fees-table__row">
                <span className="fees-program">{f.program}</span>
                <span>{f.tuition}</span>
                <span>{f.hostel}</span>
                <span className="fees-total">{f.total}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section section-darker" id="scholarships">
        <div className="container">
          <div className="section-header">
            <span className="label">Financial Aid</span>
            <h2 className="h1">Scholarships Available</h2>
            <div className="section-divider" />
          </div>
          <div className="grid-2">
            {scholarships.map((s) => (
              <div key={s.name} className="scholarship-card glass-panel">
                <FiAward size={28} style={{ color:'var(--accent)' }} />
                <div>
                  <h4 className="scholarship-name">{s.name}</h4>
                  <p className="scholarship-value gradient-text">{s.value}</p>
                  <p className="scholarship-criteria">{s.criteria}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section section-dark" id="download">
        <div className="container">
          <div className="download-box glass-panel">
            <div className="download-box__icon">📄</div>
            <div className="download-box__content">
              <span className="label">Offline Application</span>
              <h2 className="h2" style={{ color:'#fff', marginTop:8 }}>Download Admission Form</h2>
              <p style={{ color:'rgba(255,255,255,0.6)', marginTop:8, lineHeight:1.7 }}>
                Download our official PDF admission form for 2026-27. Fill it out and submit to the Admissions Office along with attested copies of your documents.
              </p>
              <ul className="download-box__checklist">
                {['Personal Information Section','Academic Background Records','Program Selection','Documents Checklist','Declaration & Signature Block'].map((i) => (
                  <li key={i}><FiCheckCircle style={{ color:'var(--accent)' }} /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="download-box__actions">
              <button className="btn btn-primary btn-lg" onClick={generateAdmissionPDF}>
                <FiDownload /> Download PDF Form
              </button>
              <Link to="/contact" className="btn btn-outline">
                Contact Admissions <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
