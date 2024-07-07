"use client"
import React, { useState, useEffect } from "react";
import styles from './style.module.css';
import Body from '../Body';

function ReservarCitas() {
  const [citas, setCitas] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const citasGuardadas = JSON.parse(localStorage.getItem('citas'));
      if (citasGuardadas) {
        setCitas(citasGuardadas);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
  }, [citas]);

  return (
    <div className="App">
      <Body setCitas={setCitas} citas={citas || []} />
    </div>
  );
}

export default ReservarCitas;
