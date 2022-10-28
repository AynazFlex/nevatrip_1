import img from '../assets/img/sankt-peterburg-piter-st-3495.jpg'
import img1 from '../assets/img/sankt-peterburg-piter-st-3495-2.jpg'
import img2 from '../assets/img/AdobeStock_168443825 1.jpg'
import img3 from '../assets/img/ekskursii-po-spb-na-avtobuse-1.jpg'
import img4 from '../assets/img/music-1.jpg'

export interface Iitem {
    title: string
    time: string
    img: string
    clocks: string[]
    price: string
    price_pier: string
    list: string[]
    label?: string
}

const items: Iitem[] = [
    {
        title: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on HopOff 2019',
        time: '2 часа',
        img: img,
        clocks: ['12:00', '12:40', '13:00', '14:00', '15:00', '15:30'],
        price: '900',
        price_pier: '1200 р на причале',
        list: ['Билет на целый день', 'Неограниченное число катаний', '6 остановок у главных достопримечательностей'],
        label: 'НОВИНКА'
    },
    {
        title: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on HopOff 2019',
        time: '2 часа',
        img: img1,
        clocks: ['09:00', '10:00', '11:00', '12:00'],
        price: '2900',
        price_pier: '1200 р на причале dmfklsfsdfl',
        list: ['Билет на целый день', 'Неограниченное число катаний', '6 остановок у главных достопримечательностей'],
        label: 'НОВИНКА'
    },
    {
        title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        time: '2 часа',
        img: img2,
        clocks: ['12:00', '12:00', '12:00', '12:00'],
        price: '900',
        price_pier: '1200 р на причале',
        list: ['Билет на целый день', 'Неограниченное число катаний', '6 остановок у главных достопримечательностей'],
        label: 'НОВИНКА'
    },
    {
        title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        time: '2 часа',
        img: img3,
        clocks: ['12:00', '12:00', '12:00', '12:00'],
        price: '900',
        price_pier: '1200 р на причале',
        list: ['Билет на целый день', 'Неограниченное число катаний', '6 остановок у главных достопримечательностей'],
        label: 'КРУГЛЫЙ ГОД'
    },
    {
        title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        time: '2 часа',
        img: img4,
        clocks: ['12:00', '12:00', '12:00', '12:00'],
        price: '900',
        price_pier: '1200 р на причале',
        list: ['Билет на целый день', 'Неограниченное число катаний', '6 остановок у главных достопримечательностей']
    },
]

export default items