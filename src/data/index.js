// programs.js
export const programs = [
  {
    id: 1,
    icon: '🧬',
    category: 'Sciences',
    title: 'Biological Sciences',
    description: 'Explore life at every scale, from molecular biology to ecosystems.',
    duration: '4 Years',
    seats: 120,
    badge: 'Popular',
  },
  {
    id: 2,
    icon: '💻',
    category: 'Technology',
    title: 'Computer Science & AI',
    description: 'Lead the future of technology with cutting-edge AI and software engineering.',
    duration: '4 Years',
    seats: 180,
    badge: 'High Demand',
  },
  {
    id: 3,
    icon: '⚖️',
    category: 'Law',
    title: 'Bachelor of Laws (LLB)',
    description: 'Rigorous legal education with moot courts, internships, and global exposure.',
    duration: '3 Years',
    seats: 90,
    badge: '',
  },
  {
    id: 4,
    icon: '📊',
    category: 'Business',
    title: 'Business Administration',
    description: 'Develop leadership and strategic thinking for the global business landscape.',
    duration: '4 Years',
    seats: 200,
    badge: '',
  },
  {
    id: 5,
    icon: '🏗️',
    category: 'Engineering',
    title: 'Civil & Structural Engineering',
    description: 'Design and build the infrastructure of tomorrow with sustainability in mind.',
    duration: '4 Years',
    seats: 100,
    badge: '',
  },
  {
    id: 6,
    icon: '🎨',
    category: 'Arts',
    title: 'Fine Arts & Design',
    description: 'Nurture your creative vision with world-class studios and mentors.',
    duration: '4 Years',
    seats: 60,
    badge: '',
  },
];

// news.js
export const newsItems = [
  {
    id: 1,
    date: 'April 18, 2026',
    category: 'Research',
    title: 'Faculty Team Wins National Science Foundation Grant for Quantum Computing Research',
    excerpt: 'Prof. Ananya Sharma leads a $2.5M initiative to develop error-correcting algorithms for next-gen quantum processors.',
    image: null,
    readTime: '4 min read',
  },
  {
    id: 2,
    date: 'April 12, 2026',
    category: 'Achievement',
    title: 'Evergreen University Ranked #3 in India for Research Output',
    excerpt: 'QS World University Rankings 2026 places us among the top research institutions in South Asia.',
    image: null,
    readTime: '3 min read',
  },
  {
    id: 3,
    date: 'April 5, 2026',
    category: 'Campus',
    title: 'New Innovation Hub Opens with State-of-the-Art Maker Labs',
    excerpt: 'The ₹45 Cr facility features robotics labs, 3D printing, AR/VR studios and co-working spaces for 500+ students.',
    image: null,
    readTime: '5 min read',
  },
  {
    id: 4,
    date: 'March 28, 2026',
    category: 'Events',
    title: 'Annual Cultural Fest "Spectrum 2026" Draws 12,000 Visitors',
    excerpt: 'Three days of music, art, debates, and innovation culminated in an unforgettable celebration of campus diversity.',
    image: null,
    readTime: '3 min read',
  },
  {
    id: 5,
    date: 'March 20, 2026',
    category: 'Admission',
    title: 'Admissions Open for 2026-27: Early Decision Applications Now Accepted',
    excerpt: 'Prospective students can apply early for priority consideration across all undergraduate programs.',
    image: null,
    readTime: '2 min read',
  },
  {
    id: 6,
    date: 'March 10, 2026',
    category: 'Partnership',
    title: 'Evergreen Signs MoU with Google for AI Education Initiative',
    excerpt: '100 merit scholarships and industry mentorships as part of a 5-year partnership to upskill students in AI/ML.',
    image: null,
    readTime: '4 min read',
  },
];

