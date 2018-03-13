// something is broken with the timezones right now, this is a workaround

export function formatDate(dateValue: Date): string {
  // add timezome difference

  // console.log('dateValue', dateValue);

  const timeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
  // console.log('timeZoneOffsetInHours', timeZoneOffsetInHours);

  dateValue.setHours(dateValue.getHours() - timeZoneOffsetInHours + 1); // +1 to handle CET => CEST within a time period
  // console.log('corrected dateValue', dateValue);

  const result = dateValue.toISOString().substring(0, 10);
  // console.log('result', result);

  return result;
}

export function generateUUID() {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // tslint:disable-next-line:no-bitwise
    const r = ((d + Math.random() * 16) % 16) | 0;
    d = Math.floor(d / 16);
    // tslint:disable-next-line:no-bitwise
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
