import dayjs from "dayjs";
export default {
  stepsMonthlyReport: [
    {
      dateTime: dayjs("2021-01-11"),
      data: [1, 2]
    },
    {
      dateTime: dayjs("2021-01-12"),
      data: [0, 0]
    },
    // MODEL: TODAY
    {
      dateTime: dayjs("2021-01-13"),
      data: [3, 1]
    },
    // MODEL: REMAINDER OF WEEK 
    {
      dateTime: dayjs("2021-01-14"),
      data: [0, 0]
    },
    {
      dateTime: dayjs("2021-01-15"),
      data: [0, 3]
    },
    {
      dateTime: dayjs("2021-01-16"),
      data: [0, 0]
    },
    {
      dateTime: dayjs("2021-01-17"),
      data: [0, 0]
    },
    // MODEL: PREVIOUS WEEK Mon-Sun
    {
      dateTime: dayjs("2021-01-04"),
      data: [2, 0]
    },
    {
      dateTime: dayjs("2021-01-05"),
      data: [2, 0]
    },
    {
      dateTime: dayjs("2021-01-06"),
      data: [2, 0]
    },
    {
      dateTime: dayjs("2021-01-07"),
      data: [2, 0]
    },
    {
      dateTime: dayjs("2021-01-08"),
      data: [2, 0]
    },
    {
      dateTime: dayjs("2021-01-09"),
      data: [2, 0]
    },
    {
      dateTime: dayjs("2021-01-10"),
      data: [2, 0]
    },
  ]
};
