import { cleanup, fireEvent, render, screen } from '@testing-library/svelte'

import Index from '../src/components/Index.svelte'

describe('Hello.svelte', () => {
  afterEach(() => cleanup())

  it('mounts', () => {
    const { container } = render(Index);
    expect(container).toBeTruthy();
  });
});
