import '../css/hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="code-grid-bg" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name" id="heroName">
            <span className="name-prefix">dev</span>
            <span className="name-operator">=</span>
            <span className="name-value">Guillermo</span>
            <span className="name-suffix">;</span>
          </h1>

          <div className="hero-title">
            <span className="title-prefix">//</span>
            <span className="title-text">Desarrollador Full Stack</span>
          </div>

          <p className="hero-description">
            Desarrollador apasionado que crea experiencias digitales excepcionales con tecnologías modernas.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Contacto
            </a>
            <a href="#projects" className="btn btn-outline-secondary">
              <i className="fas fa-code"></i> Proyectos
            </a>
          </div>

          <div className="hero-social">
            <a href="#" className="social-icon" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-icon" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="profile-image-glow"></div>
            <div className="profile-image-frame">
              <div className="profile-image" id="profileImage">
                <div className="profile-placeholder">
                  <i className="fas fa-code"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
