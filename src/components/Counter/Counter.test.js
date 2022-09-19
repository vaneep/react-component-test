import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '.'

describe('Counter Component', () => {
  test('The title must start with value = 0', () => {
    render(<Counter />);
    const CounterTitle = screen.getByText("0");
    expect(CounterTitle).toBeInTheDocument();
  })

  test('Must have the class counter__title in the title', () => {
    render(<Counter />);
    const CounterTitle = screen.getByText("0");
    expect(CounterTitle).toHaveClass("counter__title");
  })

  test('Should not start with classes counter__title--increment and counter__title--decrement  in the title  ', () => {
    render(<Counter />);
    const CounterTitle = screen.getByText("0");
    expect(CounterTitle).not.toHaveClass("counter__title--increment");
    expect(CounterTitle).not.toHaveClass("counter__title--decrement");
  })

  test('Should have an button increment ', () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /incrementar/i, });
    expect(buttonIncrement).toBeInTheDocument();
  })

  test('Button Should have two classes button and button--increment ', () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /incrementar/i, });
    expect(buttonIncrement).toHaveClass('button');
    expect(buttonIncrement).toHaveClass('button--increment');
  })

  test('Button Should have two classes button and button--decrement ', () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: /decrement/i, });
    expect(buttonDecrement).toHaveClass('button');
    expect(buttonDecrement).toHaveClass('button--decrement');
  })

  test('Must increment + 1 when the user click on the button ', () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /incrementar/i, });
    expect(screen.queryByText("1")).toBeNull()
    userEvent.click(buttonIncrement)
    expect(screen.getByText("1")).toBeInTheDocument()

  })

  test('Must decrement - 1 when the user click on the button ', () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: /decrementar/i, });
    expect(screen.queryByText("-1")).toBeNull()
    userEvent.click(buttonDecrement)
    expect(screen.getByText("-1")).toBeInTheDocument()
  })

  test('Should add the class counter__title--increment on title, when the value > 0 ', () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /incrementar/i, });
    expect(screen.queryByText("0")).not.toHaveClass('counter__title--increment')
    userEvent.click(buttonIncrement)
    expect(screen.getByText("1")).toHaveClass('counter__title--increment')
  })

  test('Should add the class counter__title--decrement on title, when the value < 0 ', () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /decrementar/i, });
    expect(screen.queryByText("0")).not.toHaveClass('counter__title--decrement')
    userEvent.click(buttonIncrement)
    expect(screen.getByText("-1")).toHaveClass('counter__title--decrement')
  })
})