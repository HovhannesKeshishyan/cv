import { DateTime } from "luxon";

export const getExperiencePeriod = (from: string, to: string): string => {
  const fromDate = DateTime.fromISO(from);
  const toDate =
    to.toLowerCase() === "present" ? "Present" : DateTime.fromISO(to);

  const from_str = `${fromDate.year} ${fromDate.monthShort}`;
  const to_str = toDate === "Present" ? "Present" : `${toDate.year} ${toDate.monthShort}`;

  return `${from_str} - ${to_str}`;    
};
