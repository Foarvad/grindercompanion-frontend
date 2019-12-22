import moment from 'moment';


export const humanizeUnixTime = (time, dateFormat, offset = true) => {
    const newDate = new Date(time);

    if (!time || !(newDate instanceof Date) || isNaN(newDate)) return time;

    if (offset) {
        return !dateFormat
            ? moment
                .unix(time / 1000)
                .local()
                .format('hh:mm:ss DD.MM.YYYY')
            : moment
                .unix(time / 1000)
                .local()
                .format(dateFormat);
    } else {
        return !dateFormat
            ? moment
                .unix(time / 1000)
                .utcOffset(0)
                .format('hh:mm:ss DD.MM.YYYY')
            : moment
                .unix(time / 1000)
                .utcOffset(0)
                .format(dateFormat);
    }
};
