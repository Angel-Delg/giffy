import { getGifs } from "../../src/services/getGifs"

describe('<getGifs />', () => {
    test('Debemos insertar un categoria y regresar un arreglo', async () => {
        const gifs = await getGifs('Kurumi')

        // toBeGreaterThan  => esta funcion te permite evaluar que el elemento se mayor a 0
        expect( gifs.length ).toBeGreaterThan(0)
        expect( gifs[0] ).toEqual({
            id: expect.any( String ) ,
            title: expect.any( String ),
            urlGiffy: expect.any( String ),
        })

    })
})