import moment from "moment";

export const calcDuration = (startTime, endTime) => {

  //calculate the time difference
  const start = moment( startTime, "HH:mm" );
  const end = moment( endTime, "HH:mm" );
  const diff = end.diff( start );
  const duration = moment.duration( diff );
  const hours = Math.floor( duration.asHours() );
  const minutes = duration.minutes();
  return `${ hours }:${ minutes }`
}