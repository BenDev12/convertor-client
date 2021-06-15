import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import { SIGN_IN } from 'operations/graphqlOperation'
import Button from "components/common/button/Button"
import FormInput from "components/common/form/formInput"
import { useMutation } from '@apollo/client'
import { AuthContainer, Form } from "./loginStyles"


function login() {
 const  history=useHistory()
  const [signIn] = useMutation(SIGN_IN)
  const [errors, setErrors]= useState('')
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
    try {
      const  data = await signIn({ variables: { email, password } })
      console.log(data)
      if(!data){
        setErrors("No auth data")
      }
      const { token } = data.data.signIn
      console.log(token)
      localStorage.setItem('token', token)
      history.push('/')

    } catch (error) {
      return error
    }
  }
  return (
    <AuthContainer>
      <h1>Welcome Back</h1>
      <span><h2>LOGIN</h2></span>
      {errors && <p>{errors}</p>}
      <Form onSubmit={handleSubmit}>
        <FormInput
          value={userEmail}
          onChange={emailChnage}
          label='Email'
          name='email'
          type='email'
          required
        />
        {errors.email && <p className='error-text'>{errors.email}</p>}

        <FormInput
          value={userpassword}
          onChange={passwordChnage}
          label='Password'
          name='password'
          type='password'
          required
        />
        {errors.password && <p className='error-text'>{errors.password}</p>}

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
