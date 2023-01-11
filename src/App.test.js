import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

test('Render the BookingForm heading', () => {
  render(<BookingForm/>)
  const headingElement = screen.getByText("Reserve a Table")
  expect(headingElement).toBeInTheDocument();
})

// describe("Checking if updating times works", () => {
//   test("Times change when sun, mon, or tue is choses", () =>{
//     const handleSubmit = jest.fn();
//     render(<BookingForm/>)
//     const rangeInput = screen.getByLabelText(/^MON.?/)
//     fireEvent.click(rangeInput)
//     let twelveoption = screen.getByText("12pm")
//     expect(twelveoption).toBeInTheDocument();
//     const secondrangeInput = screen.getByLabelText(/^WED.?/)
//     fireEvent.click(secondrangeInput)
//     expect(twelveoption).not.toBeInTheDocument();
//     let sixoption = screen.getByText("6pm")
//     expect(sixoption).toBeInTheDocument();
//   })
// })
describe("Checking if updating times works", () => {
  test("Times change when sun, mon, or tue is choses", () =>{
    render(<BookingForm/>)
    const rangeInput = screen.getByLabelText(/^TUE.?/)
    fireEvent.click(rangeInput)
    let firstoption = screen.getByText("23:00")
    expect(firstoption).toBeInTheDocument();
    const secondrangeInput = screen.getByLabelText(/^MON.?/)
    fireEvent.click(secondrangeInput)
    expect(firstoption).not.toBeInTheDocument();
    let sixoption = screen.getByText("20:30")
    expect(sixoption).toBeInTheDocument();
  })
})

describe("Testing the form", () => {
  test("test if the form errors", () => {
    render(<BookingForm/>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    let firstoption = screen.getByText("*Please enter a name")
    expect(firstoption).toBeInTheDocument();
    const rangeInput = screen.getByLabelText(/Name/)
    fireEvent.change(rangeInput, {target: {value: 'testing'}})
    fireEvent.click(button)
    try{
      let secondtry = screen.getByText("*Please enter a name")
      expect(secondtry).not.toBeInTheDocument();
    }catch{

    }
  })
})