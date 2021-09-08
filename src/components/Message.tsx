import { useFetchSample } from '@/hooks/useFetchSample'

const Message = (): JSX.Element => {
  const { data, error } = useFetchSample()

  if (error) {
    return <p>{error.errMessage}</p>
  }

  if (!data) {
    return <p>Loading...</p>
  }

  return <p>{data.message}</p>
}

export default Message
