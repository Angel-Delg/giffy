import { render, screen } from "@testing-library/react"
import { GiffyGridItem } from "../src/components/GiffyGridItem"

describe('<GiffyGridItem />', () => {
    const title = 'saitama'
    const URL = 'https://unsplash/saitama.jpg'

    test('This is test GiffyGridItem.jsx',() => {

        const { container, getByText } = render( <GiffyGridItem title={ title } urlGiffy={ URL }/> )

        // snapshot toma una fotografia
        expect( container ).toMatchSnapshot();
    })

    test('Title toBeTruthy in the component', () => {

        const { container, getByText, getByTestId } = render( <GiffyGridItem title={ title } urlGiffy={ URL }/> )
        // Obtenemos el texto y lo que espero es que se encuentre el texto
        expect( getByText( title )).toBeTruthy()
        expect( getByTestId('test-title').innerHTML ).toBe( title )
    })

    test('Debe mostrar la imagen con el url indicado', () => {

        render(<GiffyGridItem title={title} urlGiffy={URL} />)
        screen.debug()

        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe(URL)
        expect( alt ).toBe(title)

    }) 

    test('Debe mostrar el titulo en el componente', () => {
        const { container } = render(<GiffyGridItem title={title} urlGiffy={URL} />)
        expect(container.querySelector('p').innerHTML).toBe(title)
    })

})