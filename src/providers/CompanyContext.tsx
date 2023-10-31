import { createContext, useEffect, useState } from "react";
import { localApi } from "../services/api";

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
    setModalCreate:React.Dispatch<React.SetStateAction<boolean>>
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

    async function createCompany(data:any) {
        try {
            const response = await localApi.post("/companies", data)
            setCompany((currentData)=>[currentData, response.data])        
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <CompanyContext.Provider value={{company, setCompany, modalCreate, setModalCreate}}>
            {children}
        </CompanyContext.Provider>

    )


}