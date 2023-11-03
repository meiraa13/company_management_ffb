import "./styles.less"
import { CompanyContext, ICompany } from "../../providers/CompanyContext"
import { useContext } from "react"
import { RiEditFill, RiDeleteBin6Fill } from "react-icons/ri"

interface ICompanyProps {
    company:ICompany
}

export function CompanyCard({company}:ICompanyProps){
    const { setModalDelete, setModalUpdate } = useContext(CompanyContext)

    return(
            <li>
                <h3>Cliente: {company.clientName}</h3>
                <p>Empresa: {company.companyName}</p>
                <p>CNPJ: {company.cnpj}</p>
                <div>
                    <button onClick={()=>setModalUpdate(company)}><RiEditFill size="20"/></button>
                    <button onClick={()=>setModalDelete(company)}><RiDeleteBin6Fill  size="20" /></button>
                </div>
            </li>
    )
}