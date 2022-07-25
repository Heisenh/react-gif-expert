import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifts } from '../../hooks/useFetchGifts';

jest.mock('../../hooks/useFetchGifts');

describe('Pruebas en GifGrid', () => {

    const category = 'Killua';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } />);
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    })

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifts', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Killua',
                url: 'https://localhost.com/killua.jpg'
            },{
                id: '123',
                title: 'Gon',
                url: 'https://localhost.com/gon.jpg'
            }
        ]
        
        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render( <GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length).toBe(2);

    })

})