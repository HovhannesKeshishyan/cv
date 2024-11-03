import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export const useDateDiff = (from: string, to: string) => {
  const [difference, setDifference] = useState("");
  useEffect(() => {
    const fromDate = DateTime.fromISO(from);
    const toDate =
      to.toLowerCase() === "present" ? getToday() : DateTime.fromISO(to);
    const diff = toDate.diff(fromDate, ["years", "months"]);
    let years = diff.years;
    let months = Math.round(diff.months);

    //when months rounded to top and get 12
    if(months === 12) {
      years++;
      months = 0;
    }

    const yearsStr = years > 1 ? "years" : "year";
    const monthsStr = months > 1 ? "months" : "month";

    const result: string[] = [];    
    if (years > 0) result.push(`${years} ${yearsStr}`);
    if (months > 0) result.push(`${months} ${monthsStr}`);
    setDifference(result.join(", "));
  }, [from, to]);

  return difference;
};

const getToday = () => {
  const todayObj = DateTime.local();
  const { day, month, year } = todayObj;
  const dayString = day < 10 ? "0" + day : day.toString();
  const monthString = month < 10 ? "0" + month : month.toString();
  const yearString = year.toString();
  return DateTime.fromISO(`${yearString}-${monthString}-${dayString}`);
};
