import Cartwidget from './Cartwidget';

const Navbar = () => {
    return(
      <>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TECNOLAB</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Celulares</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tablets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" role="button">Smart TV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Portatiles</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
          <Cartwidget />
          </form>
        </div>
      </div>
    </nav>
      </>
    )
  }
  
  export default Navbar;