interface ApiResponse {
    locations: Array<{
        airports: number;
        id: string;
        name: string;
        region: {
            name: string;
        };
    }>;
}

export interface Location {
    id: string;
    name: string;
    region: string;
}

type Response = Location[];

export default async (term: string): Promise<Response> => {
    const res = await fetch(` https://api.skypicker.com/locations?term=${term}&location_types=city`);

    // TODO: handle errors
    if (!res.ok) return [];

    const { locations } = (await res.json()) as ApiResponse;
    return locations
        .filter((l) => l.airports > 0)
        .map(({ id, name, region }) => ({
            id,
            name,
            region: region.name,
        }));
};
