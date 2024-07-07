import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import Formulario from '../FormCitas';
import Citas from '../Citas';
import styles from './style.module.css';

const Body = ({ setCitas, citas }) => {
  return (
    <div className={`body ${styles['custom-body']}`}> 
            <Titulo texto="ADMINISTRADOR DE PACIENTES"/>

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
