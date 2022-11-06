import { Link, Navigate } from "react-router-dom";
import { useNavigate} from "react-router-dom";

function Nave() {

  const getEmail = localStorage.getItem("email")
  const getPassword = localStorage.getItem("password")
  const isAdmin = localStorage.getItem("isAdmin");
  const navigate = useNavigate()
  async function logout() {
    localStorage.clear();
  }

  return (
    <>
      {
        !getEmail && !getPassword ?
          (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: "10px" }}>
              <div className="container-fluid">
                <a className="navbar-brand" href="none" style={{ marginLeft: '20px' }}><i className="fa-brands fa-magento"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                  <div className="navbar-nav" >

                    <Link className="nav-link link1" to="/Home" active="true" style={{ marginLeft: "10px" }}><i style={{ marginRight: "4px" }} class="fa-sharp fa-solid fa-house"></i> Home</Link>
                    <Link className="nav-link link1" to="/signup" active="true" style={{ marginLeft: "10px" }}><i style={{ marginRight: "4px" }} class="fa-solid fa-user-plus"></i> SignUp</Link>
                    <Link className="nav-link link3" to="/Login" style={{ marginLeft: "10px" }}><i class="fa-sharp fa-solid fa-right-to-bracket" style={{ marginRight: "4px" }}></i> Login</Link>

                  </div>

                </div>
              </div>
            </nav>
          ) :
          (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: "10px" }}>
              <div className="container-fluid">
                <a className="navbar-brand" href="none" style={{ marginLeft: '20px' }}><i className="fa-brands fa-magento"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                  <div className="navbar-nav" >

                    <Link className="nav-link link1" to="/Home" active="true" style={{ marginLeft: "10px" }}><i style={{ marginRight: "4px" }} class="fa-sharp fa-solid fa-house"></i> Home</Link>
                    <Link className="nav-link link2" to="/Complaints" style={{ marginLeft: "10px" }}><i class="fa-sharp fa-solid fa-file" style={{ marginRight: "4px" }}></i> Complaints</Link>
                    {
                    !isAdmin?(
                    <Link className="nav-link link2" to="/newcomp" style={{ marginLeft: "10px" }}><i class="fa-solid fa-comments" style={{ marginRight: "4px" }}></i> New Complaint</Link>
                    ):(
                      null
                    )
                    }
                    <Link className="nav-link link2" onClick={logout} to="/login" style={{ marginLeft: "10px" }}><i class="fa-sharp fa-solid fa-right-to-bracket" style={{ marginRight: "4px" }}></i> Logout</Link>

                  </div>

                </div>
              </div>
            </nav>
          )
      }
    </>
  );
}

export default Nave;