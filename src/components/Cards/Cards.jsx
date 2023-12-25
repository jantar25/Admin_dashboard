import React from "react";

import Card from "./Card/Card";
import "./Cards.css";

const Cards = ({ cardItems }) => {
  return (
    <div className="cards-container">
      {cardItems.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
