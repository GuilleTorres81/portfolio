import heroImg from '../assets/hero.png'

function ExampleCard() {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card shadow-sm border-0 h-100">
        <img src={heroImg} className="card-img-top" alt="Project preview" />
        <div className="card-body">
          <h3 className="card-title">Example Project</h3>
          <p className="card-text">
            Esta tarjeta usa Bootstrap como ejemplo. Duplica el componente o añade más tarjetas
            para organizar tu portfolio.
          </p>
          <a href="#contact" className="btn btn-outline-primary">
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  )
}

export default ExampleCard;
