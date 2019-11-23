import { useState, useEffect } from "react"

const UseForm = (callback, validate) => {
  const [ values, setValues ] = useState({ 
    name: "",
    email: "",
    password: "",
  })

  const [ errors, setErrors ] = useState({})
  const [ isSubmitting, setIsSubmitting ] = useState(false)

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setValues({
      ...values,
      [ name ]: value
    })
  }

  const handleSubmit = event =>{
    event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      callback()
    }
  }, [errors])

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}

export default UseForm