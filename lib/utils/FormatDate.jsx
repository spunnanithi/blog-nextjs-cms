import moment from "moment";

export const convertIsoToDate = (date) => {
  return moment(date).format("dddd, MMMM Do, YYYY");
};

export const getCurrentYear = () => {
  return moment().format("YYYY");
};
