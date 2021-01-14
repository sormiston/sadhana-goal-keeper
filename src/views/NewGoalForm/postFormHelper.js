import dayjs from "dayjs";

export default function postForm() {
  let startDate = dayjs(this.form.startDate);
  if (this.form.startTime) {
    startDate = startDate
      .clone()
      .hour(parseInt(this.form.startTime.substring(0, 2)));
    startDate = startDate
      .clone()
      .minute(parseInt(this.form.startTime.substring(3, 5)));
  }

  let formData = { ...this.form };
  formData.noTime =
    formData.startTime === null ? true : false;
  
  formData.noDuration =
    formData.durationHours === null && formData.durationMinutes === null
      ? true
      : false;
  delete formData.startTime;

  let deadline = dayjs(this.form.deadline);
  deadline = deadline.clone().hour(23);
  deadline = deadline.clone().minute(59);

  formData = {
    ...formData,
    startDate,
    deadline
  };

  this.$store.dispatch("submissions/postNewGoal", formData);
}
