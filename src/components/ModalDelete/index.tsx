import { CompanyContext } from "../../providers/CompanyContext"
import "../ModalCreate/styles.less"
import { useContext } from "react"

export function ModalDelete(){
    const {setModalDelete, deleteCompany, modalDelete} = useContext(CompanyContext)


    return(
        <div>
              <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Exclusão</h3>
                        <button className="close-button" onClick={()=>setModalDelete(null)} >X</button>
                    </div>
                    <div className="delete-modal-div">
                        <p>Tem certeza que deseja deletar essa empresa?</p>
                        <button onClick={()=>deleteCompany(modalDelete?.id!)}>Sim</button>
                    </div>
                </div>
            </div>

        </div>
    )
}