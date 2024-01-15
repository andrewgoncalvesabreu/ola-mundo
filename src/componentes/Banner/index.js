import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/MyPhoto.jpg'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Andrew Gonçalves Abreu, estudando para me tornar um Dev Front-end, principalmente pelos cursos da <Link to={'https://www.alura.com.br/'} style={{color: '#175BAF'}}>Alura</Link>.
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}></img>

                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto de Andrew'></img>
            </div>
        </div>
    )
}

export default Banner;