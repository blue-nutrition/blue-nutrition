/* eslint-disable no-undef */
import axios from 'axios';
jest.mock('axios');

import React from "react";
import "@testing-library/react/dont-cleanup-after-each";
import { render, screen, cleanup } from '@testing-library/react'; //Allows artificial rendering
// import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import '@testing-library/jest-dom'; //Provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.
import { ContextProvider } from '../client/src/Context.jsx';
import Welcome from '../client/src/components/welcome/Welcome.jsx';
import Container from '@material-ui/core/Container';

import SalutAppBar from '../client/src/components/SalutAppBar.jsx';

// import App from '../src/App.jsx';
// import AppContext from '../src/Context.jsx';

import { users, water, food } from './mockData.js';

/* Some example templates for testing are provided below. In general, you will
1)render the component (see examples below)
2)query for the component: https://testing-library.com/docs/queries/about
3)optionally insert user events to manipulate elements: https://testing-library.com/docs/ecosystem-user-event
4)test assertions about the component: https://github.com/testing-library/jest-dom */

describe('Product Information component', () => {
  beforeAll(async () => {
    axios.get.mockResolvedValueOnce({ data: users });
    axios.get.mockResolvedValueOnce({ data: water });
    axios.get.mockResolvedValueOnce({ data: food });

    await render(
      <ContextProvider>
        <Container maxWidth="lg" >
          <SalutAppBar/>
          <Welcome />
        </Container>
      </ContextProvider>);
  });

  afterAll(() => {
    cleanup();
  });

  test('The Welcome Window should render to the screen', () => {
    expect(screen.getByTestId('welcome')).toBeInTheDocument();
  });

  // test('Should have meal tables', () => {
  //   expect(screen.getByTestId('meals')).toBeInTheDocument();
  // });

  // test('Should have add food button', () => {
  //   expect(screen.getByTestId('addFood')).toBeInTheDocument();
  // });

  // test('Should have add water button', () => {
  //   expect(screen.getByTestId('addWater')).toBeInTheDocument();
  // });

  // test('Should have navigation panel', () => {
  //   expect(screen.getByTestId('nav')).toBeInTheDocument();
  // });

  // test('Should have a star rating component', () => {
  //   expect(screen.getByTestId("star-rating-section")).toBeInTheDocument();
  // });

  // test('The star rating should contain a total of 5 stars', () => {
  //   const overview = screen.getByTestId('product-info');
  //   expect(overview.getElementsByClassName('MuiRating-decimal').length).toBe(5);
  // });

  // test('The star rating should be representative up to a quarter of a review point', () => {
  //   const overview = screen.getByTestId('product-info');
  //   const rating = overview.getElementsByClassName('MuiRating-root');
  //   expect(rating[0]).toHaveAttribute('aria-label', "3.5 Stars");
  // });

  // test('There should be a link next to the star rating stating "Read all <#> reviews', () => {
  //   expect(screen.getByTestId('reviews-link')).toHaveTextContent('Read all 31 reviews');
  // });

  // test('The read all reviews link should scroll the page to Ratings & Reviews section when clicked', () => {
  //   expect(screen.getByTestId('reviews-link')).toHaveAttribute('href', '#RatingsReviews');
  // });

  // test('Should display a product category', () => {
  //   expect(screen.getByTestId('product-category')).toHaveTextContent('CATEGORY > Jackets');
  // });

  // test('Should display a product title', () => {
  //   expect(screen.getByTestId('product-name')).toBeInTheDocument();
  //   expect(screen.getByTestId('product-name')).toHaveTextContent('Camo Onesie');
  // });

  // test('Should display a price which is derived from the initial default selected style', async () => {
  //   expect(screen.getByTestId('price')).toHaveTextContent('$140.00');
  // });

  // test('The price should update based on a style being selected', () => {
  //   userEvent.click(screen.getByTestId('style2'));
  //   expect(screen.getByTestId('price')).toHaveTextContent('SALE $100.00');
  // });

  // test('If an item is on sale, the sale price should appear in red followed by the struckthrough original price', () => {
  //   userEvent.click(screen.getByTestId('style2'));
  //   expect(screen.getByTestId('price')).toHaveTextContent('SALE $100.00 $140.00');
  //   expect(screen.getByTestId('price')).not.toHaveTextContent('SALE $100.00 $150.00');
  // });

  // test('Should have share buttons for Facebook, Twitter, and Pinterest', () => {
  //   const fbIcon = screen.getByTestId('fb-icon');
  //   const twitterIcon = screen.getByTestId('twitter-icon');
  //   const pinterestIcon = screen.getByTestId('pinterest-icon');
  //   const shareDiv = screen.getByTestId('share-icons');
  //   expect(shareDiv).toBeVisible();
  //   expect(shareDiv).toContainElement(fbIcon);
  //   expect(shareDiv).toContainElement(twitterIcon);
  //   expect(shareDiv).toContainElement(pinterestIcon);
  // });
});