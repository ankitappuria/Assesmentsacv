import React from 'react';
import { render, screen } from '@testing-library/react';
import CarLogoList from './CarLogoList';
import {CAR_LOGO_LIST} from "../../constants/constants";
import user from "@testing-library/user-event";

const baseProps = {
    carLogoClicked: jest.fn(),
};

test('check  img tag in carlogo list', () => {
    const { container } = render(<CarLogoList  {...baseProps} />);
    const imageElements  = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(CAR_LOGO_LIST.length);
});

 
test("it call function on image clicks", async () => {
  const { container } = render(<CarLogoList  {...baseProps} />);
  const imageElements  = screen.getAllByRole('img');
  await user.click(imageElements[0]);
  expect(baseProps.carLogoClicked).toBeCalledTimes(1);
});