import { h, FunctionalComponent } from 'preact';
import { useEffect, useState, useRef } from 'preact/hooks';

import { useDebounce } from 'utils/hooks';
import { fetchLocations, Location } from 'api/flights';

interface Props {
    exclude?: string[];
    onChange?: (locationId: string) => void;
    inputClassName?: string;
}

const LocationSelector: FunctionalComponent<Props> = ({ exclude = [], onChange = () => null, inputClassName = '' }) => {
    const [term, setTerm] = useState<string>('');
    const [options, setOptions] = useState<Location[]>([]);

    const fetchOptions = useDebounce((term: string, exclude: string[]) => {
        fetchLocations(term, exclude).then((locations) => {
            setOptions(locations);
        });
    });

    useEffect(() => {
        if (!term) return;

        const chosenOption = options.find((option) => option.name === term);
        if (chosenOption) {
            onChange(chosenOption.id);
            return;
        }

        fetchOptions(term, exclude);
    }, [term, exclude]);

    return (
        <span>
            <input
                type="text"
                list="locations"
                placeholder="Start typing your current location..."
                value={term}
                onInput={(e) => setTerm((e.target as HTMLInputElement).value)}
                className={inputClassName}
            />
            <datalist id="locations">
                {options.map(({ id, name }) => (
                    <option key={id} value={name} />
                ))}
            </datalist>
        </span>
    );
};

export default LocationSelector;
