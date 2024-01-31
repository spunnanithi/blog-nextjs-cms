import moment from "moment";

export const convertIsoToDate = (date) => {
  return moment(date).format("MMMM Do, YYYY");
};

export const getCurrentYear = () => {
  return moment().format("YYYY");
};
