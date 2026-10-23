import moviesData from '../data/Data'

function Categories({seletedCategory, selectedCategory, setSelectedCategory}) {

  // Supports both spellings of the prop name
  const current = selectedCategory ?? seletedCategory

  const categories = [
    'all',
    ...new Set(moviesData.map((movie) => movie.category.toLowerCase()))
  ]

  return (
    <nav className="cats" aria-label="Movie categories">
      <div className="cats-inner">
        {categories.map((category) => {
          const isActive = category === current
          return (
            <button
              key={category}
              type='button'
              className={`cats-link${isActive ? ' is-active' : ''}`}
              aria-pressed={isActive}
              onClick={()=>setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* Scoped styles */}
      <style>{`
        .cats {
          --ct-ink: #12161f;
          --ct-line: #e2e5eb;
          --ct-amber: #f5b83d;

          background-color: #fff;
          border-bottom: 1px solid var(--ct-line);
          font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
        }
        .cats-inner {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          max-width: 1140px;
          margin: 0 auto;
          padding: 0.85rem 1rem;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .cats-inner::-webkit-scrollbar {
          display: none;
        }
        /* Centers the row when it fits, but still scrolls from the start when it doesn't */
        .cats-inner > :first-child { margin-left: auto; }
        .cats-inner > :last-child { margin-right: auto; }

        .cats .cats-link {
          flex: 0 0 auto;
          padding: 0.5rem 1.1rem;
          border: 1.5px solid var(--ct-line);
          border-radius: 999px;
          background-color: #fff;
          color: var(--ct-ink);
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.2;
          text-transform: capitalize;
          white-space: nowrap;
          cursor: pointer;
          transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .cats .cats-link:hover {
          border-color: var(--ct-ink);
          background-color: #f3f4f7;
        }
        .cats .cats-link:focus-visible {
          outline: 3px solid var(--ct-amber);
          outline-offset: 2px;
        }

        /* Selected category */
        .cats .cats-link.is-active,
        .cats .cats-link.is-active:hover {
          border-color: var(--ct-ink);
          background-color: var(--ct-ink);
          color: #fff;
          font-weight: 600;
        }

        @media (prefers-reduced-motion: reduce) {
          .cats .cats-link { transition: none; }
        }
      `}</style>
    </nav>
  )
}

export default Categories