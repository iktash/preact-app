import { h, FunctionalComponent } from 'preact';

import { Flights } from 'Flights';

interface Props {
    name: string;
    departureFlightKey: string | null;
    flightKey: string | null;
}

const DestinationLocation: FunctionalComponent<Props> = ({ name, departureFlightKey, flightKey }) => {
    return (
        <article>
            <header>
                <h1>...to {name}</h1>
            </header>

            <Flights departureFlightKey={departureFlightKey} flightKey={flightKey} />
        </article>
    );
};

export default DestinationLocation;
