export const sendGetRequest = async (url, body, headers) => {
  const response = await fetch(url, {
    method: "GET",
    body,
    headers,
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}

export const sendPostRequest = async (url, body, headers) => {
  const response = await fetch(url, {
    method: "POST",
    body,
    headers,
  })
  console.log(response)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}

export const sendPutRequest = async (url, body, headers) => {
  const response = await fetch(url, {
    method: "PUT",
    body,
    headers,
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}
