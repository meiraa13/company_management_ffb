import { CompanyContext } from "../../providers/CompanyContext"
import "../ModalCreate/styles.less"
import { useContext } from "react"


export function ModalSearch(){
    const {setModalSearch,  modalSearch } = useContext(CompanyContext)


    return (
         <div>
              <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Informações da empresa</h3>
                        <button className="close-button" onClick={()=>setModalSearch(null)}>X</button>
                    </div>
                    <form className="modal-form"  >
                        <div className="div-form">
                            <label htmlFor="client-name">Nome do cliente</label>
                            <input id="client-name" defaultValue={modalSearch?.clientName} disabled ></input>
                        </div>
                            

                        <div className="div-form">
                            <label htmlFor="email">Email</label>
                            <input id="email" defaultValue={modalSearch?.email} disabled ></input>
                        </div>

                        <div className="div-form">
                            <label htmlFor="password">Senha</label>
                            <input id="password" defaultValue={modalSearch?.password} disabled ></input>
                        </div>

                        <div className="div-form">
                            <label htmlFor="company-name">Nome da empresa</label>
                            <input id="company-name" defaultValue={modalSearch?.companyName} disabled></input>
                        </div>

                        <div className="div-form">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input id="cnpj" defaultValue={modalSearch?.cnpj} disabled></input>
                        </div>

                        <div className="div-form">
                            <label htmlFor="cep">CEP</label>
                            <input id="cep" defaultValue={modalSearch?.cep} disabled></input>
                        </div>

                        <div className="div-form">
                            <label htmlFor="address">Endereço</label>
                            <input id="address" defaultValue={modalSearch?.address} disabled ></input>
                        </div>
                
                        <div className="div-form">
                            <label htmlFor="address-number">Número</label>
                            <input id="address-number" defaultValue={modalSearch?.addressNumber} disabled></input>
                        </div>

                        <div className="div-form">
                            <label htmlFor="phoneNumber">Telefone</label>
                            <input id="phoneNumber" defaultValue={modalSearch?.phoneNumber} disabled ></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}