function JobCard({
  logo,
  company = 'Empresa',
  role = 'Cargo',
  description = 'Descripción del puesto.',
  logoAlt = 'Logo de la empresa',
  range = 'Fecha de inicio - Fecha de fin',
  stack = [],
}) {
  return (
    <div className="col-12 mb-4">
      <article className="card shadow-sm border-0">
        <div className="row g-0 align-items-center p-3">
          <div className="col-auto me-3">
            {logo ? (
              <img src={logo} alt={logoAlt} className="img-fluid" style={{ maxWidth: '160px', maxHeight: '160px' }} />
            ) : (
              <div className="bg-light d-flex align-items-around justify-content-center rounded" style={{ width: '160px', height: '160px' }}>
                <span className="text-muted small">Logo</span>
              </div>
            )}
          </div>
          <div className="col">
            <h3 className="h5 mb-0 text-white fw-bold">{company} - {role}</h3>
            <small className="text-white">{range}</small>
            <p className="mt-2 mb-3 card-text">{description}</p>
            <div className="d-flex flex-wrap gap-2">
              {stack.map((tech, index) => (
                <span key={index} className="badge rounded-pill text-bg-success">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default JobCard;
