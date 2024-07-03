"use client"

import styles from './style.module.css';
import Body from '../body';
import { useState } from "react";

function ReservarCitas() {

  const [citas, setCitas] = useState([
    {
      date: '1',
      mascota: 'Luna',
      dueno: 'Juan',
      fecha: '2024-04-17',
      hora: '10:00',
      sintomas: 'Dolor de estómago'
    },
    {
      date: '2',
      mascota: 'Max',
      dueno: 'María',
      fecha: '2024-04-18',
      hora: '15:30',
      sintomas: 'Fiebre y tos'
    },
    {
      date: '3',
      mascota: 'Mario',
      dueno: 'Bros',
      fecha: '2024-04-18',
      hora: '15:30',
      sintomas: 'Extraña a luigy'
    }
  ]
)
  

  return (
    <div className="App">
      <Body setCitas={setCitas} citas={citas} />
    </div>
  );
}



export default ReservarCitas;
