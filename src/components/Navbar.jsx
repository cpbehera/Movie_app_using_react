import { useState } from 'react'

function Navbar({ onSearch, placeholder = 'Search for a movie...' }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    if (onSearch) onSearch(trimmed)
  }

  return (
    <header className="mnav">
      <div className="mnav-inner">

        {/* Logo */}
        <a className="mnav-brand" href="/" aria-label="CineSearch home">
          <span className="mnav-mark">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
            </svg>
          </span>
          <span className="mnav-name">CineSearch</span>
        </a>

        {/* Search */}
        <form className="mnav-search" role="search" onSubmit={handleSubmit}>
          <svg className="mnav-search-icon" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>

          <input
            type="search"
            className="mnav-input"
            placeholder={placeholder}
            aria-label="Search movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button type="submit" className="mnav-submit">
            Search
          </button>
        </form>
      </div>

      {/* Scoped styles */}
      <style>{`
        .mnav {
          --mn-bg: #12161f;
          --mn-line: rgba(255, 255, 255, 0.08);
          --mn-amber: #f5b83d;
          --mn-amber-ink: #1b1303;

          position: sticky;
          top: 0;
          z-index: 1030;
          background-color: var(--mn-bg);
          border-bottom: 1px solid var(--mn-line);
          font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
        }
        .mnav *,
        .mnav *::before,
        .mnav *::after {
          box-sizing: border-box;
        }
        .mnav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem 2rem;
          max-width: 1140px;
          margin: 0 auto;
          padding: 0.8rem 1rem;
        }

        /* Brand */
        .mnav-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          flex: 0 0 auto;
          color: #fff;
          text-decoration: none;
        }
        .mnav-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background-color: var(--mn-amber);
          color: var(--mn-amber-ink);
        }
        .mnav-name {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        /* Search */
        .mnav-search {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1 1 auto;
          max-width: 520px;
          margin: 0;
          padding: 4px;
          border: 1.5px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background-color: rgba(255, 255, 255, 0.06);
          transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
        }
        .mnav-search:focus-within {
          border-color: var(--mn-amber);
          background-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 0 4px rgba(245, 184, 61, 0.2);
        }
        .mnav-search-icon {
          flex: 0 0 auto;
          margin-left: 0.9rem;
          color: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }
        .mnav-input {
          flex: 1 1 auto;
          min-width: 0;
          height: 38px;
          padding: 0 0.75rem;
          border: 0;
          background: transparent;
          color: #fff;
          font-family: inherit;
          font-size: 0.98rem;
        }
        .mnav-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        .mnav-input:focus {
          outline: none;
        }
        /* Hide the browser's built-in clear icon so it matches the design */
        .mnav-input::-webkit-search-cancel-button {
          -webkit-appearance: none;
          appearance: none;
        }
        .mnav-submit {
          flex: 0 0 auto;
          height: 38px;
          padding: 0 1.25rem;
          border: 0;
          border-radius: 999px;
          background-color: var(--mn-amber);
          color: var(--mn-amber-ink);
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }
        .mnav-submit:hover {
          background-color: #ffc95c;
        }
        .mnav-submit:active {
          background-color: #e7a82a;
        }

        /* Keyboard focus */
        .mnav-brand:focus-visible,
        .mnav-submit:focus-visible {
          outline: 3px solid var(--mn-amber);
          outline-offset: 3px;
        }

        /* Mobile: brand on top, search full width underneath */
        @media (max-width: 639.98px) {
          .mnav-inner {
            flex-wrap: wrap;
            justify-content: flex-start;
          }
          .mnav-search {
            flex: 1 1 100%;
            max-width: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mnav-search,
          .mnav-submit { transition: none; }
        }
      `}</style>
    </header>
  )
}

export default Navbar