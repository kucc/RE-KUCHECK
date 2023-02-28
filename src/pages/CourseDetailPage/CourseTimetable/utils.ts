export const convertSelectedDataToTimetable = (
  selectedData: any,
  selectedColor: string,
  courseData: Course,
  cells: any,
) => {
  const renderselectedData = (
    index: number,
    selectColor: string,
    timeHour: number,
    timeMin: string,
  ) => {
    return selectedData[index].slice(1).map((data: any, key: number) => {
      if (cells['time_' + timeHour + '_' + timeMin][key].value) {
        return {
          ...cells['time_' + timeHour + '_' + timeMin][key],
        };
      } else if (data == true) {
        return {
          color: selectColor,
          value: courseData.courseName,
          courseId: courseData.id,
        };
      } else {
        return { color: '', value: '', courseId: '' };
      }
    });
  };

  return {
    time_9_00: renderselectedData(1, selectedColor, 9, '00'),
    time_9_30: renderselectedData(2, selectedColor, 9, '30'),
    time_10_00: renderselectedData(3, selectedColor, 10, '00'),
    time_10_30: renderselectedData(4, selectedColor, 10, '30'),
    time_11_00: renderselectedData(5, selectedColor, 11, '00'),
    time_11_30: renderselectedData(6, selectedColor, 11, '30'),
    time_12_00: renderselectedData(7, selectedColor, 12, '00'),
    time_12_30: renderselectedData(8, selectedColor, 12, '30'),
    time_13_00: renderselectedData(9, selectedColor, 13, '00'),
    time_13_30: renderselectedData(10, selectedColor, 13, '30'),
    time_14_00: renderselectedData(11, selectedColor, 14, '00'),
    time_14_30: renderselectedData(12, selectedColor, 14, '30'),
    time_15_00: renderselectedData(13, selectedColor, 15, '00'),
    time_15_30: renderselectedData(14, selectedColor, 15, '30'),
    time_16_00: renderselectedData(15, selectedColor, 16, '00'),
    time_16_30: renderselectedData(16, selectedColor, 16, '30'),
    time_17_00: renderselectedData(17, selectedColor, 17, '00'),
    time_17_30: renderselectedData(18, selectedColor, 17, '30'),
    time_18_00: renderselectedData(19, selectedColor, 18, '00'),
    time_18_30: renderselectedData(20, selectedColor, 18, '30'),
    time_19_00: renderselectedData(21, selectedColor, 19, '00'),
    time_19_30: renderselectedData(22, selectedColor, 19, '30'),
    time_20_00: renderselectedData(23, selectedColor, 20, '00'),
    time_20_30: renderselectedData(24, selectedColor, 20, '30'),
    time_21_00: renderselectedData(25, selectedColor, 21, '00'),
    time_21_30: renderselectedData(26, selectedColor, 21, '30'),
    time_22_00: renderselectedData(27, selectedColor, 22, '00'),
    time_22_30: renderselectedData(28, selectedColor, 22, '30'),
  };
};
