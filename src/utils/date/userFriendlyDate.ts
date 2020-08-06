import sameDay from './sameDay';

export default (d: Date): string => {
    const today = new Date();

    if (sameDay(today, d)) return 'Today';

    return Intl.DateTimeFormat('en', { day: '2-digit', month: 'short' }).format(d);
};
