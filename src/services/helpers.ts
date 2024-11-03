import {DateTime} from "luxon";

export const getExperiencePeriod = (from: string, to: string): string => {
    const fromDate = DateTime.fromISO(from);
    const toDate =
        to.toLowerCase() === "present" ? "Present" : DateTime.fromISO(to);

    const fromStr = `${fromDate.year} ${fromDate.monthShort}`;
    const toStr = toDate === "Present" ? "Present" : `${toDate.year} ${toDate.monthShort}`;

    return `${fromStr} - ${toStr}`;
};
