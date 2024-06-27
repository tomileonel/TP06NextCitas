import Titulo from '../titulo';
import Subtitulo from '../subtitulo';
import Formulario from '../form';
import Citas from '../citas';
import styles from './sytle-module.css'

const Body = ({ setCitas, citas }) => {
  return (
    <div className={styles.body}>
      <Titulo />
      <div className={styles.container}>
        <div className={`${styles['one-half']} ${styles.column}`}>
          <Subtitulo texto="CREAR MI CITA" />
          <Formulario setCitas={setCitas} citas={citas} />
        </div>
        <div className={`${styles['one-half']} ${styles.column}`}>
          <Subtitulo texto="ADMINISTRA TUS CITAS" />
          <Citas setCitas={setCitas} citas={citas} />
        </div>
      </div>
    </div>
  );
}

export default Body;
