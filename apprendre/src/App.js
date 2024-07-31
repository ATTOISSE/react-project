import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, RouterProvider,NavLink, createBrowserRouter } from "react-router-dom";
import AnimalPage from './page/animalPage';
import RacePage from './page/racePage';



const router = createBrowserRouter([
    {
      path:'/',
      element: <Root />,
      errorElement:<PageError />, 
      children:[
        {
          path:'race',
          element: <RacePage />
        },
        {
          path:'',
          element: <AnimalPage />
        }
      ]
    }
])


function PageError() {
  return <>
    <div className="alert alert-danger">
        <h1>Page n'existe pas 404</h1>
    </div>
  </>
}

function Root() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/" className="navbar mx-3 ">Animal</NavLink>
        <NavLink to="/race" className="navbar">Race</NavLink>
      </div>
    </div>
  </div>
</nav>
  <div>
    <Outlet />
  </div>
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App