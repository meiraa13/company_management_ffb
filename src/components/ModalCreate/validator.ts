import { z } from "zod"

export const createCompanySchema = z.object({
    clientName:z.string().min(1),
    password:z.string().min(4),
    companyName:z.string(),
    cnpj:z.string().length(14),
    cep:z.string().length(8),
    address:z.string(),
    addressNumber:z.string(),
    phoneNumber:z.string().length(11),
    email:z.string().email()
})

export type TCreateCompanyData = z.infer<typeof createCompanySchema>

