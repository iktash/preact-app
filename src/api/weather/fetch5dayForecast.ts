import apiKey from './apiKey';

interface ApiResponse {
    DailyForecasts: Array<{
        Date: string;
        Temperature: {
            Maximum: {
                Value: number;
            };
            Minimum: {
                Value: number;
            };
        };
    }>;
}

export interface ForecastDay {
    date: Date;
    minTemp: number;
    maxTemp: number;
}

type Response = ForecastDay[];

export default async (locationKey: string): Promise<Response> => {
    const res = await fetch(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`,
        { mode: 'cors' },
    );

    // TODO: handle errors
    if (!res.ok) return [];

    const { DailyForecasts } = (await res.json()) as ApiResponse;

    return DailyForecasts.map(({ Date: d, Temperature }) => ({
        date: new Date(d),
        minTemp: Temperature.Minimum.Value,
        maxTemp: Temperature.Maximum.Value,
    }));
};
