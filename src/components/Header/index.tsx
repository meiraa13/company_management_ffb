import "./styles.less"
import Logo from "../../assets/logo.svg"



export function Header(){

    return(
        <header>
             <div className="container div-header">
                <h2><img src={Logo} /></h2>
                <div className="div-header-info">
                    <p>Quem somos</p>
                    <p>Solução</p>
                    <p>Login</p>
                    <p>Blog</p>
                    <p>Contato</p>
                    <button>Cadastre-se no app</button>
                </div>
            </div>
        </header>
            
    )
}