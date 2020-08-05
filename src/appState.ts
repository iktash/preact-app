export type LocationsState = Record<
    string,
    {
        name: string;
        weatherKey: string;
        flightsKey: string;
    }
>;

const appState: LocationsState = {
    ['Amsterdam']: {
        name: 'Amsterdam',
        weatherKey: '249758',
        flightsKey: 'amsterdam_nl',
    },
    ['Madrid']: {
        name: 'Madrid',
        weatherKey: '308526',
        flightsKey: 'madrid_es',
    },
    ['Budapest']: {
        name: 'Budapest',
        weatherKey: '187423',
        flightsKey: 'budapest_hu',
    },
};

export default appState;
