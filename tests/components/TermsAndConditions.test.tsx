
import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

describe("TermsAndConditions", () => {

    const renderComponent = () => {
        render(<TermsAndConditions />);
        return {
            heading: screen.getByRole('heading'),
            checkbox: screen.getByRole('checkbox'),
            button: screen.getByRole('button'),
        };
    }

    it("should render with correct header and initial state", () => { 
        const { heading, checkbox, button } = renderComponent();

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions');

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    })

    it('should enable button when checkbox is checked', async () => { 
        const { checkbox, button } = renderComponent();

        const user = userEvent.setup();
        await user.click(checkbox);

        expect(button).toBeInTheDocument();
        expect(button).toBeEnabled();
        
    })
})