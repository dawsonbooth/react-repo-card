import { render, screen, waitFor } from '@testing-library/react'
import fetch from 'node-fetch'
import React from 'react'
import RepoCard from '../src'

global.fetch = fetch

it('RepoCard', async () => {
  render(
    <div data-testid="container">
      <RepoCard username="dawsonbooth" repository="react-repo-card" />
    </div>
  )
  const container = screen.getByTestId('container')
  await waitFor(
    () => {
      expect(container.textContent).toContain('react-repo-card')
      expect(container.textContent).toContain('React component for Tarptaeya/repo-card')
      expect(container.textContent).toContain('TypeScript')
    },
    {
      container,
    }
  )
})
