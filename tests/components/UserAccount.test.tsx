import { render,screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
    it("should render User name", () => { 
        const user = { id: 123, name: 'Kevin' }
        render(<UserAccount user={user} />);
        expect(screen.getByText(user.name)).toBeInTheDocument();        
    }) 
    it('should render login button when user is an admin', () => {
        const user = { id: 123, name: 'Kevin', isAdmin: true };
        render(<UserAccount user={user} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    })
    it('should not render login button when user is not an admin', () => {
        const user = { id: 123, name: 'Kevin' };
        render(<UserAccount user={user} />);
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    })
})