// events.js
export const events = [
  { id: 1, date: { day: '28', month: 'Apr' }, title: 'Open Day & Campus Tour', time: '10:00 AM – 4:00 PM', location: 'Main Campus', type: 'Admissions' },
  { id: 2, date: { day: '02', month: 'May' }, title: 'International Research Symposium 2026', time: '9:00 AM – 6:00 PM', location: 'Conference Center', type: 'Research' },
  { id: 3, date: { day: '08', month: 'May' }, title: 'MBA Info Session', time: '6:00 PM – 8:00 PM', location: 'Business School Auditorium', type: 'Academics' },
  { id: 4, date: { day: '15', month: 'May' }, title: 'Convocation Ceremony 2026', time: '10:00 AM – 1:00 PM', location: 'Grand Auditorium', type: 'Ceremony' },
  { id: 5, date: { day: '22', month: 'May' }, title: 'Annual Sports Meet', time: '8:00 AM – 5:00 PM', location: 'Sports Complex', type: 'Campus Life' },
  { id: 6, date: { day: '01', month: 'Jun' }, title: 'Summer Internship Drive', time: '11:00 AM – 3:00 PM', location: 'Placement Cell', type: 'Careers' },
];

// people.js
export const leaders = [
  { id: 1, name: 'Dr. Rajesh Verma', role: 'Chancellor', dept: 'Office of the Chancellor', bio: 'Dr. Verma brings 30+ years of academic leadership, having served at IITs and international universities.', initials: 'RV' },
  { id: 2, name: 'Prof. Sunita Mehta', role: 'Vice Chancellor', dept: 'Academic Affairs', bio: 'An award-winning chemist, Prof. Mehta has published 180+ papers and leads academic strategy.', initials: 'SM' },
  { id: 3, name: 'Dr. Karthik Rajan', role: 'Dean of Research', dept: 'Research & Innovation', bio: 'Pioneer in renewable energy research with $12M in active research grants.', initials: 'KR' },
  { id: 4, name: 'Ms. Priya Anand', role: 'Dean of Admissions', dept: 'Enrollment Management', bio: 'Led enrollment growth of 40% over five years with inclusive admission practices.', initials: 'PA' },
  { id: 5, name: 'Prof. Arun Bose', role: 'Dean of Engineering', dept: 'Engineering & Technology', bio: 'Former NASA collaborator and AI researcher with 15 patents to his name.', initials: 'AB' },
  { id: 6, name: 'Dr. Meena Pillai', role: 'Dean of Student Affairs', dept: 'Student Experience', bio: 'Dedicated to student well-being, mental health, and vibrant campus life.', initials: 'MP' },
];

// research.js
export const researchAreas = [
  { id: 1, icon: '⚛️', title: 'Quantum Computing', desc: 'Pioneering error-correction algorithms and quantum network architectures.', projects: 12, funding: '₹18.5 Cr' },
  { id: 2, icon: '🌱', title: 'Sustainable Energy', desc: 'Solar, wind, and hydrogen fuel cell research with industry partnerships.', projects: 9, funding: '₹22 Cr' },
  { id: 3, icon: '🧠', title: 'Neuroscience & AI', desc: 'Understanding the brain to build better artificial general intelligence.', projects: 7, funding: '₹14 Cr' },
  { id: 4, icon: '💊', title: 'Biomedical Innovation', desc: 'Drug discovery, genomics, and precision medicine research.', projects: 15, funding: '₹30 Cr' },
  { id: 5, icon: '🌐', title: 'Climate & Environment', desc: 'Data-driven solutions to climate change, pollution, and biodiversity.', projects: 11, funding: '₹16 Cr' },
  { id: 6, icon: '📡', title: 'Space Technology', desc: 'Satellite systems, remote sensing, and astro-data analytics.', projects: 5, funding: '₹9 Cr' },
];

// clubs.js
export const clubs = [
  { id: 1, icon: '🤖', name: 'Robotics Club', members: 320, category: 'Tech' },
  { id: 2, icon: '🎭', name: 'Drama & Theatre Society', members: 180, category: 'Arts' },
  { id: 3, icon: '📸', name: 'Photography Guild', members: 250, category: 'Arts' },
  { id: 4, icon: '♟️', name: 'Chess Club', members: 140, category: 'Games' },
  { id: 5, icon: '🌍', name: 'Model United Nations', members: 200, category: 'Social' },
  { id: 6, icon: '🎵', name: 'Music Ensemble', members: 160, category: 'Arts' },
  { id: 7, icon: '⚽', name: 'Football Club', members: 290, category: 'Sports' },
  { id: 8, icon: '💡', name: 'Entrepreneurship Cell', members: 380, category: 'Business' },
];
