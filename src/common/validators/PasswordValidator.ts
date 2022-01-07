export interface PasswordTestResult {
  message: string
  isValid: boolean
}

export const isPasswordValid = (password: string): PasswordTestResult => {
  const passwordTestResult: PasswordTestResult = {
    message: "",
    isValid: true
  }

  const strongPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  )

  if (!strongPassword.test(password)) {
    passwordTestResult.message = "Password must contain at least 1 special character, 1 cap letter, and 1 number"
    passwordTestResult.isValid = false
  }

  return passwordTestResult
}
