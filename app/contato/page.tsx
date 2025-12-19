import { submitContact } from '@/app/actions/contact'
import { revalidatePath } from 'next/cache'

export default function ContatoPage() {
  async function action(formData: FormData) {
    'use server'
    await submitContact(formData)
    revalidatePath('/contato')
  }

  return (
    <main className="mx-auto max-w-md px-6 py-12">
      <h1 className="text-2xl font-semibold">Contato</h1>
      <form action={action} className="mt-6 space-y-4">
        <input name="name" placeholder="Seu nome" className="w-full rounded-md border border-neutral-800 bg-neutral-900 p-2" />
        <input name="email" placeholder="Seu e-mail" className="w-full rounded-md border border-neutral-800 bg-neutral-900 p-2" />
        <textarea name="message" placeholder="Mensagem" rows={6} className="w-full rounded-md border border-neutral-800 bg-neutral-900 p-2" />
        <button type="submit" className="rounded-md bg-white px-4 py-2 text-neutral-900">Enviar</button>
      </form>
    </main>
  )
}
