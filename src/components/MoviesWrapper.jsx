import './MoviesWrapper.css';
import moviesData from '../data/Data';

function MoviesWrapper(){
    
    return(
      <>
      <section className='movies'>
        <div className='movies-grid'>
           {moviesData.map((movie) => (
            <article key={movie.id} className='movie-card'>
              <div className='movie-poster'>
                <img src={movie.imgsrc} alt={movie.title} className='movie-img' loading='lazy' />
                <span className='movie-category'>{movie.category}</span>
              </div>

              <div className='movie-info'>
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