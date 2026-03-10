
const API_URL = "http://localhost:4000/api";

export const sendContact = async (data) => {

    const response = await fetch(`${API_URL}/contact`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(data)

    });

    return response.json();

};


export const sendDevis = async (data) => {

    const response = await fetch(`${API_URL}/devis`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(data)

    });

    return response.json();

};


export const createPayment = async (amount, description) => {

    const response = await fetch(`${API_URL}/payment/create-session`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({ amount, description })

    });

    return response.json();

};
