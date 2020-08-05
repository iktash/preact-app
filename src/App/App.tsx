import { h, FunctionalComponent } from 'preact';
import { useEffect } from 'preact/hooks';

import { fetch5dayForecast } from 'api/weather';
import { fetchLocation, fetchFlights } from 'api/flights';

import state from './appState';
import './app.scss';

interface Props {}

const App: FunctionalComponent<Props> = () => {
    useEffect(() => {
        fetch5dayForecast(state['Amsterdam'].weatherKey).then((forecast) => {
            console.log('forecast', forecast);
        });
        fetchLocation('budapest').then((res) => {
            console.log('location', res);
        });
        fetchFlights('amsterdam_nl', 'madrid_es').then((res) => {
            console.log('flights', res);
        });
    }, []);

    return <div>Hello</div>;
};

export default App;
