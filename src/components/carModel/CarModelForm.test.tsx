import { render, screen } from '@testing-library/react';
import CarModelForm from './CarModelForm';
import user from "@testing-library/user-event";

const baseProps = {
    saveCarModel: jest.fn(),
    carModelStr:"Abc"
};

test('check form loads with text and button', () => {
    render(<CarModelForm  {...baseProps} />);
    const textElement  = screen.getAllByRole('textbox');
    const numberElement  = screen.getAllByRole('spinbutton');
    const button = screen.getAllByRole('button');
    expect(textElement).toHaveLength(7);
    expect(numberElement).toHaveLength(2);
    expect(button).toHaveLength(1);
});

 
test("form on submit calls function", async () => {
    render(<CarModelForm  {...baseProps} />);
    const textElement  = screen.getAllByRole('textbox');
    const numberElement  = screen.getAllByRole('spinbutton');
    const button = screen.getByRole('button');

    expect(textElement).toHaveLength(7);
    expect(numberElement).toHaveLength(2);
   

   user.click(textElement[0]);
   user.keyboard("ABC");

   user.click(textElement[1]);
   user.keyboard("ABC");

   user.click(textElement[2]);
   user.keyboard("ABC");

   user.click(textElement[3]);
   user.keyboard("ABC");
   user.click(textElement[4]);
   user.keyboard("ABC");
   user.click(textElement[5]);
   user.keyboard("ABC");
   user.click(textElement[6]);
   user.keyboard("ABC");

   await  user.click(button);
  
  expect(baseProps.saveCarModel).toBeCalledTimes(1);
  expect(baseProps.saveCarModel).toBeCalledWith( {
       "color": "ABC",
       "externalfitment": "ABC",
       "insuranceValid": "ABC",
       "kms": "ABC",
       "location": "ABC",
       "model": undefined,
       "photo": "abc.jpg",
      "transmission": "ABC",
      });
});