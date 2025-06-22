import logo from "../../assets/img/navlogo.svg"
import "./Header.css"
const Header = () =>{
    return(
        <>
          <nav>
        <div className="nav1">
            <img src={logo} alt="" />
            <a href="#">Save</a>
            <a href="#">Invest</a>
            <a href="#">Stories</a>
            <a href="#">FAQ's</a>
            <a href="#">Resources</a>
        </div>
        <div className="nav2">
            <a href="#">Sign in</a>
            <a href="#">Create free account</a>
        </div>
        <div className="menu">
            <img src="" alt="" />
        </div>
    </nav>
        </>
    )
}
export default Header