import { h, FunctionalComponent } from 'preact';
import { useState, useMemo } from 'preact/hooks';

import { userFriendlyDate } from 'utils/date';
import { useFetch } from 'utils/hooks';
import { fetchCheapestFlights } from 'api/flights';

import './flights.scss';

interface Props {
    departureFlightKey: string | null;
    flightKey: string | null;
}

const Flights: FunctionalComponent<Props> = ({ departureFlightKey, flightKey }) => {
    const [flights, fetching] = useFetch(() => {
        if (!departureFlightKey || !flightKey) return Promise.resolve([]);
        return fetchCheapestFlights(departureFlightKey, flightKey);
    }, [departureFlightKey, flightKey]);
    const [firstBar, setFirstBar] = useState<HTMLDivElement | null>(null);

    const maxHeight = useMemo<number>(() => {
        if (!firstBar) return 0;
        return firstBar.getBoundingClientRect().height;
    }, [firstBar]);

    const maxPrice = flights ? Math.max(...flights.map((f) => f.price)) : 0;

    return (
        <section className="flights-container">
            <header>
                <h1>Flight prices</h1>
            </header>

            {fetching && <div>Fetching flights data ⌛</div>}

            {!fetching && !flights?.length && <div>No data yet 🤷</div>}

            {!fetching && flights?.length ? (
                <div className="flights">
                    {flights.map(({ id, price, date }, index) => (
                        <div key={id} className="flights__day flight-day">
                            <div className="flight-day__price">€{price}</div>
                            <div
                                className="flight-day__bar flight-day-bar"
                                ref={index === 0 ? setFirstBar : undefined}
                                style={maxHeight ? { height: (maxHeight * price) / maxPrice, flex: 'none' } : {}}
                            />
                            <div className="flight-day__date flight-day-date">{userFriendlyDate(date)}</div>
                        </div>
                    ))}
                </div>
            ) : null}
        </section>
    );
};

export default Flights;
