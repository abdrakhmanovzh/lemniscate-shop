import axios from 'axios'

const baseURL = import.meta.env.VITE_APPWRITE_API_ENDPOINT
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

export const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID
export const productsCollectionId = import.meta.env.VITE_APPWRITE_PRODUCTS_COLLECTION_ID
export const productsURL =
  baseURL + '/databases/' + databaseId + '/collections/' + productsCollectionId

export const externalApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Appwrite-Project': projectId
  },
  baseURL: baseURL
})

export const externalApiAuth = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Appwrite-Project': projectId
  },
  baseURL: baseURL
})
