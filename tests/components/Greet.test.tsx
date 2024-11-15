import { render,screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';

describe('Greet', () => {
    it("should render Hello with the name when name is provided", () => { 
        render(<Greet name="Kevin" />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/kevin/i)
    }) 
    it("should render Login button when no name is provided", () => { 
        render(<Greet />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i)
    }) 
})