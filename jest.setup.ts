// import { server } from '@/mocks/server'
import { server } from './__mocks__/server'

import '@testing-library/jest-dom'

process.env.NEXT_PUBLIC_API_MOCKING = 'enabled'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
