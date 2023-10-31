import "./styles.less"
import Logo from "../../assets/logo.svg"

export function Header(){


    return(
        <header>
             <div className="container">
                <h2><img src={Logo} /></h2>
                <button>Button1</button>
                <button>Button2</button>
            </div>
        </header>
            
    )
}