import moviesData from '../data/Data'

function Categories() {

  const uniqueCategories = [];

  moviesData.forEach((movie) => {
    if (!uniqueCategories.includes(movie.category)) {
      uniqueCategories.push(movie.category);
    }
  });

  return (
    <nav className="cats" aria-label="Movie categories">
      <div className="cats-inner">
        {uniqueCategories.map((category, index) => (
          <a key={index} href={`/categories/${category}`} className="cats-link">
            {category.replaceAll('-', ' ').toUpperCase()}
          </a>
        ))}
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
          justify-content: center;
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

        .cats .cats-link {
          flex: 0 0 auto;
          padding: 0.5rem 1.1rem;
          border: 1.5px solid var(--ct-line);
          border-radius: 999px;
          background-color: #fff;
          color: var(--ct-ink);
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.2;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .cats .cats-link:hover {
          border-color: var(--ct-ink);
          background-color: var(--ct-ink);
          color: #fff;
        }
        .cats .cats-link:active {
          background-color: #262c3a;
        }
        .cats .cats-link:focus-visible {
          outline: 3px solid var(--ct-amber);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .cats .cats-link { transition: none; }
        }
      `}</style>
    </nav>
  )
}

export default Categories