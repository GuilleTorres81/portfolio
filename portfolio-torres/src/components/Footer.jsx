function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-1">Built with React and Bootstrap</p>
        <small>© {new Date().getFullYear()} Guillermo Torres</small>
      </div>
    </footer>
  )
}

export default Footer;
