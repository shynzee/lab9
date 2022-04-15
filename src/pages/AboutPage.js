import about from '../img/drawkit-support-woman-colour.svg';
import caretright from '../img/caret-right-solid.svg';

const AboutPage = () => {
  return (
    <section className='about-page' id='about'>
      <div className='section-center'>
        <h2
          className='section-title'

        >
          About Me
        </h2>
        <div className='section-content'>
          <img src={about} alt='' />
          <p className='section-text'>
              Donec rutrum vulputate odio at mollis. Fusce viverra tincidunt velit non fringilla.
            <br />
            Sed porttitor tortor arcu, sed vulputate erat tincidunt in. Maecenas et tortor nec lectus bibendum semper.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            lacinia dolor. Vestibulum ut elit eget sem egestas vehicula.
            Curabitur a feugiat mauris. Ut imperdiet facilisis libero ac
            faucibus.
            <br />
            Here are a few technologies I've been working with:
          </p>

          <div className='technologies'>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>HTML5</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>CSS3</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>JavaScript</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
