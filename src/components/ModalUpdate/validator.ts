import { z } from "zod"

export const updateCompanySchema = z.object({
    clientName:z.string().min(1).optional(),
    companyName:z.string().optional(),
    cnpj:z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/).optional(),
    cep:z.string().regex(/^\d{5}-\d{3}$/).optional(),
    address:z.string().optional(),
    addressNumber:z.string().optional(),
    phoneNumber:z.string().regex(/^\+55 \(\d{2}\)\d{5}-\d{4}$/).optional(),
    email:z.string().email().optional()
})

export type TUpdateCompanyData = z.infer<typeof updateCompanySchema>
