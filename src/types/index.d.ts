type User = {
  id: number
  name: string
  email: string
  role: string
  avatar?: string
  isActive: boolean
  lastLogin: Date
}

type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined
