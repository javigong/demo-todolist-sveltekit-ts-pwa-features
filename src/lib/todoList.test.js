// NOTE: jest-dom adds handy assertions to Jest (and Vitest) and it is recommended, but not required.
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/svelte'

import Page from './todoList.svelte'

test('shows proper heading when rendered', () => {
  render(Page)
  const heading = screen.getByText('Todo List')
  expect(heading).toBeInTheDocument()
})

// Note: This is as an async test as we are using `fireEvent`
test('add new todo on click', async () => {
  render(Page)
  const textInput = screen.getByTestId('text-input')

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  fireEvent.change(textInput, { target: { value: 'New Todo' } })
  fireEvent.keyDown(textInput, { key: 'Enter', code: 'Enter', charCode: 13 })

  const element = await screen.findByTestId('element')
  console.log({element})
  expect(element)
})
