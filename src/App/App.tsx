import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

import { LocationSelector } from 'LocationSelector';
import { fetch5dayForecast } from 'api/weather';
import { fetchLocations, fetchFlights } from 'api/flights';

import state from './appState';
import './app.scss';

interface Props {}

const App: FunctionalComponent<Props> = () => {
    const { weatherLocations, flightsLocations } = state;
    const [locationFrom, setLocationFrom] = useState<string | null>(null);
    console.log('locationFrom', locationFrom);
    // fetch5dayForecast(state['Amsterdam'].weatherKey).then((forecast) => {
    //     console.log('forecast', forecast);
    // });
    // fetchLocations('budapest').then((res) => {
    //     console.log('location', res);
    // });
    // fetchFlights('amsterdam_nl', 'madrid_es').then((res) => {
    //     console.log('flights', res);
    // });

    return (
        <h1 className="caption">
            Hi Jamie! You are going to travel from{' '}
            <LocationSelector
                exclude={flightsLocations.map((l) => l.locationKey)}
                onChange={setLocationFrom}
                inputClassName="location-input"
            />
        </h1>
    );
};

export default App;
