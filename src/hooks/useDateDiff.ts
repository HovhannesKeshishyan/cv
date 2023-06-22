import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export const useDateDiff = (from: string, to: string) => {
  const [difference, setDifference] = useState("");
  useEffect(() => {
    const fromDate = DateTime.fromISO(from);
    const toDate =
      to.toLowerCase() === "present" ? getToday() : DateTime.fromISO(to);
    const diff = toDate.diff(fromDate, ["years", "months"]);
    const years = diff.years;
    const months = Math.round(diff.months);

    const years_str = years > 1 ? "years" : "year";
    const months_str = months > 1 ? "months" : "month";

    const result: string[] = [];    
    if (years > 0) result.push(`${years} ${years_str}`);
    if (months > 0) result.push(`${months} ${months_str}`);
    setDifference(result.join(", "));
  }, [from, to]);

  return difference;
};

const getToday = () => {
  const todayObj = DateTime.local();
  const { day, month, year } = todayObj;
  const day_string = day < 9 ? "0" + day : day.toString();
  const month_string = month < 9 ? "0" + month : month.toString();
  const year_string = year.toString();
  return DateTime.fromISO(`${year_string}-${month_string}-${day_string}`);
};
