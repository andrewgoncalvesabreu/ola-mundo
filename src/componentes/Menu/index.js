import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/" >
                    Início
                </MenuLink>
                <MenuLink to="/sobremim" >
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu

//O <Link></Link> no react-router-dom é basicamente o que a tag "a" faz no HTML só que com melhorias e não fazendo a página recarregar, e "to" que está ali como atributo faz a mesma função do "href", 