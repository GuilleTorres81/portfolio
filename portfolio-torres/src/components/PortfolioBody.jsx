import Hero from './Hero'
import heroImg from '../assets/hero.png'
import ExampleCard from './ExampleCard'

function PortfolioBody() {
  return (
    <main className="flex-grow-1">
      <Hero />
      <section className="py-5" id="projects">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h2 className="fw-bold">Proyectos recientes</h2>
              <p className="text-muted mb-0">Una tarjeta de ejemplo para que puedas replicar y personalizar.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <ExampleCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioBody;
