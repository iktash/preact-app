export interface Location {
    name: string;
    weatherKey: string;
    flightsKey: string;
}

const state: Location[] = [
    {
        name: 'Amsterdam',
        weatherKey: '249758',
        flightsKey: 'amsterdam_nl',
    },
    {
        name: 'Madrid',
        weatherKey: '308526',
        flightsKey: 'madrid_es',
    },
    {
        name: 'Budapest',
        weatherKey: '187423',
        flightsKey: 'budapest_hu',
    },
];

export default state;
