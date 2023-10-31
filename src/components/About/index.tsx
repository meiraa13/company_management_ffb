import { useContext } from "react"
import "./styles.less"
import { CompanyContext } from "../../providers/CompanyContext"
import { ModalCreate } from "../ModalCreate"

export function About(){
    const {setModalCreate, modalCreate} = useContext(CompanyContext)

    return(
        <section className="section-about">
            <h2>Crie e controle informações da sua empresa de um jeito fácil e intuitivo!</h2>
            <button onClick={()=>setModalCreate(true)}>Nova Empresa</button>
            {modalCreate && <ModalCreate />}
        </section>
    )
}