import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  FormError,
  Submit,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  // mutation handler for creating a contact
  // you can also get some usefull variables like loading from useMutation
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    // when mutation is finished then reset the form and alert user
    onCompleted: () => {
      formMethods.reset()
      alert('Thank you for your message')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <BlogLayout>
      <h1>ContactPage</h1>

      <Form
        // evenListener onSubmit activates onSubmit()
        // attribute validation mode onBlur validates a field when the user leaves a field
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        formMethods={formMethods}
        error={error}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label name="name" errorClassName="error">
          Your name
        </Label>
        <TextField
          // attribute validation defines that this field is required
          // when the input does not pass it will add class error to this field
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError className="error" name="name" />

        <Label name="email" errorClassName="error">
          Your email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError className="error" name="email" />

        <Label name="message" errorClassName="error">
          Your message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError className="error" name="message" />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
