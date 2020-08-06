export type LocationsState = Record<
    string,
    {
        name: string;
        weatherKey: string;
        flightsKey: string;
    }
>;

export interface Location {
    name: string;
    locationKey: string;
}

const weatherLocations: Location[] = [
    {
        name: 'Amsterdam',
        locationKey: '249758',
    },
    {
        name: 'Madrid',
        locationKey: '308526',
    },
    {
        name: 'Budapest',
        locationKey: '187423',
    },
];

const flightsLocations: Location[] = [
    {
        name: 'Amsterdam',
        locationKey: 'amsterdam_nl',
    },
    {
        name: 'Madrid',
        locationKey: 'madrid_es',
    },
    {
        name: 'Budapest',
        locationKey: 'budapest_hu',
    },
];

export default { weatherLocations, flightsLocations };
