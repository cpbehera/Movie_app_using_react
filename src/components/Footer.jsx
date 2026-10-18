function Footer() {
  const categories = [
    { name: 'Bollywood', link: '/bollywood' },
    { name: 'Hollywood', link: '/hollywood' },
    { name: 'South(Hindi Dubbed)', link: '/south' },
    { name: 'Web Series', link: '/web-series' },
    { name: 'Sci-Fi', link: '/sci-fi' },
  ]

  return (
    <footer className="mfoot">
      <div className="mfoot-inner">

        <div className="mfoot-top">
          {/* Brand */}
          <div className="mfoot-about">
            <a className="mfoot-brand" href="/" aria-label="CineSearch home">
              <span className="mfoot-mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                </svg>
              </span>
              <span className="mfoot-name">CineSearch</span>
            </a>
            <p className="mfoot-tagline">
              Search and browse movies and web series, all in one place.
            </p>
          </div>

          {/* Categories */}
          <nav className="mfoot-col" aria-label="Footer categories">
            <h2 className="mfoot-heading">Categories</h2>
            <ul className="mfoot-list">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href={category.link}>{category.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mfoot-bottom">
          <span>© {new Date().getFullYear()} CineSearch. All rights reserved.</span>
        </div>
      </div>

      {/* Scoped styles */}
      <style>{`
        .mfoot {
          --mf-bg: #12161f;
          --mf-line: rgba(255, 255, 255, 0.1);
          --mf-amber: #f5b83d;
          --mf-amber-ink: #1b1303;

          background-color: var(--mf-bg);
          color: rgba(255, 255, 255, 0.68);
          font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
        }
        .mfoot *,
        .mfoot *::before,
        .mfoot *::after {
          box-sizing: border-box;
        }
        .mfoot-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 3rem 1rem 1.5rem;
        }
        .mfoot-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 2.5rem 4rem;
          padding-bottom: 2.25rem;
          border-bottom: 1px solid var(--mf-line);
        }

        /* Brand */
        .mfoot-about {
          max-width: 22rem;
        }
        .mfoot-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: #fff;
          text-decoration: none;
        }
        .mfoot-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background-color: var(--mf-amber);
          color: var(--mf-amber-ink);
        }
        .mfoot-name {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .mfoot-tagline {
          margin: 1rem 0 0;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Link column */
        .mfoot-heading {
          margin: 0 0 1rem;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .mfoot-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .mfoot-list a {
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .mfoot-list a:hover {
          color: var(--mf-amber);
        }

        /* Bottom bar */
        .mfoot-bottom {
          padding-top: 1.25rem;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Keyboard focus */
        .mfoot a:focus-visible {
          outline: 2px solid var(--mf-amber);
          outline-offset: 3px;
          border-radius: 4px;
        }

        @media (max-width: 575.98px) {
          .mfoot-inner {
            padding-top: 2.25rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .mfoot-list a { transition: none; }
        }
      `}</style>
    </footer>
  )
}

export default Footer