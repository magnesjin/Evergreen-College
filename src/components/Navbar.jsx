import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiSearch, FiX, FiMenu, FiChevronDown } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Our History', href: '/about#history' },
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Rankings & Accreditations', href: '/about#rankings' },
      { label: 'Campus Map', href: '/about#campus' },
    ],
  },
  {
    label: 'Administration',
    href: '/administration',
    dropdown: [
      { label: 'Chancellor & Vice Chancellor', href: '/administration#leadership' },
      { label: 'Academic Council', href: '/administration#council' },
      { label: 'Deans & Directors', href: '/administration#deans' },
      { label: 'Departments', href: '/administration#departments' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    dropdown: [
      { label: 'Undergraduate Programs', href: '/academics#ug' },
      { label: 'Postgraduate Programs', href: '/academics#pg' },
      { label: 'PhD & Research', href: '/academics#phd' },
      { label: 'Faculty Directory', href: '/academics#faculty' },
    ],
  },
  {
    label: 'Admission',
    href: '/admission',
    dropdown: [
      { label: 'How to Apply', href: '/admission#how' },
      { label: 'Requirements', href: '/admission#requirements' },
      { label: 'Tuition & Fees', href: '/admission#fees' },
      { label: 'Scholarships', href: '/admission#scholarships' },
      { label: 'Download Form', href: '/admission#download' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    dropdown: [
      { label: 'Research Centers', href: '/research#centers' },
      { label: 'Publications', href: '/research#publications' },
      { label: 'Innovation & Patents', href: '/research#patents' },
      { label: 'Funding & Grants', href: '/research#grants' },
    ],
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    dropdown: [
      { label: 'Housing & Dining', href: '/campus-life#housing' },
      { label: 'Clubs & Societies', href: '/campus-life#clubs' },
      { label: 'Sports & Wellness', href: '/campus-life#sports' },
      { label: 'Gallery', href: '/campus-life#gallery' },
    ],
  },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const searchRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${mobileOpen ? 'navbar--mobile-open' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <span>EU</span>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Evergreen</span>
              <span className="navbar__logo-sub">University</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`navbar__item ${link.dropdown ? 'navbar__item--dropdown' : ''}`}
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                  {link.dropdown && <FiChevronDown className={`navbar__chevron ${activeDropdown === link.label ? 'navbar__chevron--open' : ''}`} />}
                </NavLink>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="navbar__dropdown" onMouseEnter={() => handleMouseEnter(link.label)} onMouseLeave={handleMouseLeave}>
                    <div className="navbar__dropdown-inner">
                      <span className="navbar__dropdown-label">{link.label}</span>
                      {link.dropdown.map((item) => (
                        <Link key={item.label} to={item.href} className="navbar__dropdown-link">
                          <span className="navbar__dropdown-arrow">→</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <button className="navbar__icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
              <FiSearch size={20} />
            </button>
            <Link to="/admission" className="btn btn-primary btn-sm navbar__apply-btn">
              Apply Now
            </Link>
            <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
          <div className="navbar__mobile-inner">
            {navLinks.map((link) => (
              <div key={link.label} className="navbar__mobile-item">
                <div className="navbar__mobile-row">
                  <Link to={link.href} className="navbar__mobile-link" onClick={() => !link.dropdown && setMobileOpen(false)}>
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button className="navbar__mobile-toggle" onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}>
                      <FiChevronDown className={mobileExpanded === link.label ? 'rotate-180' : ''} />
                    </button>
                  )}
                </div>
                {link.dropdown && mobileExpanded === link.label && (
                  <div className="navbar__mobile-sub">
                    {link.dropdown.map((sub) => (
                      <Link key={sub.label} to={sub.href} className="navbar__mobile-sub-link" onClick={() => setMobileOpen(false)}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/admission" className="btn btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}>
          <div className="search-modal">
            <button className="search-close" onClick={() => setSearchOpen(false)}>
              <FiX size={24} />
            </button>
            <p className="search-label label">Search Evergreen University</p>
            <div className="search-input-wrap">
              <FiSearch size={22} className="search-icon" />
              <input
                ref={searchRef}
                type="text"
                className="search-input"
                placeholder="Search programs, departments, research..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="search-suggestions">
              <span className="search-suggestions-label">Popular searches:</span>
              {['Computer Science', 'MBA Admission', 'Research Centers', 'Campus Life', 'Scholarships'].map((s) => (
                <button key={s} className="search-tag" onClick={() => setSearchQuery(s)}>{s}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
