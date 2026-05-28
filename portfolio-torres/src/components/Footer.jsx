function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-1">Desarrollado con React y Vite</p>
        <small>© {new Date().getFullYear()} Guillermo Torres</small>
      </div>
    </footer>
  )
}

export default Footer;
