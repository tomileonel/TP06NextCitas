import Titulo from '../titulo';
import Subtitulo from '../subtitulo';
import Formulario from '../form';
import Citas from '../citas';
import styles from './style.module.css';

const Body = ({ setCitas, citas }) => {
  return (
    <div className={`body ${styles['custom-body']}`}> {/* Aplica la clase de estilos locales y la clase externa */}
      <Titulo />
      <div className='container'>
        <div className={`one-half column`}>
          <Subtitulo texto="CREAR MI CITA" />
          <Formulario setCitas={setCitas} citas={citas} />
        </div>
        <div className={`one-half column`}>
          <Subtitulo texto="ADMINISTRA TUS CITAS" />
          <Citas setCitas={setCitas} citas={citas} />
        </div>
      </div>
    </div>
  );
};

export default Body;
