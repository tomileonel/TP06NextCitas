import React from 'react';
import CardHome from '../CardHome';
import styles from './style.module.css'; 
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import Descripcion from '../Descripcion';

const Home = () => {
  const servicios = [
    {
      title: 'Consulta Veterinaria',
      description: 'Exámenes y diagnósticos completos para tu mascota.',
    },
    {
      title: 'Peluquería Canina',
      description: 'Servicios de grooming y cuidado estético para tu perro.',
    },
    {
      title: 'Alimentación Balanceada',
      description: 'Recomendaciones y ventas de alimentos específicos para cada etapa de vida de tu mascota.',
    },
  ];

  return (
    <div className={styles.body}>
           <Titulo texto="Bienvenidos a VetMax"/>

       <Descripcion texto="En VETMAX nos preocupamos por la salud y bienestar de tus mascotas. Encuentra aquí todo lo que necesitas para su cuidado."></Descripcion> 

      <div>
      <Subtitulo texto="Servicios que ofrecemos" />
  
        <div className="cards-container">
          {servicios.map((servicio, index) => (
            <CardHome key={index} titulo={servicio.title} descripcion={servicio.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
