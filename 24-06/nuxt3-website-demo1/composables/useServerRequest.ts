import { useFetch, UseFetchOptions } from "#app";

function isArray(str: unknown) {
  return Object.prototype.toString.call(str) === '[object Array]'
}

export const useServerRequest = <T= unknown>(url: string, opts: UseFetchOptions<T, unknown>) => {
  const token = useCookie('token')

  const defaultOptions: UseFetchOptions<unknown> = {
    baseURL: 'https://cms.yinchunyu.com/',
    onRequest({ options }) {
      options.headers = (options.headers || {}) as { [key: string]: string }
      if (token.value) {
        options.headers.Authorization = 'Bearer ' + token.value
      }
    },
    onResponse({ response }) {
      if (+response.status === 200 && +response._data.code !== 200) {
        process.client && console.log(response._data.msg)
      }
    },
    onResponseError({ response }) {
      process.client && console.log(isArray(response._data.msg) ? response._data.msg[0] : response._data.msg)
    },
  }

  return useFetch<T>( url, {...defaultOptions, ...opts} as any)
}
