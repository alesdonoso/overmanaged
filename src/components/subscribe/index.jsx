import React, { useState } from 'react'
import axios from 'axios'

export const SubscribeForm = () => {
  const FORM_URL = `https://getform.io/f/a47d62f7-0f6e-4067-8fde-a83299f010be`

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: FORM_URL,
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div>
      <div class="col-md-8 mt-5">
        <h3>Getform.io Gatsby Form Example</h3>
        <form onSubmit={handleOnSubmit} autocomplete="off">
          <div class="form-group">
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              required="required"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <button
              type="submit"
              class="btn btn-primary"
              disabled={serverState.submitting}
            >
              Submit
            </button>
          </div>

          {serverState.status && (
            <p className={!serverState.status.ok ? 'errorMsg' : ''}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
