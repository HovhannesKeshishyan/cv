import {DateTime} from "luxon";

const pluralize = (str: string, value: number): string => {
    return value > 1 ? `${str}s` : str;
};

export const calcDateDiff = (from: string, to: string) => {
    const fromDate = DateTime.fromISO(from);
    const toDate =
        to.toLowerCase() === "present"
            ? DateTime.local().startOf("day")
            : DateTime.fromISO(to);
    const diff = toDate.diff(fromDate, ["years", "months"]).toObject();
    const years = Math.floor(diff.years || 0);
    const months = Math.floor(diff.months || 0);

    const result: string[] = [];

    if (years > 0) {
        result.push(`${years} ${pluralize("year", years)}`);
    }

    if (months > 0) {
        result.push(`${months} ${pluralize("month", months)}`);
    }

    return result.join(", ");
};
