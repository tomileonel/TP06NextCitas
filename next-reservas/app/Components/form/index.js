import React from 'react';
import styles from './style.module.css';

const Formulario = ({ setCitas, citas }) => {
  const enviarForm = (e) => {
    e.preventDefault();

    const mascota = e.target.elements.mascota.value.trim();
    const dueno = e.target.elements.dueno.value.trim();
    const fecha = e.target.elements.fecha.value.trim();
    const hora = e.target.elements.hora.value.trim();
    const sintomas = e.target.elements.sintomas.value.trim();

    if (!mascota || !dueno || !fecha || !hora || !sintomas) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const citaExistente = citas.find(
      (cita) =>
        cita.mascota === mascota &&
        cita.fecha === fecha &&
        cita.hora === hora &&
        cita.dueno === dueno
    );
    if (citaExistente) {
      alert('Ya existe una cita agendada para esta mascota en la misma fecha y hora.');
      return;
    }

    const date = Date.now();
    const cita = {
      date,
      mascota,
      dueno,
      fecha,
      hora,
      sintomas,
    };

    if (window.confirm('¿Desea agregar la siguiente cita?')) {
      setCitas((citas) => [...citas, cita]);
    }

    e.target.reset();
  };

  return (
    <form onSubmit={enviarForm} className={styles.formulario}>
      <label htmlFor="mascota">Nombre Mascota</label>
      <input id="mascota" name="mascota" type="text" className="u-full-width" placeholder="Nombre Mascota" />

      <label htmlFor="dueno">Nombre Dueño</label>
      <input id="dueno" name="dueno" type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" />

      <label htmlFor="fecha">Fecha</label>
      <input id="fecha" name="fecha" type="date" className="u-full-width" />

      <label htmlFor="hora">Hora</label>
      <input id="hora" name="hora" type="time" className="u-full-width" />

      <label htmlFor="sintomas">Síntomas</label>
      <textarea id="sintomas" name="sintomas" className="u-full-width"></textarea>

      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
    </form>
  );
};

export default Formulario;