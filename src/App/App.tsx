import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

import { LocationSelector } from 'LocationSelector';
import { DestinationLocation } from 'DestinationLocation';

import locations from './appState';
import './app.scss';

interface Props {}

const App: FunctionalComponent<Props> = () => {
    const [locationFrom, setLocationFrom] = useState<string | null>(null);

    return (
        <div className="container">
            <h1 className="caption">
                Hi Jamie! You are going to travel from{' '}
                <LocationSelector
                    exclude={locations.map((l) => l.flightsKey)}
                    onChange={setLocationFrom}
                    inputClassName="location-input"
                />
            </h1>

            {locations.map(({ name, weatherKey, flightsKey }) => (
                <DestinationLocation
                    className="destination"
                    name={name}
                    departureFlightKey={locationFrom}
                    flightKey={flightsKey}
                    weatherLocationKey={weatherKey}
                />
            ))}
        </div>
    );
};

export default App;
