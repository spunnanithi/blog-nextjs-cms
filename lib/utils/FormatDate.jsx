import moment from "moment";

export const convertIsoToDate = (date) => {
  return moment().format("dddd, MMMM Do, YYYY");
};
