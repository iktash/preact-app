import { useState, useEffect } from 'preact/hooks';

export default <T extends unknown>(callback: () => Promise<T>, dependencies: any[]): [T | null, boolean] => {
    const [fetching, setFetching] = useState<boolean>(false);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setFetching(true);
        callback()
            .then((res) => {
                setData(res);
                setFetching(false);
            })
            .catch(() => setFetching(false));
    }, dependencies);

    return [data, fetching];
};
