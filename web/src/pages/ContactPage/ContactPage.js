import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
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
      >
        <Label name="name" errorClassName="error" />
        <TextField
          // attribute validation defines that this field is required
          // when the input does not pass it will add class error to this field
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError className="error" name="name" />

        <Label name="email" errorClassName="error" />
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
            },
          }}
        />
        <FieldError className="error" name="email" />

        <Label name="message" errorClassName="error" />
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError className="error" name="message" />

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
