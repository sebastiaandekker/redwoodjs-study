import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

// service resolver for createContact defined in contacts.sdl
export const createContact = ({ input }) => {
  return db.contact.create({ data: input })
}
