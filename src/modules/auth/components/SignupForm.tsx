'use client'

import { signup } from '@/app/actions/auth'
import { Button } from '@/modules/core/components/ui/button'
import { useActionState } from 'react'

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)

  console.log('estado', pending)

  return (
    <form action={action} className="col-center">
      <label htmlFor="name" className="grid">
        Name
        <input id="name" name="name" placeholder="Name" />
        {state?.errors?.name && <p>{state.errors.name}</p>}
      </label>

      <label htmlFor="email" className="grid">
        Email
        <input id="email" name="email" placeholder="Email" />
        {state?.errors?.email && <p>{state.errors.email}</p>}
      </label>

      <label htmlFor="password" className="grid">
        Password
        <input id="password" name="password" type="password" placeholder="****" />
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </label>
      <Button loading={pending} type="submit">
        Sign Up
      </Button>
    </form>
  )
}
