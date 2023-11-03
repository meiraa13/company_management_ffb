import { useContext } from "react"
import { CompanyCard } from "../CompanyCard"
import "./styles.less"
import { CompanyContext } from "../../providers/CompanyContext"
import { ModalDelete } from "../ModalDelete"
import { ModalUpdate } from "../ModalUpdate"

export function CompanyList(){
    const {companies, modalDelete, modalUpdate } = useContext(CompanyContext)

    return(
        <section className="section-company">
          {modalDelete && <ModalDelete />}
          {modalUpdate && <ModalUpdate />}
            <ul>
              {
                companies.length >0 ?
                companies.map((company)=>(
                    <CompanyCard key={company.id} company={company} />
                ))
                :<h3 className="empty-db">Você ainda não possui empresas registradas, clique no botão para cadastrar</h3>
              }
            </ul>
        </section>
    )
}