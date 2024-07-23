import SearchButtonPannel from "./../components/Header/SearchButtonPannel/index.js";
import logo from "../../public/img/logo.png"
import { Outlet } from "react-router-dom";
import { AuthData } from "../../utils/authUser.js";
import { useNavigate } from "react-router-dom";

const Root = () => {
    const { user } = AuthData();
    const { logout } = AuthData();
    const navigate = useNavigate();

    const doLogout = async (e) => {
        try {
            e.preventDefault();
            logout();
            navigate("/")
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <nav id="menu" aria-label="Menu principal" className="header__nav">
                <ul className="header__nav__ul">
                    <li className="header__nav__li">
                        <a href="/" className="header__nav__link" aria-label="retour vers la page d'accueil">
                            <img src={logo} alt="Logo de Pet Foster Connect" className="header__nav__img" />
                        </a>
                    </li>
                    <SearchButtonPannel />
                    {user.isAuthenticated && <span className="nav__links"><a href="/tableau_de_bord">{user.name}</a></span>}
                    {!user.isAuthenticated && <span className="nav__links "><a href="/inscription">Inscription</a></span>}
                    {!user.isAuthenticated && <span className="nav__links nav__links__pad"><a href="/connexion">Connexion</a></span>}
                    {user.isAuthenticated && <button onClick={doLogout}>Logout</button>}
                </ul>
            </nav>
            <Outlet />
        </>
    )

}

export default Root;
