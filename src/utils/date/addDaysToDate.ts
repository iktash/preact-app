export default (d: Date, days: number): Date => {
    const newDate = new Date(d);
    newDate.setDate(d.getDate() + days);
    return newDate;
};
