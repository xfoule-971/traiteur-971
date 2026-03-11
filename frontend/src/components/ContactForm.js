import { useState } from "react";
import { sendContact } from "../services/api";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname:"",
        name:"",
        firm:"",
        email:"",
        message:""
    });

    const handleChange = (e) => {

        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await sendContact(formData);

        alert("Message envoyé");

    };

    return (
        <div className="col md-8 bg-secondary rounded-2">
    
            <div className="d-flex flex-column justify-content-between gap-5 p-4">

                <div>
                    <h3 className="text-warning fw-bold d-inline-block border-bottom border-warning border-4 pb-2">
                        Formulaire de contact
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
                        <textarea
                        name="message"
                        placeholder="Quel type d'évènement. Donnez un maximun d'infos..."
                        rows="15"
                        className="form-control"
                        onChange={handleChange}
                        />
                    </div>
                    
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label" htmlFor="invalidCheck">
                                J'accepte d'être recontacté
                            </label>
                            <div className="invalid-feedback">
                                Vous devez acceptez pour valider
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-warning w-100 fw-semibold survol-btn" type="submit">Envoyer</button>
                    </div>
                </form>

            </div>
            
        </div>
    );
};
export default ContactForm;