
import github from '../img/github-brands.svg';
import link from '../img/external-link-alt-solid.svg';

const FeaturedProjects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='section-title' >
        Some Things I've Built
      </h2>

      <div className='section-content'>

        <div
          className='featured-project'

        >
          <h3>Laboratory 8</h3>
          <p className='section-text'>
            A web app that Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed vitae lacinia dolor. Vestibulum ut elit eget sem egestas
            vehicula. Curabitur a feugiat mauris. Ut imperdiet facilisis libero
            ac faucibus.
          </p>
          <div className='technologies'>
            <p>React</p>
            <p>Styled Components</p>
          </div>
          <div className='project-social'>
            <a href='/'>
              <img src={github} alt='' />
            </a>
            <a href='/'>
              <img src={link} alt='' />
            </a>
          </div>
        </div>



        <div
          className='featured-project'

        >
          <h3>6th Lab</h3>
          <p className='section-text'>
            A web app that Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed vitae lacinia dolor. Vestibulum ut elit eget sem egestas
            vehicula. Curabitur a feugiat mauris. Ut imperdiet facilisis libero
            ac faucibus.
          </p>
          <div className='technologies'>
            <p>React</p>
            <p>CSS3</p>
 
          </div>
          <div className='project-social'>
            <a href='/'>
              <img src={github} alt='' />
            </a>
            <a href='/'>
              <img src={link} alt='' />
            </a>
          </div>
        </div>



        <div
          className='featured-project'

        >
          <h3>Lab work 7</h3>
          <p className='section-text'>
            A web app that Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed vitae lacinia dolor. Vestibulum ut elit eget sem egestas
            vehicula. Curabitur a feugiat mauris. Ut imperdiet facilisis libero
            ac faucibus.
          </p>
          <div className='technologies'>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>React</p>
          </div>
          <div className='project-social'>
            <a href='/'>
              <img src={github} alt='' />
            </a>
            <a href='/'>
              <img src={link} alt='' />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
