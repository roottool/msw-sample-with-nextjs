import axios from 'axios'
import type { AxiosError } from 'axios'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

interface FetchTestResponse {
  message: string
}

interface FetchTestErrorResponse {
  errMessage: string
}

interface Response {
  data: FetchTestResponse | undefined
  error: FetchTestErrorResponse | undefined
}

/**
 * A data fetch wrapper.
 * See {@link https://swr.vercel.app/ja/docs/data-fetching#axios SWR Docs}.
 */
const fetcher = <T>(url: string) => axios.get<T>(url).then((res) => res.data)

export const useFetchSample = (): Response => {
  const { data, error } = useSWR<
    FetchTestResponse,
    AxiosError<FetchTestErrorResponse>
  >('/api/sample', fetcher)

  const [response, setResponse] = useState<FetchTestResponse | undefined>({
    message: '',
  })
  useEffect(() => {
    setResponse(data)
  }, [data, setResponse])

  const [errorResponse, setErrorResponse] = useState<
    FetchTestErrorResponse | undefined
  >(undefined)
  useEffect(() => {
    if (error?.response) {
      const { response } = error
      const { data } = response
      const { errMessage } = data
      setErrorResponse({
        errMessage,
      })
    }
  }, [error, setErrorResponse])

  return { data: response, error: errorResponse }
}

export type { AxiosError, AxiosResponse } from 'axios'
