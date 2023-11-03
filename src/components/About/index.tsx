import { useContext } from "react"
import "./styles.less"
import { CompanyContext } from "../../providers/CompanyContext"
import { ModalCreate } from "../ModalCreate"
import { ModalSearch } from "../ModalSearch"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {useHookFormMask} from "use-mask-input"



const cnpjSchema = z.object({
    cnpj:z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
})

type TCnpj = z.infer<typeof cnpjSchema>


export function About(){
    const {setModalCreate, modalCreate, modalSearch, searchCompany} = useContext(CompanyContext)
    const { register, handleSubmit, formState:{errors} } = useForm<TCnpj>({
        resolver:zodResolver(cnpjSchema)
    })
    const registerWithMask = useHookFormMask(register)

    const submit:SubmitHandler<TCnpj> = (data) =>{
        const formattedCnpj = data.cnpj.replace(/[./-]/g, "")
        data.cnpj = formattedCnpj
        searchCompany(data)
    }

    return(
        <section className="section-about">
            <h2>Crie e controle informações da sua empresa de um jeito fácil e intuitivo!</h2>
            <button onClick={()=>setModalCreate(true)}>Nova Empresa</button>
            {modalCreate && <ModalCreate />}
            {modalSearch && <ModalSearch />}
            <form className="search-form" onSubmit={handleSubmit(submit)} >
                <label htmlFor="cnpj">Buscar CNPJ</label>
                <input {...registerWithMask("cnpj",["99.999.999/9999-99"])}  />
                <p>{errors.cnpj?.message}</p>
                <button>Buscar</button>
            </form>
        </section>
                
    )
}