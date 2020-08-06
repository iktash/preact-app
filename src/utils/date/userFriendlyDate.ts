import sameDay from './sameDay';

export default (d: Date): string => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (sameDay(today, d)) return 'Today';
    if (sameDay(tomorrow, d)) return 'Tomorrow';

    return Intl.DateTimeFormat('en', { day: '2-digit', month: 'short' }).format(d);
};
