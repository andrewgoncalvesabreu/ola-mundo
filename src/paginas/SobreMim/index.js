import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/minhaFotoNoSobreMim.jpeg"
import { Link } from "react-router-dom";

function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Andrew!
            </h3>

            <img src={fotoSobreMim} alt="Foto do Andrew" className={styles.fotoSobreMim}></img>

            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou estudante de programação, mais focado na parte do Front-End, atualmente estou aprendendo React JS, inclusive, tudo isso aqui está sendo feito com React.
            </p>

            <p className={styles.paragrafo}>
                Bom, eu comecei meus estudos na programação lá no começo de 2023, e de lá pra cá, não parei, pretendo me tornar um dev Front-End, mas com certeza, no futuro, irei aprender mais sobre o backend também.
            </p>

            <p className={styles.paragrafo}>
                "Conheci" a programação de fato pelo canal <Link to={"https://www.youtube.com/@DevemDobro"} style={{color: "purple", textDecoration: 'underline'}} target="_blank">Dev em Dobro</Link>, por meio de um anúncio que me apareceu por conta de um evento deles "Do Zero ao Programador Contratado", e foi aí que comecei a me interessar por programação.
            </p>

            <p className={styles.paragrafo}>
                Na época desse anúncio, eu ainda não tinha um notebook ou um PC para programar, como eu fiquei muito interessado nisso e decidi que ia fazer isso da vida, comprei um notebook.
            </p>

            <p className={styles.paragrafo}>
                Comecei a ver alguns vídeos deles, comecei a ver os eventos deles e tudo mais, como eles faziam mais conteúdo sobre front-end, acabou que segui essa área.
            </p>

            <p className={styles.paragrafo}>
                O começo dos meus estudos, como a maioria dos programadores foi pelo GÊNIO <Link to={"https://www.instagram.com/gustavoguanabara"} target="_blank" style={{textDecoration: "underline"}}>Gustavo Guanabara</Link> do <Link to={"https://www.cursoemvideo.com/"} target="_blank" style={{textDecoration: "underline"}}>Curso Em Vídeo</Link>, foi com ele que aprendi HTML, bastante de CSS, e uma base muito boa do JavaScript.
            </p>

            <p className={styles.paragrafo}>
                Depois que fiz os cursos de HTML, CSS e JavaScript com o Guanabara, eu comecei a minha trajetória na <Link to={"https://www.alura.com.br"} style={{color: 'blue', textDecoration: 'underline'}}>Alura</Link>, que estou até hoje, foi nela que aprendi mais sobre CSS e MUITO sobre JavaScript, agora estou aprendendo React com ela e sei que irei conseguir.
            </p>
        </PostModelo>
    )
}

export default SobreMim;