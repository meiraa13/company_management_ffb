import { useContext, ChangeEvent } from "react"
import "../ModalCreate/styles.less"
import { CompanyContext } from "../../providers/CompanyContext"
import {useForm, SubmitHandler} from "react-hook-form"
import { TUpdateCompanyData, updateCompanySchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useHookFormMask } from "use-mask-input"
import { cepApi } from "../../services/api"

export function ModalUpdate(){
    const {setModalUpdate, updateCompany, modalUpdate} = useContext(CompanyContext)
    const { register, handleSubmit, setValue ,formState:{errors}} = useForm<TUpdateCompanyData>({
        resolver:zodResolver(updateCompanySchema)
    })
    const registerWithMask = useHookFormMask(register)

    const handleCep = async (e:ChangeEvent<HTMLInputElement>) =>{
        const cep = e.target.value.replace(/[-]/g,"")
        const response = await cepApi.get(`/${cep}/json/`)
        setValue("address", response.data.logradouro)
    }

    const onSubmit:SubmitHandler<TUpdateCompanyData> = (data) =>{
        const formattedCnpj = data.cnpj?.replace(/[./-]/g, "")
        data.cnpj = formattedCnpj
        const formattedCep = data.cep?.replace(/[-]/g,"")
        data.cep = formattedCep
        const formattedPhone = data.phoneNumber?.replace(/^\+55\s|\(|\)|-/g,"")
        data.phoneNumber = formattedPhone
        updateCompany(data, modalUpdate!.id )
    }

    return (
        <div className="div-modal">
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-title">
                    <h3>Atualização</h3>
                    <button className="close-button" onClick={()=>setModalUpdate(null)} >X</button>
                </div>
                <form className="modal-form" onSubmit={handleSubmit(onSubmit)} >
                    <div className="div-form">
                        <label htmlFor="client-name">Nome do cliente</label>
                        <input id="client-name" {...register("clientName")}
                         defaultValue={modalUpdate?.clientName}
                        />
                        <p>{errors.clientName?.message}</p>
                    </div>

                    <div className="div-form">
                        <label htmlFor="email">Email</label>
                        <input id="email" {...register("email")} 
                         defaultValue={modalUpdate?.email}
                        />
                        <p>{errors.email?.message}</p>
                    </div>


                    <div className="div-form">
                        <label htmlFor="company-name">Nome da empresa</label>
                        <input id="company-name" {...register("companyName")} 
                         defaultValue={modalUpdate?.companyName}
                        />
                        <p>{errors.companyName?.message}</p>
                    </div>

                    <div className="div-form">
                        <label htmlFor="cnpj">CNPJ</label>
                        <input {...registerWithMask("cnpj",["99.999.999/9999-99"])}
                         defaultValue={modalUpdate?.cnpj}
                        />
                        <p>{errors.cnpj?.message}</p>
                    </div>

                    <div className="div-form">
                        <label htmlFor="cep">CEP</label>
                        <input id="cep" {...registerWithMask("cep",["99999-999"])}
                         defaultValue={modalUpdate?.cep}
                         onBlur={handleCep}
                        />
                        <p>{errors.cep?.message}</p>
                    </div>

                    <div className="div-form">
                        <label htmlFor="address">Endereço</label>
                        <input id="address" {...register("address")} 
                         defaultValue={modalUpdate?.address}
                        />
                        <p>{errors.address?.message}</p>
                    </div>

                    <div className="div-form">
                        <label htmlFor="address-number">Número</label>
                        <input id="address-number" {...register("addressNumber")} 
                         defaultValue={modalUpdate?.addressNumber}
                        />
                        <p>{errors.addressNumber?.message}</p>
                    </div>

                    <div className="div-form">
                        <label htmlFor="phoneNumber">Telefone</label>
                        <input id="phoneNumber" {...registerWithMask("phoneNumber",["+55 (99)99999-9999"])}
                         defaultValue={modalUpdate?.phoneNumber} 
                        />
                        <p>{errors.phoneNumber?.message}</p>
                    </div>

                    <button className="btn-create">ATUALIZAR DADOS</button>
                </form>
            </div>
        </div>
    </div>
    )
}