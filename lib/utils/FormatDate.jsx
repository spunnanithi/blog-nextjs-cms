import moment from "moment";

export const convertIsoToDate = (date) => {
  return moment().format("MMMM Do, YYYY");
};
