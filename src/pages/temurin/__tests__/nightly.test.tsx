import React from 'react';
import { render } from '@testing-library/react';
import { act, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe';
import Nightly, { Head } from '../nightly';

describe('Temurin Nightly page', () => {
  it('renders correctly', async () => {
    const { container } = render(<Nightly />);
    // eslint-disable-next-line
    const pageContent = container.querySelector('main');

    await act(async () => {
      const datepicker = screen.getByLabelText('Build Date')
      fireEvent.change(datepicker, { target: { value: '01/01/2022' } })
      expect(datepicker.getAttribute('value')).toBe('01/01/2022');
    });

    expect(pageContent).toMatchSnapshot();
  });

  it('head renders correctly', () => {
    const { container } = render(<Head />);
    // eslint-disable-next-line
    const title = container.querySelector('title');
    expect(title).toHaveTextContent('Nightly Builds | Adoptium');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Nightly />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
