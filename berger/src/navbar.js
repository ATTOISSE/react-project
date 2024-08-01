import 'bootstrap-icons/font/bootstrap-icons.css';

export function NavBar({count}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand offset-1" href="#"> <b> CINAYE BURGER</b></a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Catalogue</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">Statistique</a>
          </li>
        </ul>
      </div>
      <a className="nav-link mx-5 my-1" href="#"><i className="bi bi-cart-dash fs-2"><sup className='text-danger fw-bold '>{count}</sup></i></a>
    </nav>
  )
}