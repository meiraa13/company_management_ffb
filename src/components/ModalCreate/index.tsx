import { useContext } from "react"
import "./styles.less"
import { CompanyContext } from "../../providers/CompanyContext"

export function ModalCreate(){
    const {setModalCreate} = useContext(CompanyContext)

    return(
        <div className="div-modal">
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Cadastro</h3>
                        <button className="close-button" onClick={()=>setModalCreate(false)} >X</button>
                    </div>
                    <form  >
                        <div className="div-form">
                            <label htmlFor="fullname">Nome do cliente</label>
                            <input id="fullname" ></input>
                            <p></p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Email</label>
                            <input id="email"></input>
                            <p></p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Senha</label>
                            <input id="email"></input>
                            <p></p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Nome da empresa</label>
                            <input id="email"></input>
                            <p></p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">CNPJ</label>
                            <input id="email"></input>
                            <p></p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">CEP</label>
                            <input id="email"></input>
                            <p></p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Endereço</label>
                            <input id="email"></input>
                            <p></p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Número</label>
                            <input id="email"></input>
                            <p></p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="phoneNumber">Telefone</label>
                            <input id="phoneNumber" ></input>
                            <p></p>
                        </div>

                        <button className="btn-create">REGISTRAR EMPRESA</button>
                    </form>
                </div>
            </div>
        </div>
    )

                       
                        

}