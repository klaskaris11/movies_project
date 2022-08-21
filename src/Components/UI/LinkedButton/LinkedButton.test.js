import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LinkedButton from './LinkedButton';

const TEXT = "This is a custom text";

describe('LinkedButton Test', () => {
    test("That onClick method works v1", () => {
        render(
            <LinkedButton
                disabled={false}
                onClick={() => {
                    let newDiv = document.createElement("section");
                    newDiv.setAttribute("data-testid", "custom-test-id");
                    document.body.appendChild(newDiv);
                }}
                tooltip="Clear search"
                text={<>test</>}
            />
        );

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const outputElement = screen.getByTestId('custom-test-id');
        expect(outputElement).toBeInTheDocument();
    });

    test("That has the disabled method", () => {
        render(
            <LinkedButton
                disabled={true}
                onClick={() => { }}
                tooltip="Clear search"
                text={<>test</>}
            />
        );

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveAttribute('disabled');
    });

    test("That doesn't have the disabled method", () => {
        render(
            <LinkedButton
                disabled={false}
                onClick={() => { }}
                tooltip="Clear search"
                text={<>test</>}
            />
        );

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).not.toHaveAttribute('disabled');
    });

    test("To correctly rendered", () => {
        render(<LinkedButton
            disabled={false}
            onClick={() => { }}
            tooltip="Clear search"
            text={<>Test</>}
        />);
        const buttonLinkElement = screen.getByText(/Test/i);
        expect(buttonLinkElement).toBeInTheDocument();
    });
});