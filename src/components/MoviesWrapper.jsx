import './MoviesWrapper.css';
import moviesData from '../data/Data';

function MoviesWrapper({selectedCategory}){
  const filteredMovies = selectedCategory === 'all' ?
    moviesData : 
    moviesData.filter((movie) =>{
      return movie.category.toLowerCase() === selectedCategory
    })
    
    return(
      <>
      <section className='movies'>
        <div className='movies-grid'>
           {filteredMovies.slice().reverse().map((movie) => (
            <article key={movie.id} className='movie-card'>
              <div className='movie-poster'>
                <img src={movie.imgsrc} alt={movie.title} className='movie-img' loading='lazy' />
                <span className='movie-category'>{movie.category}</span>
              </div>

              <div className='movie-info'>
                {movie.publishedDate && (
                  <div className='movie-date'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                      <rect x='1.75' y='3' width='12.5' height='11' rx='2.25' />
                      <path d='M1.75 6.75h12.5M5 1.5v3M11 1.5v3' />
                    </svg>
                    <span>{movie.publishedDate}</span>
                  </div>
                )}

                <h3 className='movie-title' title={movie.title}>{movie.title}</h3>
                <a
                  href={movie.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='movie-btn'
                >
                  Download Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      </>
    );
  }

  export default MoviesWrapper;