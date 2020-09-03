import { db } from 'src/lib/db'
import { UserInputError } from '@redwoodjs/api'

const validate = (input) => {
  if (input.email && !input.email.match(/[^@]+@[^\.]+\..+/)) {
    throw new UserInputError("Can't create new account", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

// service resolver for createContact defined in contacts.sdl
export const createContact = ({ input }) => {
  validate(input)
  return db.contact.create({ data: input })
}
