/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react"

const formValidation = (initialState, validate, runOnSubmit) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const [touched, setTouched] = useState([])
  const [isSubmitting, setSubmitting] = useState(false)


  useEffect(() => {
  
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
   
      if (noErrors) {
        setTouched([])
        runOnSubmit()
        console.log(runOnSubmit(), "odebi")
        setSubmitting(false)
        setValues(initialState)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])

  useEffect(() => {
    const validationErrors = validate(values)
    const touchedErrors = Object.keys(validationErrors)
      .filter((key) => touched.includes(key))
      .reduce((acc, key) => {
        if (!acc[key]) {
          acc[key] = validationErrors[key]
        }
        return acc
      }, {})
    setErrors(touchedErrors)
  }, [touched, values])

  const handleChange = (event) => {
    const {target} = event
    let { name, value } = target
    value = target.type === "checkbox" ? !values.is_super : target.value
    name = target.name
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleBlur = (event) => {
    if (!touched.includes(event.target.name)) {
      setTouched([...touched, event.target.name])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  }
}

export default formValidation
