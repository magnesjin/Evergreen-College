import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">EU</div>
                <div>
                  <div className="footer__logo-name">Evergreen University</div>
                  <div className="footer__logo-tagline">Excellence in Education Since 1952</div>
                </div>
              </div>
              <p className="footer__desc">
                A world-class institution committed to academic excellence, groundbreaking research, and nurturing leaders who shape the future.
              </p>
              <div className="footer__socials">
                {[
                  { Icon: FiFacebook, href: '#', label: 'Facebook' },
                  { Icon: FiTwitter, href: '#', label: 'Twitter' },
                  { Icon: FiInstagram, href: '#', label: 'Instagram' },
                  { Icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                  { Icon: FiYoutube, href: '#', label: 'YouTube' },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} className="footer__social" aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Academics', href: '/academics' },
                  { label: 'Admission', href: '/admission' },
                  { label: 'Research', href: '/research' },
                  { label: 'Campus Life', href: '/campus-life' },
                  { label: 'News & Events', href: '/news-events' },
                ].map((l) => (
                  <li key={l.label}><Link to={l.href} className="footer__link">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Administration */}
            <div className="footer__col">
              <h4 className="footer__col-title">Administration</h4>
              <ul className="footer__links">
                {[
                  { label: 'Leadership', href: '/administration' },
                  { label: 'Academic Council', href: '/administration#council' },
                  { label: 'Student Affairs', href: '/administration#student' },
                  { label: 'Alumni Network', href: '/administration#alumni' },
                  { label: 'Career Services', href: '/campus-life#careers' },
                  { label: 'Library', href: '/campus-life#library' },
                ].map((l) => (
                  <li key={l.label}><Link to={l.href} className="footer__link">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact Us</h4>
              <ul className="footer__contact">
                <li>
                  <FiMapPin size={16} />
                  <span>42 University Avenue, Greenfield, MH 411001, India</span>
                </li>
                <li>
                  <FiPhone size={16} />
                  <a href="tel:+912012345678">+91 20 1234 5678</a>
                </li>
                <li>
                  <FiMail size={16} />
                  <a href="mailto:info@evergreen.edu">info@evergreen.edu</a>
                </li>
              </ul>
              <div className="footer__newsletter">
                <h5>Stay Updated</h5>
                <div className="footer__newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button className="btn btn-primary btn-sm">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Evergreen University. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
