import axios from 'axios';
jest.mock('axios');

import React from "react";
import "@testing-library/react/dont-cleanup-after-each";
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react'; //Allows artificial rendering
import userEvent from '@testing-library/user-event'; //Allows triggering of user events. Not demo'd on this page.
import '@testing-library/jest-dom'; //Provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

import Today from '../../components/Today/Today.jsx';
import { ContextProvider } from '../../Context.jsx';

import { water, food, food2, goals, deleteFood1, deleteFood2, water2, goalsTwo, goalsThree } from './mockData.js';

describe('Product Information component', () => {
  beforeAll(async() => {
    axios.get.mockResolvedValueOnce({ data: goals });
    axios.get.mockResolvedValueOnce({ data: water });
    axios.get.mockResolvedValueOnce({ data: food });
    axios.delete.mockResolvedValueOnce({ data: deleteFood1 });
    axios.get.mockResolvedValueOnce({ data: deleteFood2 });
    axios.post.mockResolvedValueOnce({ data: [] });
    axios.get.mockResolvedValueOnce({ data: food });
    axios.post.mockResolvedValueOnce({ data: [] });
    axios.get.mockResolvedValueOnce({ data: water });
    axios.post.mockResolvedValueOnce({ data: [] });
    axios.get.mockResolvedValueOnce({ data: water2 });
    axios.put.mockResolvedValueOnce({ data: goalsTwo});
    axios.post.mockResolvedValueOnce({ data: [] });
    axios.get.mockResolvedValueOnce({ data: food2 });
    axios.put.mockResolvedValueOnce({ data: goalsThree});

    await render(
        <div>
        <ContextProvider>
          <Today/>
        </ContextProvider>
        </div>
      );
  });

  afterAll(() => {
    cleanup();
  });

  test('The Overview Widget should render to the screen', () => {
    const todayDiv = screen.getByTestId('today');
    expect(todayDiv).toBeInTheDocument();
  });

  test('Components for each meal should render', () => {
    const mealDivs = screen.queryAllByTestId('meal');
    expect(mealDivs.length).toBe(3);
    expect(mealDivs[0]).toHaveTextContent('Breakfast')
    expect(mealDivs[1]).toHaveTextContent('Lunch')
    expect(mealDivs[2]).toHaveTextContent('Dinner')
  });

  test('Food items for each meal should render', () => {
    const foodItemDivs = screen.queryAllByTestId('foodItem');
    expect(foodItemDivs.length).toBe(3);

    const foodItemNames = screen.queryAllByTestId('foodItemName');
    expect(foodItemNames[0]).toHaveTextContent('Oatmeal')
    expect(foodItemNames[1]).toHaveTextContent('Quiche')
    expect(foodItemNames[2]).toHaveTextContent('Pizza')

  });

  test('The amount of water drank per meal should render', () => {
    const waterDivs = screen.queryAllByTestId('water');
    expect(waterDivs.length).toBe(3);

    expect(waterDivs[0]).toHaveTextContent('Water: 50 oz')
    expect(waterDivs[1]).toHaveTextContent('Water: 25 oz')
    expect(waterDivs[2]).toHaveTextContent('Water: 10 oz')
  });

  test('The user should be able to delete a food item', async () => {
    const deleteFoodButtons = screen.queryAllByTestId('deleteFoodButton');
    userEvent.click(deleteFoodButtons[0]);

    await waitFor(() => {
      const foodItemDivs = screen.queryAllByTestId('foodItem');
      expect(foodItemDivs.length).toBe(2);
    })
  });

  test('The user should be able to add a food item', async () => {
    const addFoodButtons = screen.queryAllByTestId('addFoodButton');
    userEvent.click(addFoodButtons[0]);

    const addFoodModal = screen.getByTestId('addFoodModal');
    expect(addFoodModal).toBeInTheDocument();

    const foodNameFormDiv = screen.getByTestId('foodNameFormDiv');
    fireEvent.change(foodNameFormDiv, { target: {value: 'Pasta'}})
    expect(foodNameFormDiv).toHaveValue('Pasta');

    const closeFoodModalButton = screen.getByTestId('closeAddFoodModal');
    userEvent.click(closeFoodModalButton);

    await waitFor(() => {
      const foodItemDivs = screen.queryAllByTestId('foodItem');
      expect(foodItemDivs.length).toBe(3);
    })

  });

  test('The user should be able to add water', async () => {
    const addWaterButtons = screen.queryAllByTestId('addWaterButton');
    userEvent.click(addWaterButtons[0]);

    const addWaterModal = screen.getByTestId('addWaterModal');
    expect(addWaterModal).toBeInTheDocument();

    const waterFormDiv = screen.getByTestId('waterFormDiv');
    fireEvent.change(waterFormDiv, { target: {value: 10}})
    expect(waterFormDiv).toHaveValue(10);

    const closeWaterModalButton = screen.getByTestId('closeWaterModalButton');
    userEvent.click(closeWaterModalButton);

  });

  test('The user should be alerted upon reaching their water goal', async () => {
    const addWaterButtons = screen.queryAllByTestId('addWaterButton');
    userEvent.click(addWaterButtons[0]);

    const closeWaterModalButton = screen.getByTestId('closeWaterModalButton');
    userEvent.click(closeWaterModalButton);


    await waitFor(() => {
      expect(screen.getByTestId('waterGoalModal')).toBeInTheDocument();
      const closeWaterGoalModal = screen.getByTestId('closeWaterGoalModal');
      userEvent.click(closeWaterGoalModal);
    })

  });

  test('The user should be alerted upon reaching a food goal', async () => {
    const addFoodButtons = screen.queryAllByTestId('addFoodButton');
    userEvent.click(addFoodButtons[0]);

    const closeFoodModalButton = screen.getByTestId('closeAddFoodModal');
    userEvent.click(closeFoodModalButton);

    await waitFor(() => {
      expect(screen.getByTestId('proteinGoalModal')).toBeInTheDocument();
      const closeProteinGoalModal = screen.getByTestId('closeProteinGoalModal');
      userEvent.click(closeProteinGoalModal);
    })

  });


});

