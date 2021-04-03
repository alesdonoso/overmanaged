import React, { useState } from 'react'
import axios from 'axios'

import './index.scss'

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
      <div class="form">
        <div>
          <h3>Get notified when I write new posts.</h3>
          <p>No spam.</p>
          <p>Unsubscribe at any time.</p>
        </div>
        <form onSubmit={handleOnSubmit} autocomplete="off">
          <input
            type="email"
            name="email"
            class="form-input"
            id="inputEmail"
            required="required"
            aria-describedby="emailHelp"
            placeholder="Your email address"
          />
          <button
            type="submit"
            class="form-button"
            disabled={serverState.submitting}
          >
            Subscribe
          </button>

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
