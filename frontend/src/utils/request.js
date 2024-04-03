import qs from 'qs';
import axios from 'axios';
import { USER_ACCESS_TOKEN, AUTH_HEADER } from './constants';


const baseUrl = process.env.REACT_APP_API; 

const requestConfig = (config) => {
  
  const { headers } = config
  const isBrowser = typeof document !== 'undefined'
  const auth = isBrowser ? localStorage.getItem(USER_ACCESS_TOKEN) : ''


  const requestHeaders = {
    ...headers
  }

if (auth) {
  requestHeaders[AUTH_HEADER] = `Bearer ${auth}`
}

  return {
    ...config,
    headers: requestHeaders
  }
}

const transformRequest = (data, headers) => {
  if (headers['Content-Type'] !== 'application/x-www-form-urlencoded') {
    return data
  }
  return qs.stringify(data, { arrayFormat: 'comma' })
}


const responseConfig = (response) => {
  const { data, status, statusText } = response
  if (status !== 200) {
    const err = new Error(statusText)
    err.code = status
    return Promise.reject(err)
  }
  return Promise.resolve(data)
}

const errorConfig = (error) => {
  const { response } = error
  const { status, statusText, data } = response || {}
  const message = data?.errorMsg || statusText || 'Network Error'
  const err = new Error(message)
  err.code = data?.errorCode || status
  if (error instanceof axios.Cancel) {
    err.userCanceled = true
  }
  return Promise.reject(err)
}

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  },
  transformRequest: [transformRequest]
})

instance.interceptors.request.use(requestConfig)
instance.interceptors.response.use(responseConfig, errorConfig)

const generator = (method = 'GET') => (url, params, headers) => {
    const suffix =
      method === 'GET'
        ? qs.stringify(params, { arrayFormat: 'comma', addQueryPrefix: true })
        : ''
    return instance({
      method,
      url: suffix ? `${url}${suffix}` : url,
      data: params,
      headers: headers || {}

    })
  }


export const get = generator('GET')

export const post = generator('POST')

export const put = generator('PUT')

export const del = generator('DELETE')

export default instance