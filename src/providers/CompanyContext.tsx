import { createContext, useEffect, useState } from "react";
import { localApi } from "../services/api";
import { toast } from "react-toastify";
import { TCreateCompanyData } from "../components/ModalCreate/validator";

interface IChildren {
    children: React.ReactNode
}

export interface ICompany {
    id:number,
    clientName:string,
    password:string,
    companyName:string,
    cnpj:string,
    cep:string,
    address:string,
    addressNumber:string,
    phoneNumber:string,
    email:string
}

interface ICompanyContext {
    company: ICompany[],
    setCompany: React.Dispatch<React.SetStateAction<ICompany[]>>,
    modalCreate: boolean,
    setModalCreate:React.Dispatch<React.SetStateAction<boolean>>,
    createCompany:(data:any) => Promise<void>
}

export const CompanyContext = createContext({} as ICompanyContext)

export function CompanyProvider({children}:IChildren){
    const [company, setCompany] = useState<ICompany[]>([])
    const [modalCreate, setModalCreate] = useState(false)

    useEffect(()=>{

        async function loadCompanies() {
            try {
                const response = await localApi.get("/companies")
                setCompany(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        loadCompanies()

    },[])

    async function createCompany(data:TCreateCompanyData) {
        try {
            const response = await localApi.post("/companies", data)
            const spreadArray = [...company]
            spreadArray.push(response.data)
            setCompany(spreadArray)
            toast.success("Cadastro realizado") 
            setModalCreate(false)       
        } catch (error) {
            console.log(error)
            toast.error("Erro no cadastro")
        }
        
    }

    return (
        <CompanyContext.Provider value={{company, setCompany, modalCreate, setModalCreate, createCompany}}>
            {children}
        </CompanyContext.Provider>

    )


}