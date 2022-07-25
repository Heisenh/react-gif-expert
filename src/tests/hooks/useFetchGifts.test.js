import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifts } from '../../hooks/useFetchGifts'

describe('Preubas en el Hook useFetchGifts', () => {

    test('Debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifts('Killua'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        
    })


    test('Debe retornar un arreglo de imagenes e isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifts('Killua'));
        
        await waitFor (
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        
    })

})