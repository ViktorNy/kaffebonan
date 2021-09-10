import img1 from './images/coffee1.jpg';

export interface Product {
    id: string;
    name: string;
    info: string;
    price: number;
    imageUrl: string;
}

export const productArray: Product[] = [
    { id: '1', name: 'Gamle gunnars grodbönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 200, imageUrl:  (img1) },
    { id: '2', name: 'Rasmus Rhodosbönor?', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img1) },
    { id: '3', name: 'Nils nigerianska bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img1) },
    { id: '4', name: 'Eriks eritreanska bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img1) },
    { id: '5', name: 'Viktors Venezuelabönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img1)},
    { id: '6', name: 'Davids Dumplingbönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img1) },
    { id: '7', name: 'Helmuts Hittebönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img1) },
    { id: '8', name: 'Gustavs Granatgröna bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img1) }
]