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

    { id: '1', name: 'Bru Gold', info: 'Har du hört historien om när vi besteg Mount Tibidabo i Spanien? Inte? Den är för lång för att berätta här, men köp Bru Gold så får du samma feeling vi hade när vi var där.', price: 199, imageUrl:  (img1) },
    { id: '2', name: 'Drop Coffee', info: 'Många tror att Jesus inte drack kaffe. Vi har egentligen ingen aning om han gjorde det eller inte, men drack han något så var det definitivt detta.', price: 399, imageUrl: (img2) },
    { id: '3', name: 'Bones coffee', info: 'Finns det ens någon skillnad på kaffebönor?", säger din amatör till kompis som inte har koll på kaffe alls. Köp dessa bönor så kan du visa alla dina ignoranta vänner hur fel de har.', price: 49, imageUrl: (img3) },
    { id: '4', name: 'Grey Coffee', info: 'Gillar du svart kaffe? Då har du kommit rätt, allt vårt kaffe är svart (förutom om du häller i mjölk det vill säga, men vem gör det?). Grey Coffee är dessutom det svartaste vi har. Som ett svart hål i din kaffekopp, det absorberar allt ljus.', price: 179, imageUrl: (img4) },
    { id: '5', name: 'Lavazza Espresso', info: 'Bakiskur? Snarare bakisKUL med det här kaffet. KÖP!', price: 99, imageUrl: (img5)},
    { id: '6', name: 'Espresso Bar', info: 'Har du problem att sova? Ta bara två koppar av detta koffeinrika kaffe så kommer du sova som ett barn (på sockerush).', price: 249, imageUrl: (img6) },
    { id: '7', name: 'Sri Lanka Coffee Powder', info: 'Vill du imponera på dina vänner med din intelligens? Köp ett kaffe så dyrt att du behöver ta det på avbetalning.', price: 299, imageUrl: (img7) },
    { id: '8', name: 'Olabi Coffee', info: 'Vill du känna dig som att du är 20 år gammal igen och klara att festa hela natten? Förfesta då med detta kaffet, du är garanterad att klara dig hela natten lång!', price: 75, imageUrl: (img8) },
    { id: '9', name: 'Volcanica', info: 'Roser är röda, violer är blå, kaffe är svart, gräs är grönt, kycklingar är gula.', price: 129, imageUrl: (img9) },
    { id: '10', name: 'Café Du Monde', info: 'Kaffet är gott. Därför köp. Tack.', price: 79, imageUrl: (img10) },
    { id: '11', name: 'Hygge', info: 'Vill du ha ett kaffe som inte bara är dyrt, utan faktiskt smakar bra också? Då är det Hygge du ska köpa.', price: 19, imageUrl: (img11) },
    { id: '12', name: 'OldTown Coffee', info: 'Måste du dricka kaffe på en budget, köp detta lätt begagnade kaffet.', price: 89, imageUrl: (img12) }

]