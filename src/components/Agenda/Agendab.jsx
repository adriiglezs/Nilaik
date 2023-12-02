import React, { useState } from 'react';
import style from './Agendab.module.css';

function Agendab({ iconoContac, marcame, name, occupation, phoneNumber, email, nationality, country, address, expandedCard, setExpandedCard }) {
  const isExpanded = expandedCard === name;

  const toggleExpand = () => {
    if (isExpanded) {
      setExpandedCard(null); // Contraer si ya está expandida
    } else {
      setExpandedCard(name); // Expandir si no está expandida
    }
  };

  return (
    <div className={`${style.card} ${isExpanded ? style.expanded : ''}`} onClick={toggleExpand}>
      <img src={iconoContac} alt={name} />
      <p className={style.heading}>
        <span>{name}</span>
        <br />
        <span>{marcame}</span>
      </p>
      {isExpanded && (
        <>
          <p>
            Occupation: {occupation}
          </p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Email: {email}</p>
          <p>Nationality: {nationality}</p>
          <p>Country: {country}</p>
          <p>Address: {address}</p>
        </>
      )}
    </div>
  );
}

export default Agendab;
