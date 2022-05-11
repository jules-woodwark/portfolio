import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { FormWrapper } from './ContactForm.styles'

// import react-hook-form
import { useForm } from 'react-hook-form'

const contact = () => {
  
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  // react-hook form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // submit
  const handleRegistration = (values) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values })
    }).then(() => {
      navigate('/thanks/')
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegistration)}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
     
      <FormWrapper>
        <div className="form-name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="your name..."
            id="name"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name', { required: true })}
          />
          // react-hook-form
          {errors.name && <span role="alert">Required</span>}

          <button type="submit">Submit</button>
        </div>
      </FormWrapper>
    </form>
  )
}

export default contact