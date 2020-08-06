import { h, FunctionalComponent } from 'preact';

import { userFriendlyDate } from 'utils/date';
import { useFetch } from 'utils/hooks';
import { fetch5dayForecast } from 'api/weather';

import './forecast.scss';

interface Props {
    locationKey: string | null;
}

const Forecast: FunctionalComponent<Props> = ({ locationKey }) => {
    const [forecast, fetching] = useFetch(() => {
        if (!locationKey) return Promise.resolve([]);
        return fetch5dayForecast(locationKey);
    }, [locationKey]);

    return (
        <section className="forecast-container">
            <header>
                <h1>Weather forecast</h1>
            </header>

            {fetching && <div>Fetching weather data ⌛</div>}

            {!fetching && !forecast?.length && <div>No data yet 🤷</div>}

            {!fetching && forecast?.length ? (
                <div className="forecast">
                    {forecast.map(({ date, maxTemp, minTemp }) => (
                        <div key={date} className="forecast__day forecast-day">
                            <div className="forecast-temp forecast-temp--max">{maxTemp}°C</div>
                            <div className="forecast-temp forecast-temp--min">{minTemp}°C</div>
                            <div className="forecast-day__date">{userFriendlyDate(date)}</div>
                        </div>
                    ))}
                </div>
            ) : null}
        </section>
    );
};

export default Forecast;
