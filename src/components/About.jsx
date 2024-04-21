import Heading from "./Heading";

const About = () => {
  return (
    <div
      id="about"
      className="md:px-[6vw] sm:px-[4vw] px-[1rem] h-[100dvh] relative overflow-hidden grid place-items-center overflow-y-scroll no-scrollbar"
    >
      <div className="text md:w-3/4  bg-btn sm:px-12 sm:py-6 px-6 py-8 rounded-xl ">
        <p className="text-text text-center mx-auto ">
          Hello! I'm Mohit(Ahmed) Kushwah, A web developer. At the age of 20, I
          have already gained valuable experience in web development and design.
          I am passionate about creating engaging and user-friendly websites.
          With my skills in both web development and design, I offer a versatile
          skill set. I am proficient in HTML, CSS, and JavaScript, and I have
          experience working with frameworks like TailwindCSS, ReactJS and
          ExpressJS. This allows me to bring ideas to life by seamlessly
          blending functionality and aesthetics. Continual learning is important
          to me, as I stay up to date with the latest industry trends and
          technologies. This ensures that I can leverage the most effective
          tools and techniques in my projects. I am excited about the
          opportunity to collaborate on web development projects that allow me
          to showcase my skills and contribute to the success of businesses and
          individuals alike.
        </p>
      </div>
      <Heading heading={"about me"} />
    </div>
  );
};

export default About;
