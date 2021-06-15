import { useState } from 'react'
import { SIGN_IN } from 'operations/graphqlOperation'

// import FormInput from "components/common/form/formInput"

import { useMutation } from '@apollo/client'
import Cookies from 'js-cookie'

function login() {
  const [signIn] = useMutation(SIGN_IN)

  const [userEmail, setUserEmail] = useState('')

  const [userpassword, setUserPassword] = useState('')

  const [isSubmitting] = useState(false)

  const emailChnage = (e) => {
    setUserEmail(e.target.value)
  }
  const passwordChnage = (e) => {
    setUserPassword(e.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = userEmail
    const password = userpassword
    console.log(password)
    try {
      const data = await signIn({ variables: { email, password } })
      console.log(data.data)
      if (data.data.signIn.status !== 200) {
        console.log('Error')
      }
      const { token } = data.data.signIn
      console.log(token)
      Cookies.set('token', token, { expires: 60 })
      return <Redirect to='/' />
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthContainer>
      <span>Sign in with your email and password</span>
      <Form onSubmit={handleSubmit}>
        <FormInput
          value={userEmail}
          onChange={emailChnage}
          label='Email'
          name='email'
          type='email'
          required
        />

        <FormInput
          value={userpassword}
          onChange={passwordChnage}
          label='Password'
          name='password'
          type='password'
          required
        />

        <div className='button'>
          <Button disabled={isSubmitting} type='submit'>
            Sign In
          </Button>
        </div>
      </Form>
    </AuthContainer>
  )
}

export default login
