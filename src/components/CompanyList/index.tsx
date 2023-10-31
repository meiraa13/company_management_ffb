import { useContext } from "react"
import { CompanyCard } from "../CompanyCard"
import "./styles.less"
import { CompanyContext } from "../../providers/CompanyContext"

export function CompanyList(){
    const {company, setCompany} = useContext(CompanyContext)

    return(
        <section className="section-company">
            <ul>
              {
                company.length >0 ?
                company.map((company)=>(
                    <CompanyCard key={company.id} company={company} />
                ))
                :<h2>ainda não possui empresas cadastradas</h2>
              }
            </ul>
        </section>
    )
}