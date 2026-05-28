import Hero from './Hero'
import heroImg from '../assets/hero.png'
import ExampleCard from './ExampleCard'
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
            <ExampleCard />
            <ExampleCard />
            <ExampleCard />

          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioBody;
