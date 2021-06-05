import React from "react";

const todoTitle = "Call Family";
const todoDesc = "This is a card section for todo list items. From here you can get the proper idea."
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card() {
    return <div className="card">
        <h3 className="cardTitle">{todoTitle}</h3>
        <p className="cardDesc">{todoDesc}</p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
    </div>
}

export default Card;