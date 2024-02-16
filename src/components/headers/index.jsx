import Container from '../../shared/container';
import ArchiveIcon from './ArchiveIcon';
import Css3Logo from './Css3Logo';
import Html5 from './Html5';
import JavascriptLogo from './JavascriptLogo';
import ReactLogo from './ReactLogo';
import CV from '../../assets/Akintunde-Adedoyin-Afolabi.pdf';
import GithubIcon from './icons/GithubIcon';
import BehanceIcon from './icons/BehanceIcon';
import EmailIcon from './icons/EmailIcon';
const Header = () => {
  return (
    <header className='w-full h-[100svh] bg-gradient-to-br from-gray-700-0 to-gray-800-0'>
      <Container
        className={
          ' h-full  mx-auto flex flex-col items-center justify-center px-10'
        }
      >
        <article className='text-center max-w-[50rem] select-none'>
          <h1 className='text-[2.4rem] font-sans font-[400]'>
            Akintunde Adedoyin Afolabi
          </h1>

          <p className='font-light leading-6'>
            Introducing Akintunde Adedoyin Afolabi, a talented web and mobile
            developer with a creative flare. I combine technology and aesthetics
            in everything I do, from coding with JavaScript and TypeScript to
            developing smooth experiences with React and React Native to
            bringing creative vision to my work as a brand and graphics
            designer. I'm your one-stop shop for a customized, tech-savvy, and
            aesthetically pleasing digital touch, offering anything from
            creative solutions to smart UI/UX designs. Together, let's improve
            your internet visibility!
          </p>
          <section className='flex items-center gap-4 w-full justify-center'>
            <JavascriptLogo />
            <ReactLogo />
            <Html5 />
            <Css3Logo />
          </section>
          <section className='flex items-center justify-center gap-6   absolute top-10 sm:top-20 center '>
            <a className=' ' href={CV} download={'Akintunde Adedoyin '}>
              <ArchiveIcon />
            </a>
            <hr />
            <a href='https://www.github.com/4cub3'>
              <GithubIcon />
            </a>
            <hr />
            <a href='https://www.behance.net/akintunadedoyi'>
              <BehanceIcon />
            </a>
            <hr />
            <a href='mailto:akintunde_afolabi@yahoo.com'>
              <EmailIcon />
            </a>
          </section>
        </article>
      </Container>
    </header>
  );
};

export default Header;
