function ProjectCard({
  title = 'Proyecto',
  description = 'Descripción del proyecto.',
  image,
  buttonLabel = 'Ver proyecto',
  buttonLink = '#contact',
  imageAlt = 'Project preview'
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <article className="card shadow-sm border-0 h-100">
        {image ? (
          <img src={image} className="card-img-top" alt={imageAlt} />
        ) : null}
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          {buttonLink ? (
            <a href={buttonLink} className="btn btn-outline-primary mt-auto">
              {buttonLabel}
            </a>
          ) : null}
        </div>
      </article>
    </div>
  )
}

export default ProjectCard;
