import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event';


describe('Expandable Text', () => {
    const limit = 255;
    const longText = 'a'.repeat(limit + 1);
    const truncatedText = longText.substring(0, limit) + '...';

    it('should render full text when text length is less then 255', () => { 
        const text = 'Hello world';
        render(<ExpandableText text={text} />);
        expect(screen.getByText(text)).toBeInTheDocument();
    })

    it('should truncate text when text length is greater then 255', () => {
        render(<ExpandableText text={longText} />);
        expect(screen.getByText(truncatedText)).toBeInTheDocument();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/more/i);
    })

    it('should expand text when show more button is clicked', async () => {
        render(<ExpandableText text={longText} />);
 
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/more/i);

        const user = userEvent.setup();
        await user.click(button);

        expect(button).toHaveTextContent(/less/i);
        const text = screen.getByText(longText);
        expect(text).toBeInTheDocument();
    });

    it('should collapse text when show less button is clicked', async () => {
        render(<ExpandableText text={longText} />);
        const user = userEvent.setup();

        const showMoreButton = screen.getByRole('button', { name: /more/i });
        await user.click(showMoreButton);

        const showLessButton = screen.getByRole('button', { name: /less/i });
        await user.click(showLessButton);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(showLessButton).toHaveTextContent(/more/i);
    });

})