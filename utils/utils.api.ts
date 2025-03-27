type AuthResponse = {
  token?: string
  message?: string
}

export const authenticateUser = async (
  username: string,
  password: string,
): Promise<AuthResponse> => {
  try {
    const response = await fetch(
      'https://nodejs-server-lemon.vercel.app/api/check-auth',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      },
    )

    const data: AuthResponse = await response.json()

    return {
      token: data.token,
      message: data.message,
    }
  } catch (err) {
    throw new Error('Connection error')
  }
}
