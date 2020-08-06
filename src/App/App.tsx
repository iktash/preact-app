import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

import { LocationSelector } from 'LocationSelector';
import { DestinationLocation } from 'DestinationLocation';
import { fetch5dayForecast } from 'api/weather';

import state from './appState';
import './app.scss';

interface Props {}

const App: FunctionalComponent<Props> = () => {
    const { weatherLocations, flightsLocations } = state;
    const [locationFrom, setLocationFrom] = useState<string | null>(null);

    // fetch5dayForecast(state['Amsterdam'].weatherKey).then((forecast) => {
    //     console.log('forecast', forecast);
    // });

    return (
        <div className="container">
            <h1 className="caption">
                Hi Jamie! You are going to travel from{' '}
                <LocationSelector
                    exclude={flightsLocations.map((l) => l.locationKey)}
                    onChange={setLocationFrom}
                    inputClassName="location-input"
                />
            </h1>

            <DestinationLocation
                name={flightsLocations[0].name}
                departureFlightKey={locationFrom}
                flightKey={flightsLocations[0].locationKey}
            />
        </div>
    );
};

export default App;
