import { useContext } from "react"
import "./styles.less"
import { CompanyContext } from "../../providers/CompanyContext"
import { useForm } from "react-hook-form"
import { TCreateCompanyData, createCompanySchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"

export function ModalCreate(){
    const {setModalCreate, createCompany} = useContext(CompanyContext)
    const { register, handleSubmit, formState:{ errors }} = useForm<TCreateCompanyData>({
        resolver:zodResolver(createCompanySchema)
    })

    return(
        <div className="div-modal">
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Cadastro</h3>
                        <button className="close-button" onClick={()=>setModalCreate(false)} >X</button>
                    </div>
                    <form onSubmit={handleSubmit(createCompany)} >
                        <div className="div-form">
                            <label htmlFor="client-name">Nome do cliente</label>
                            <input id="client-name" {...register("clientName")} ></input>
                            <p>{errors.clientName?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Email</label>
                            <input id="email" {...register("email")}></input>
                            <p>{errors.email?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="password">Senha</label>
                            <input id="password" {...register("password")}></input>
                            <p>{errors.password?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="company-name">Nome da empresa</label>
                            <input id="company-name" {...register("companyName")}></input>
                            <p>{errors.companyName?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input id="cnpj" {...register("cnpj")}></input>
                            <p>{errors.cnpj?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="cep">CEP</label>
                            <input id="cep" {...register("cep")}></input>
                            <p>{errors.cep?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="address">Endereço</label>
                            <input id="address" {...register("address")}></input>
                            <p>{errors.address?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="address-number">Número</label>
                            <input id="address-number" {...register("addressNumber")}></input>
                            <p>{errors.addressNumber?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="phoneNumber">Telefone</label>
                            <input id="phoneNumber" {...register("phoneNumber")} ></input>
                            <p>{errors.phoneNumber?.message}</p>
                        </div>

                        <button className="btn-create">REGISTRAR EMPRESA</button>
                    </form>
                </div>
            </div>
        </div>
    )

                       
                        

}