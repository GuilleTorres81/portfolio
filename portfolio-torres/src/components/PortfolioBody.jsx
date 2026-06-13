import Hero from './Hero'
import heroImg from '../assets/hero.png'
import saltaCodeLogo from '../assets/saltacode-dark.png'
import ProjectCard from './ProjectCard'
import JobCard from './JobCard'
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
              title="NutriTurnos"
              description="Sistema de turnos personalizado para consultorios(nutricionista en este caso). Permite gestionar turnos y horarios de atención de manera flexible."
              image={heroImg}
              buttonLabel="Ver proyecto"
              buttonLink="#contact"
            />
            <ProjectCard
              title="Si.Mi.R"
              description="Es un sistema que permite registrar al personal militar que asiste al comedor diariamente, con el fin de llevar un control de las comidas servidas y los costos asociados."
              image={heroImg}
              buttonLabel="Abrir demo"
              buttonLink="#projects"
            />
            <ProjectCard
              title="Prestock"
              description="Es un sistema que gestiona el inventario, y préstamos de elementos de un Centro de Estudiantes. Tambien registra uso de impresiones y entrada y salidas de los encargados de turno"
              image={heroImg}
              buttonLink=""
            />
          </div>
        </div>
      </section>
      <section className="py-5" id="jobs">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="fw-bold">Experiencia laboral</h2>
          </div>
          <JobCard
            logo = {saltaCodeLogo}
            role="Desarrollador Full Stack"
            company="SaltaCode"
            description="Desarrollo y mantenimiento de sistemas y páginas web haciendo uso de Front-end básico, y Django para el backend."
            range="Nov 2023 - May 2025"
            stack={['Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL']}
          />
        </div>
      </section>
    </main>
  )
}

export default PortfolioBody;
