"use server"
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function submitContact(formData: FormData) {
  const values = {
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    message: String(formData.get('message') || ''),
  }
  const data = schema.parse(values)
  return { ok: true, data }
}
