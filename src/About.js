import image from "./assets/me.jpg";

const About = () => {
  return (
    <main className="About">
      <h1>Minusta</h1>
      <img src={image} alt="Me" height="200px" />
      <p>
        Currently studying Information Technology at Oulu University of Applied Sciences. Especially
        interested in Front- and Backend Development. Already have a vocational qualification in
        Information and Communications Technology as an IT Support Specialist. First computer bought
        in 1985 was a Sinclair Spectrum ZX. Computers, networks, programming have been a hobby ever
        since, but now studying and looking for a job in the industry.
      </p>
    </main>
  );
};

export default About;
