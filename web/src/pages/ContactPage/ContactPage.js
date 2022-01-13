import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log('🚀 ~ onSubmit ~ data', data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label errorClassName="error" name="name">
          Name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />

        <Label errorClassName="error" name="email">
          Email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" className="error" />

        <Label errorClassName="error" name="message">
          Message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="error" />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
