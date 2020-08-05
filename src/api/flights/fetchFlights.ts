import { addDaysToDate, dateToFlightsFormat } from 'utils/date';

import partnerId from './apiPartnerId';

interface ApiResponse {
    data: Array<{
        id: string;
        conversion: {
            EUR: number;
        };
        dTime: number;
    }>;
}

export interface Flight {
    id: string;
    date: string;
    price: number;
}

type Response = Flight[];

export default async (from: string, to: string, daysInFuture: number = 25): Promise<Response> => {
    const res = await fetch(
        'https://api.skypicker.com/flights?' +
            new URLSearchParams({
                v: '3',
                partner: partnerId,
                flight_type: 'oneway',
                one_per_date: '1',
                fly_from: from,
                fly_to: to,
                date_from: dateToFlightsFormat(new Date()),
                date_to: dateToFlightsFormat(addDaysToDate(new Date(), daysInFuture)),
                sort: 'date',
            }),
    );

    // TODO: handle errors
    if (!res.ok) return [];

    const { data } = (await res.json()) as ApiResponse;
    return data.map(({ id, dTime, conversion }) => ({
        id,
        date: new Date(dTime * 1000).toString(),
        price: conversion.EUR,
    }));
};
