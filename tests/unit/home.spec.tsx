import * as React from 'react'
import App from '../../src/web/components/home'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'

afterEach(cleanup)

describe("基础React单元测试", () => {
  it ("Home组件测试", () => {
    const {getByTestId} = render(<App />)
    const [ul, nav] = [getByTestId("js-ul"), getByTestId("js-h2")]
    expect(ul.children.length).toBe(3)
    expect(nav.textContent).toContain('ssh')
  })
})