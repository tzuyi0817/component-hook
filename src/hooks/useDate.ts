import { ref, computed } from "vue";

export default () => {
  const START_YEAR = 1900;
  const END_YEAR = 2100;
  const date = new Date();
  const defaultYear = date.getFullYear();
  const defaultMonth = date.getMonth() + 1;
  const defaultDay = date.getDate();
  const selectYear = ref(defaultYear);
  const selectMonth = ref(defaultMonth);

  const yearList = generateList(START_YEAR, END_YEAR);
  const monthList = generateList(1, 12);
  const dayList = computed(() => {
    const thirty = [4, 6, 9, 11];
    const thirtyOne = [1, 3, 5, 7, 8, 10, 12];
    const days = thirty.includes(selectMonth.value)
      ? 30
      : thirtyOne.includes(selectMonth.value)
        ? 31
        : isLeapYear(selectYear.value) ? 29 : 28;
    return generateList(1, days);
  });

  const dateList = computed(() => {
    return [yearList, monthList, dayList.value];
  });

  function isLeapYear(year: number) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  function generateList(start: number, end: number) {
    const result: Array<number> = [];
    for (let year = start; year <= end; year++) {
      result.push(year);
    }
    return result;
  }

  return {
    selectYear,
    selectMonth,
    dateList,
    defaultAnchors: [defaultYear, defaultMonth, defaultDay],
  }
}
