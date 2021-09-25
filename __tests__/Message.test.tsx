import { render, waitForElementToBeRemoved } from '@testing-library/react'

import Message from '@/components/Message'

describe('Message', () => {
  test('should render "Loading..." while loading', () => {
    const { getByText } = render(<Message />)
    const loadingDocument = getByText('Loading...')
    expect(loadingDocument).toBeInTheDocument()
  })

  test('should render "success" after  the end of loading', async () => {
    const { getByText } = render(<Message />)
    await waitForElementToBeRemoved(() => getByText('Loading...'))

    const successDocument = getByText('success')
    expect(successDocument).toBeInTheDocument()
  })
})
