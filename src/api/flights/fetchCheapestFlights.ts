import { addDaysToDate, dateToFlightsFormat, sameDay } from 'utils/date';

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
    date: Date;
    price: number;
}

type Response = Flight[];

const keepCheapestPerDay = (acc: Flight[], flight: Flight) => {
    if (!acc.length) return [...acc, flight];

    const lastFlight = acc[acc.length - 1];
    if (!sameDay(lastFlight.date, flight.date)) {
        return [...acc, flight];
    }

    if (lastFlight.price <= flight.price) {
        return acc;
    }

    return [...acc.slice(0, -1), flight];
};

export default async (from: string, to: string, daysInFuture: number = 10): Promise<Response> => {
    const res = await fetch(
        'https://api.skypicker.com/flights?' +
            new URLSearchParams({
                v: '3',
                partner: partnerId,
                flight_type: 'oneway',
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
    return data
        .map(({ id, dTime, conversion }) => ({
            id,
            date: new Date(dTime * 1000),
            price: conversion.EUR,
        }))
        .reduce<Flight[]>(keepCheapestPerDay, []);
};
