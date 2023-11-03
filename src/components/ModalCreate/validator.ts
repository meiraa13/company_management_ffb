import { z } from "zod"

export const createCompanySchema = z.object({
    clientName:z.string().min(1),
    password:z.string().min(4),
    companyName:z.string(),
    cnpj:z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/),
    cep:z.string().regex(/^\d{5}-\d{3}$/),
    address:z.string(),
    addressNumber:z.string(),
    phoneNumber:z.string().regex(/^\+55 \(\d{2}\)\d{5}-\d{4}$/),
    email:z.string().email()
})

export type TCreateCompanyData = z.infer<typeof createCompanySchema>

