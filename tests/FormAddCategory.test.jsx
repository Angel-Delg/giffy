import { fireEvent, render, screen } from "@testing-library/react"
import { FormAddCategory } from "../src/components/FormAddCategory"

describe('<FormAddCategory />', () => {
    test('Debe agregar la categoria mediante el inpu', () => {
        render(<FormAddCategory onNewValue={ () => {}}/>)

        const input = screen.getByRole('textbox')
        // Para poder dispara un evento en testing debemos usar fireEvent
        fireEvent.input(input, { target: { value: 'Kurumi' } } )

        expect(input.value).toContain('Kurumi')

        screen.debug()
    })
})