export async function checkAuth(username: string, password: string) {
  const response = await fetch('http://localhost:3000/api/checkAuth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  return response.json()
}
