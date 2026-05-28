import Hero from './Hero'
import heroImg from '../assets/hero.png'
import ProjectCard from './ProjectCard'
import StackGrid from './StackGrid'

function PortfolioBody() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <main className="flex-grow-1">
      <Hero />
      <section className="py-5" id="myStack">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="fw-bold">Mi stack</h2>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <StackGrid />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" id="projects">
        <div className="container">
          <div className="row align-items-center">
              <h2 className="fw-bold">Proyectos recientes</h2>
          </div>
          <div className="row">
            <ProjectCard
              title="Portfolio personal"
              description="Diseño y desarrollo de un portafolio moderno con React y Bootstrap."
              image={heroImg}
              buttonLabel="Ver proyecto"
              buttonLink="#contact"
            />
            <ProjectCard
              title="App de ejemplo"
              description="Una segunda tarjeta reutilizable para mostrar otro proyecto o una demo."
              image={heroImg}
              buttonLabel="Abrir demo"
              buttonLink="#projects"
            />
            <ProjectCard
              title="Proyecto rápido"
              description="Puedes agregar más tarjetas con el mismo componente sin repetir estructura."
              image={heroImg}
              buttonLink=""
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioBody;
