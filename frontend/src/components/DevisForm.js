import { useState } from "react";
import { sendDevis } from "../services/api";

const DevisForm = () => {
    const [formData, setFormData] = useState({
        firstname:"",
        name:"",
        firm:"",
        email:"",
        phone:"",
        message:"",
        prestations:"",
        formules:"",
        lieu:"",
        date:"",
        budget:"",
        adult:"",
        teen:""
    });

    const handleChange = (e) => {

        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await sendDevis(formData);

        alert("Demande de devis envoyée");

    };


    return (
        <div className="col md-8 bg-secondary rounded-2">
    
            <div className="d-flex flex-column justify-content-between gap-5 p-4">

                <div>
                    <h3 className="text-warning d-inline-block border-bottom border-warning border-4 pb-2">
                        Formulaire de demande de devis
                    </h3>
                </div>

                <form className="row g-3" onSubmit={handleSubmit}>

                    <div className="col-md-6">
                        <input
                        type="text"
                        name="firstname"
                        placeholder="Votre prénom"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-12">
                        <input
                        type="text"
                        name="firm"
                        placeholder="Nom de votre entreprise"
                        className="form-control"
                        onChange={handleChange}
                        />
                    </div>
                   
                    <div className="col-12">
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-12">
                        <input
                        type="tel"
                        name="phone"
                        placeholder="Téléphone"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-12">
                        <textarea
                        name="message"
                        placeholder="Quel type d'évènement. Donnez un maximun d'infos..."
                        rows="15"
                        className="form-control"
                        onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6">
                        <select 
                        className="form-control" 
                        id="exampleFormControlSelect1" 
                        name="prestations" 
                        onChange={handleChange}
                        required>
                            <option value="" disabled selected>Prestation souhaitée</option>
                            <option value="mariage">Mariage</option>
                            <option value="repas">Repas d'affaire</option>
                            <option value="soiree">Soirée privée</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <select 
                        className="form-control" 
                        id="exampleFormControlSelect1" 
                        name="formules" 
                        onChange={handleChange}
                        required>
                            <option value="" disabled selected>formule souhaitée</option>
                            <option value="cocktail">Cocktail</option>
                            <option value="repas">Repas à l'assiette</option>
                            <option value="buffet">Buffet</option>
                            <option value="livraison">Livraison de repas</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <input
                        type="text"
                        name="lieu"
                        placeholder="Votre lieu de fête"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                        type="date"
                        name="date"
                        placeholder="Votre date"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                        type="number"
                        name="budget"
                        placeholder="Votre Budget k€"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                        type="number"
                        name="adult"
                        placeholder="Nombre d'adultes"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                        type="number"
                        name="teen"
                        placeholder="Nombre d'enfants"
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                    </div>
                    
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label" for="invalidCheck">
                                J'accepte d'être recontacté
                            </label>
                            <div className="invalid-feedback">
                                Vous devez acceptez pour valider
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-warning w-100 text-light fw-semibold survol-btn" type="submit">Demander un devis</button>
                    </div>
                </form>

            </div>
            
        </div>
    );
};
export default DevisForm;