"use client";
import React from 'react';
import Personas from '../Personas.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/page.module.css';

export default function Home() {
  const personasMayoresDe35 = Personas.filter(persona => {
    const edad = parseInt(persona.edad);
    return !isNaN(edad) && edad > 35;
  });

  const edades = Personas
    .map(persona => parseInt(persona.edad, 10))
    .filter(edad => !isNaN(edad)); 
  const edad_max = edades.length > 0 ? Math.max(...edades) : 0;
  const edad_min = edades.length > 0 ? Math.min(...edades) : 0;
  const recuento = personasMayoresDe35.length;

  return (
    <main className={styles.main}>
      <h1>Listado de Personas Mayores de 35:</h1>
      <div className={styles.cardsContainer}>
        {personasMayoresDe35.map((persona, index) => (
          <div key={index} className={styles.card}>
            <h2>{persona.nombre} {persona.apellido}</h2>
            <p>Email: {persona.email}</p>
            <p>Edad: {persona.edad}</p>
          </div>
        ))}
      </div>
      <p>Total de personas mayores de 35: {recuento}</p>
      <p>Edad máxima entre todas las personas: {edad_max}</p>
      <p>Edad mínima entre todas las personas: {edad_min}</p>
    </main>
  );
}
