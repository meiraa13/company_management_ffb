import "./styles.less"
import { ICompany } from "../../providers/CompanyContext"

interface ICompanyProps {
    company:ICompany
}

export function CompanyCard({company}:ICompanyProps){

    return(
            <li>
                <h3>Cliente: {company.clientName}</h3>
                <p>Empresa: {company.companyName}</p>
                <p>CNPJ: {company.cnpj}</p>
                <div>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </li>
    )
}