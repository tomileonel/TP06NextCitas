import Titulo from '../Titulo';
import Descripcion from '../Descripcion';
import FormContacto from '../FormContacto'
import styles from './style.module.css';
    
const Ayuda = () => {
  return (
    <div className={styles.container}>
      <Titulo texto="Contactanos" />
      <Descripcion texto="Si tienes alguna duda de nuestros servicios o buscas darle un fantastico corte a tu canino no dudes en llamarnos." />
      <FormContacto />
    </div>
  );
};

export default Ayuda;
