import { MemoryRouter } from 'react-router-dom';

export const decorateWithRouter = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
)
