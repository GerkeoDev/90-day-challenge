import React from 'react'
import { useState } from 'react';


export const FirstComponent = () => {

  const defaultFormData = {
    firstName: '',
    lastName: ''
  }
  const [formData, setFormData] = useState(defaultFormData)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`First Name: ${formData.firstName} - Last Name: ${formData.lastName}`)
    setFormData(defaultFormData)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name: </label>
              <input type='text' name='firstName' onChange={(handleChange)} value={formData.firstName}/>
            </div>
            <div>
              <label htmlFor="lastName">Last Name: </label>
              <input type='text' name='lastName' onChange={(handleChange)} value={formData.lastName}/>
            </div>
            <button type='Submit'>Submit</button>
        </form>
    </div>
  )
}