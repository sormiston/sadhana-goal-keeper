import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import weekOfYear from "dayjs/plugin/weekOfYear.js";
dayjs.extend(relativeTime);
dayjs.extend(weekOfYear);

const dayOfWeek = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

const ordinals = {
  First: 1,
  Second: 2,
  Third: 3,
  Fourth: 4
};

export default function buildSteps(goal) {
  const steps = [];
  const startDay = dayjs(goal.startDate);
  const endDay = dayjs(goal.deadline);
  let day = startDay.clone();
  let dayForMonthlyCalc = day.startOf("month");
  let counter = 1;

  // LOOP FOR MONTHLY
  if (goal.cycle === "Monthly") {
    while (dayForMonthlyCalc.isBefore(endDay.add(1, "d"), "day")) {
      const step = {
        goalId: goal.id,
        title: goal.title,
        dateTime: dayForMonthlyCalc,
        timeSpecific: !goal.noTime,
        hoursDuration: goal.durationHours || null,
        minutesDuration: goal.durationMinutes || null,
        status: "not-done",
        track: goal.track
      };
      if (goal.cycleOnceMonthlyDay === dayOfWeek[dayForMonthlyCalc.day()]) {
        counter++;
        if (ordinals[goal.cycleDayOfMonth] === counter) {
          steps.push(step);
        }
      }

      if (dayForMonthlyCalc.add(1, "d").month() !== dayForMonthlyCalc.month())
        counter = 0;
      dayForMonthlyCalc = dayForMonthlyCalc.clone().add(1, "d");
    }
    return steps;
  }
  // IMPLIED "ELSE"
  // LOOP FOR DAILY + WEEKLY
  while (day.isBefore(endDay.add(1, "d"), "day")) {
    const step = {
      goalId: goal.id,
      title: goal.title,
      dateTime: day,
      timeSpecific: !goal.noTime,
      hoursDuration: goal.durationHours || null,
      minutesDuration: goal.durationMinutes || null,
      status: "not-done",
      track: goal.track
    };
    if (goal.cycle === "Daily") {
      steps.push(step);
      day = day.clone().add(1, "d");
      //
    } else if (goal.cycle === "Weekly") {
      if (goal.cycleDaysOfWeek.includes(dayOfWeek[day.day()])) {
        steps.push(step);
      }
      day = day.clone().add(1, "d");
    }
  }
  return steps;
}
