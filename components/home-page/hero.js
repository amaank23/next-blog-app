import Image from 'next/image';
import classes from './hero.module.css'

const Hero = () => {
  return <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/aman.jpg' alt='An image showing Aman' width={300} height={300} />
      </div>
      <h1>Hi, I'm Aman</h1>
      <p>Full Stack Web Developer - blogs related to Javascript you can find on my site</p>
  </section>;
};

export default Hero;
