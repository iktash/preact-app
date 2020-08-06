import { useRef } from 'preact/hooks';

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export default <T extends CallableFunction>(func: T, delay: number = 300): ((...args: ArgumentTypes<T>) => void) => {
    const idRef = useRef<NodeJS.Timeout | null>(null);

    return (...args: ArgumentTypes<T>) => {
        if (idRef.current) {
            clearTimeout(idRef.current);
            idRef.current = null;
        }

        idRef.current = setTimeout(() => {
            idRef.current = null;
            func(...args);
        }, delay);
    };
};
