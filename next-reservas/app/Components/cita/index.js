import React from 'react';
import styles from './style.module.css'; 


const Cita = ({ mascota, dueno, fecha, hora, sintomas, date, setCitas, citas }) => {
  const eliminarCita = () => {
    if (window.confirm("¿Está seguro de eliminar la cita?")) {
      const nuevasCitas = citas.filter(cita => cita.date !== date);
      setCitas(nuevasCitas);
    }
  }

  return (
    <div className={styles.cita}>
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueno}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button className={`${styles.button} ${styles.eliminar} u-full-width`} onClick={eliminarCita}>Eliminar ×</button>
    </div>
  );
}

export default Cita;
