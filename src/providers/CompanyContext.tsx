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

interface cnpjSearch {
    cnpj:string
}

interface ICompanyContext {
    companies: ICompany[],
    setCompanies: React.Dispatch<React.SetStateAction<ICompany[]>>,
    modalCreate: boolean,
    setModalCreate:React.Dispatch<React.SetStateAction<boolean>>,
    createCompany:(data:TCreateCompanyData) => Promise<void>,
    modalDelete: null | ICompany,
    setModalDelete: React.Dispatch<React.SetStateAction<ICompany | null>>,
    deleteCompany:(companyId:number) => Promise<void>,
    modalUpdate: null | ICompany,
    setModalUpdate: React.Dispatch<React.SetStateAction<ICompany | null>>,
    updateCompany:(data:any, companyId:number) => Promise<void>,
    modalSearch: null | ICompany,
    setModalSearch:React.Dispatch<React.SetStateAction<ICompany | null>>,
    searchCompany:(data:cnpjSearch) => Promise<void>,
}

export const CompanyContext = createContext({} as ICompanyContext)

export function CompanyProvider({children}:IChildren){
    const [companies, setCompanies] = useState<ICompany[]>([])
    const [modalCreate, setModalCreate] = useState(false)
    const [modalDelete, setModalDelete] = useState<ICompany | null>(null)
    const [modalUpdate, setModalUpdate] = useState<ICompany | null>(null)
    const [modalSearch, setModalSearch] = useState<ICompany | null>(null)

    useEffect(()=>{

        async function loadCompanies() {
            try {
                const response = await localApi.get("/companies")
                setCompanies(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        loadCompanies()

    },[])

    async function createCompany(data:TCreateCompanyData) {
        try {
            const response = await localApi.post("/companies", data)
            const spreadArray = [...companies]
            spreadArray.push(response.data)
            setCompanies(spreadArray)
            toast.success("Cadastro realizado") 
            setModalCreate(false)       
        } catch (error) {
            console.log(error)
            toast.error("Erro no cadastro")
        }
    }

    async function deleteCompany(companyId:number) {
        try {
            await localApi.delete(`/companies/${companyId}`)
            setModalDelete(null)
            toast.success("Empresa removida")
            const newArr = companies.filter((company)=>company.id !== companyId)
            setCompanies(newArr)
            
        } catch (error) {
            console.log(error)
            toast.error("Erro na requisição")
        }
    }

    async function updateCompany(data:any, companyId:number) {
        try {
            const response = await localApi.patch(`/companies/${companyId}`, data)
            const newArr = companies.map((company)=>{
                if(company.id == companyId){
                    return response.data
                }else {
                    return company
                }
            })
            setCompanies(newArr)
            toast.success("Dados atualizados")
            setModalUpdate(null)
            
        } catch (error) {
            console.log(error)
            toast.error("Erro na atualização")
        }
    }

    async function searchCompany(data:cnpjSearch){
        try {
            const response = await localApi.get(`/companies/${data.cnpj}`)
            setModalSearch(response.data)
            
        } catch (error) {
            console.log(error)
            toast.error("CNPJ não encontrado")
        }
    }

        
        
        

    return (
        <CompanyContext.Provider value={{
            companies, setCompanies, modalCreate, setModalCreate, createCompany,
            modalDelete, setModalDelete,deleteCompany, modalUpdate, setModalUpdate,
            updateCompany, modalSearch, setModalSearch, searchCompany
        }}>
            {children}
        </CompanyContext.Provider>

    )


}