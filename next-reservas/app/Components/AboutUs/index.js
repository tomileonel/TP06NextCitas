import styles from './style.module.css';
import CardMiembro from '../CardMiembro'
import Titulo from '../Titulo';

const AboutUs = () => {
  const Miembros = [
    {id:1, name: 'Tomás', role: 'Veterinario', bio: 'Con más de dos décadas de dedicación a la salud animal, este veterinario combina experiencia y pasión en cada consulta y procedimiento, asegurando el bienestar y la felicidad de todas las mascotas que atiende.', photo: 'https://peru21.pe/resizer/6j3QGQehw-G0dKWryWTfYn-Kn1M=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6RDFP4F6QNCN7FYPLOTLM2IQ5M.jpg' },
    {id:2, name: 'Noah', role: 'Peluquero Canino', bio: 'Con habilidad experta y dedicación, este peluquero canino ha perfeccionado el arte de embellecer a nuestros amigos de cuatro patas, asegurando que cada perro luzca su mejor versión con amor y cuidado profesional.', photo: 'https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/03/patricio-estrella-serie-nickelodeon.jpg?fit=1200%2C625&ssl=1' },
  ];

  return (
    <div className={styles.aboutUs}>
    <Titulo texto="Nuestro Equipo"/>
    <div className={styles.center}>
      <div className={styles.team}>
        {Miembros.map(member => (
          <CardMiembro key={member.id}  member={member} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default AboutUs;