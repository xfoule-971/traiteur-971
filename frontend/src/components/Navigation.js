import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo.jpg";

const Navigation = () => {

    const links = [
        { to: "/menus", label: "Menus" },
        { to: "/a-propos", label: "A propos" },
        { to: "/contact", label: "Contact" },
    ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bande-color">

        <div className="container">

            {/* LOGO */}
            <NavLink to="/" className="navbar-brand">
                <img
                src={Logo}
                alt="logo traiteur"
                style={{ border: "3px solid #ffc107", width: "120px" }}
                />
            </NavLink>

            {/* bouton mobile */}
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* MENU */}
            <div className="collapse navbar-collapse" id="navbarToggler">

                <ul className="navbar-nav ms-auto align-items-lg-center text-uppercase">

                    {/* ACCUEIL */}
                    <li className="nav-item">
                        <NavLink
                        to="/"
                        className="nav-link text-warning mx-lg-3 survol-menu"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? "bold" : "normal",
                            textDecoration: isActive ? "underline" : "none",
                            textDecorationThickness: isActive ? "3px" : "auto", // épaisseur du underline
                            fontSize: isActive ? "1.1rem" : "1rem",
                        })}
                        >
                            Accueil
                        </NavLink>
                    </li>

                    {/* DROPDOWN EVENEMENTS */}
                    <li className="nav-item dropdown">

                        <NavLink to="/evenement"
                        className="nav-link dropdown-toggle text-warning mx-lg-3 survol-menu"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        >
                            Evènements
                        </NavLink>

                        <ul className="dropdown-menu border-warning bande-color">

                            <li>
                                <NavLink to="/mariage" 
                                className="dropdown-item text-warning survol-menu"
                                style={({ isActive }) => ({
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: isActive ? "underline" : "none",
                                textDecorationThickness: isActive ? "3px" : "auto", // épaisseur du underline
                                fontSize: isActive ? "1.1rem" : "1rem",
                                })}
                                >
                                    Mariages
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/entreprise" 
                                className="dropdown-item text-warning survol-menu"
                                style={({ isActive }) => ({
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: isActive ? "underline" : "none",
                                textDecorationThickness: isActive ? "3px" : "auto", // épaisseur du underline
                                fontSize: isActive ? "1.1rem" : "1rem",
                                })}
                                >
                                    Repas d'affaires
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/fetes" 
                                className="dropdown-item text-warning survol-menu"
                                style={({ isActive }) => ({
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: isActive ? "underline" : "none",
                                textDecorationThickness: isActive ? "3px" : "auto", // épaisseur du underline
                                fontSize: isActive ? "1.1rem" : "1rem",
                                })}
                                >
                                    Soirées privées
                                </NavLink>
                            </li>

                        </ul>
                    </li>

                    {/* AUTRES LIENS */}
                    {links.map((link) => (
                        <li className="nav-item" key={link.to}>
                        <NavLink
                        to={link.to}
                        className="nav-link text-warning mx-lg-3 survol-menu"
                        style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: isActive ? "underline" : "none",
                        textDecorationThickness: isActive ? "3px" : "auto", // épaisseur du underline
                        fontSize: isActive ? "1.1rem" : "1rem",
                        })}
                        >
                            {link.label}
                        </NavLink>
                        </li>
                    ))}

                    {/* BOUTON COMMANDER */}
                    <li className="nav-item ms-lg-4">
                        <NavLink
                        to="/commander"
                        className="btn btn-warning px-4 fw-bold survol-btn"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? "bold" : "normal",
                            backgroundColor: isActive ? "white" : "#ffc107",
                        })}
                        >
                        Commander
                        </NavLink>
                    </li>

                </ul>

            </div>
        </div>

    </nav>
  );
};

export default Navigation;