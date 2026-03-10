import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import Accueil from "./pages/Accueil";
import Evenement from "./pages/Evenement";
import Menus from "./pages/Menus";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Commander from "./pages/Commander";

import Mariage from "./pages/Mariage";
import Entreprise from "./pages/Entreprise";
import Fete from "./pages/Fete";

import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

import Erreur from "./pages/Erreur";

import Mentions from "./pages/Mentions";
import Confidentialite from "./pages/Confidentialite";
import Cookie from "./pages/Cookie";

const App = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/" element={<Accueil />}/>
                <Route path="/evenement" element={<Evenement />}/>
                <Route path="/menus" element={<Menus />}/>
                <Route path="/a-propos" element={<Apropos />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/commander" element={<Commander />}/>

                <Route path="/mariage" element={<Mariage />}/>
                <Route path="/entreprise" element={<Entreprise />}/>
                <Route path="/fetes" element={<Fete />}/>

                <Route path="/success" element={<Success />}/>
                <Route path="/cancel" element={<Cancel />}/>

                <Route path="*" element={<Erreur />} />

                <Route path="/mentions-legales" element={<Mentions />}/>
                <Route path="/confidentialite" element={<Confidentialite />}/>
                <Route path="/cookie" element={<Cookie />}/>
            </Routes>

        </div>
    );
};
export default App;