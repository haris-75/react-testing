import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'


describe('UserList', () => {
    it('should not render the user list when the user list is empty', () => { 
        render(<UserList users={[]} />);
        expect(screen.getByText(/no user/i)).toBeInTheDocument();
    })
    it('should render a list of user', () => {
        const users = [
            { id: 1, name: 'Kevin' },
            { id: 2, name: 'John' }
        ];
        render(<UserList users={users} />);

        users.forEach(user => {
            const link = screen.getByRole('link', { name: user.name });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href',`/users/${user.id}`)
        })
        
    })
})