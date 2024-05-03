import React, { useState } from 'react'
import './index.css'

function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const reset = () => {
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setNameError(false)
    setEmailError(false)
    setPasswordError(false)
    setConfirmPasswordError(false)

    let error = false

    if(name.length < 3) {
      setNameError(true)
      error = true
    }

    if(!email.includes('@') || !email.includes('.')) {
      setEmailError(true)
      error = true
    }

    if(password.length < 6) {
      setPasswordError(true)
      error = true
    }

    if(confirmPassword !== password) {
      setConfirmPasswordError(true)
      error = true
    }

    if(!error) {
      reset()
      setShowSuccessAlert(true)
    }
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form 
        onSubmit={handleSubmit}
        className='form-wrapper'
      >
        <div className="form-element">
          <label>Name</label>
          <div>
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onInput={(e) => setName(e.target.value) } 
            /><br />
            {nameError && <span className="error-text">Enter valid name</span>}
          </div>
        </div>
        <div className="form-element">
          <label>Email</label>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}  
              onInput={(e) => setEmail(e.target.value) }  
            /><br />
            {emailError && <span className="error-text">Enter valid email</span>}
          </div>
        </div>
        <div className="form-element">
          <label>Password</label>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            /><br />
            {passwordError && <span className="error-text">Enter valid password</span>}
          </div>
        </div>
        <div className="form-element">
          <label>Confirm password</label>
          <div>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}
            /><br />
            {confirmPasswordError && <span className="error-text">Confirm password doesn't match</span>}
          </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <button>Submit</button>
        </div>
      </form>
      {showSuccessAlert && 
      <div id='form-success-alert'>
        Form submitted successfully!
        <span onClick={() => setShowSuccessAlert(false)}>✖</span>
      </div>}
    </div>
  )
}

export default RegistrationForm


/*
  # React Forms:
  - "Single source of truth"
  - Types:
    - Controlled Components (Eg.: input, select, textarea, etc)
    - Uncontrolled Components (Eg.: File upload)
  - 2 Steps:
    - Assign form element value = state value
    - Attach state handler to event handler
*/