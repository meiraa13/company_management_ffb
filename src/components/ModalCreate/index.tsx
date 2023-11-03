import { useContext,  ChangeEvent } from "react"
import "./styles.less"
import { CompanyContext } from "../../providers/CompanyContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { TCreateCompanyData, createCompanySchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useHookFormMask } from "use-mask-input"
import { cepApi } from "../../services/api"

export function ModalCreate(){
    const {setModalCreate, createCompany} = useContext(CompanyContext)
    const { register, setValue ,handleSubmit, formState:{ errors }} = useForm<TCreateCompanyData>({
        resolver:zodResolver(createCompanySchema)
    })
    const registerWithMask = useHookFormMask(register)

    const handleCep = async (e:ChangeEvent<HTMLInputElement>) =>{
        const cep = e.target.value.replace(/[-]/g,"")
        const response = await cepApi.get(`/${cep}/json/`)
        setValue("address", response.data.logradouro)
    }

    const submit:SubmitHandler<TCreateCompanyData> = (data) =>{
        const formattedCnpj = data.cnpj.replace(/[./-]/g, "")
        data.cnpj = formattedCnpj
        const formattedCep = data.cep.replace(/[-]/g,"")
        data.cep = formattedCep
        const formattedPhone = data.phoneNumber.replace(/^\+55\s|\(|\)|-/g,"")
        data.phoneNumber = formattedPhone
        createCompany(data)
    }

    return(
        <div className="div-modal">
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Cadastro</h3>
                        <button className="close-button" onClick={()=>setModalCreate(false)} >X</button>
                    </div>
                    <form className="modal-form" onSubmit={handleSubmit(submit)} >
                        <div className="div-form">
                            <label htmlFor="client-name">Nome do cliente</label>
                            <input id="client-name" {...register("clientName")} />
                            <p>{errors.clientName?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Email</label>
                            <input id="email" {...register("email")} />
                            <p>{errors.email?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="password">Senha</label>
                            <input id="password" {...register("password")} />
                            <p>{errors.password?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="company-name">Nome da empresa</label>
                            <input id="company-name" {...register("companyName")} />
                            <p>{errors.companyName?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input  {...registerWithMask("cnpj",["99.999.999/9999-99"])} />
                            <p>{errors.cnpj?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="cep">CEP</label>
                            <input id="cep" {...registerWithMask("cep",["99999-999"])} 
                            onBlur={handleCep}
                            />
                            <p>{errors.cep?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="address">Endereço</label>
                            <input id="address" {...register("address")}/>
                            <p>{errors.address?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="address-number">Número</label>
                            <input id="address-number" {...register("addressNumber")}/>
                            <p>{errors.addressNumber?.message}</p>
                        </div>

                        <div className="div-form">
                            <label htmlFor="phoneNumber">Telefone</label>
                            <input id="phoneNumber" {...registerWithMask("phoneNumber",["+55 (99)99999-9999"])} />
                            <p>{errors.phoneNumber?.message}</p>
                        </div>

                        <button className="btn-create">REGISTRAR EMPRESA</button>
                    </form>
                </div>
            </div>
        </div>
    )

                       
                        

}