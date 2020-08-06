import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

import { LocationSelector } from 'LocationSelector';
import { DestinationLocation } from 'DestinationLocation';

import state from './appState';
import './app.scss';

interface Props {}

const App: FunctionalComponent<Props> = () => {
    const { weatherLocations, flightsLocations } = state;
    const [locationFrom, setLocationFrom] = useState<string | null>(null);

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
                className="destination"
                name={flightsLocations[0].name}
                departureFlightKey={locationFrom}
                flightKey={flightsLocations[0].locationKey}
                weatherLocationKey={weatherLocations[0].locationKey}
            />

            <DestinationLocation
                className="destination"
                name={flightsLocations[1].name}
                departureFlightKey={locationFrom}
                flightKey={flightsLocations[1].locationKey}
                weatherLocationKey={weatherLocations[1].locationKey}
            />

            <DestinationLocation
                className="destination"
                name={flightsLocations[2].name}
                departureFlightKey={locationFrom}
                flightKey={flightsLocations[2].locationKey}
                weatherLocationKey={weatherLocations[2].locationKey}
            />
        </div>
    );
};

export default App;
