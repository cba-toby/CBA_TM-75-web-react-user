export const formatDate = (updatedAt) => {
  let date = new Date(updatedAt);
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  let formattedDate = day + " " + monthNames[monthIndex] + " " + year;

  return formattedDate;
};
