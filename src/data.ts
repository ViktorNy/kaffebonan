import img1 from './images/brucooffee.png';
import img2 from './images/DropCoffee.png';
import img3 from './images/skeleton-flavor-0.png';
import img4 from './images/greycoffee.png';
import img5 from './images/lavazaitalinoaromatico.png';
import img6 from './images/passalacquaamabilekaffe.png';
import img7 from './images/srilanka.png';
import img8 from './images/olabi.png';
import img9 from './images/volcanica.png';
import img10 from './images/coffeeandcgicory.png';
import img11 from './images/hygge.png';
import img12 from './images/oldtown.png';




export interface Product {
    id: string;
    name: string;
    info: string;
    price: number;
    imageUrl: string;
}

export const productArray: Product[] = [
    { id: '1', name: 'Gamle gunnars grodbönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 200, imageUrl:  (img1) },
    { id: '2', name: 'Rasmus Rhodosbönor?', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img2) },
    { id: '3', name: 'Nils nigerianska bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img3) },
    { id: '4', name: 'Eriks eritreanska bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img4) },
    { id: '5', name: 'Viktors Venezuelabönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img5)},
    { id: '6', name: 'Davids Dumplingbönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img6) },
    { id: '7', name: 'Helmuts Hittebönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img7) },
    { id: '8', name: 'Gustavs Granatgröna bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img8) },
    { id: '9', name: 'Gustavs Granatgröna bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img9) },
    { id: '10', name: 'Gustavs Granatgröna bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img10) },
    { id: '11', name: 'Gustavs Granatgröna bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img11) },
    { id: '12', name: 'Gustavs Granatgröna bönor', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 300, imageUrl: (img12) }
]