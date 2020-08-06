import { h, FunctionalComponent } from 'preact';

import { Flights } from 'Flights';
import { Forecast } from 'Forecast';

interface Props {
    name: string;
    departureFlightKey: string | null;
    flightKey: string | null;
    weatherLocationKey: string | null;
    className?: string;
}

const DestinationLocation: FunctionalComponent<Props> = ({
    name,
    departureFlightKey,
    flightKey,
    weatherLocationKey,
    className = '',
}) => (
    <article className={className}>
        <header>
            <h1>...to {name}</h1>
        </header>

        <Flights departureFlightKey={departureFlightKey} flightKey={flightKey} />

        <Forecast locationKey={weatherLocationKey} />
    </article>
);

export default DestinationLocation;
