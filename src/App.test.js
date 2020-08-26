import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Tesla from './Tesla';
import Lamborghini from './Lamborghini';
import Ferrari from './Ferrari';

test('renders learn Tesla link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Learn more about Tesla/i);
  expect(linkElement).toBeInTheDocument();
});

test('render Tesla h1', () => {
  const { getByText } = render(<Tesla />);
  const teslaTitle = getByText(/Tesla/i);
  expect(teslaTitle).toBeInTheDocument();
});

test('render Lamborghini h1', () => {
  const { getByText } = render(<Lamborghini />);
  const lamborghiniTitle = getByText(/Lamborghini/i);
  expect(lamborghiniTitle).toBeInTheDocument();
});

test('render Ferrari h1', () => {
  const { getByText } = render(<Ferrari />);
  const ferrariTitle = getByText(/Ferrari/i);
  expect(ferrariTitle).toBeInTheDocument();
});

// test('renders all titles through App component', () => {
//   const  { getByText } = render(<App />);

//   const teslaTitle = getByText(/Tesla/i);
//   expect(teslaTitle).toBeInTheDocument();

//   const lamborghiniTitle = getByText(/Lamborghini/i);
//   expect(lamborghiniTitle).toBeInTheDocument();

//   const ferrariTitle = getByText(/Ferrari/i);
//   expect(ferrariTitle).toBeInTheDocument();
// });