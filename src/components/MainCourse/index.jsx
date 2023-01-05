import PropTypes from 'prop-types';

import {
    StyledCaseSlash,
    StyledCourseBottom,
    StyledCourseButton,
    StyledCourseCase,
    StyledCourseCaseValue,
    StyledCourseInfo,
    StyledCourseLanguageImage,
    StyledCourseTitle,
    StyledCourseTop,
    StyledEmoji,
    StyledEmojiBackground,
    StyledLeader,
    StyledLeaderName,
    StyledLeaderType,
    StyledMainCourseContainer
} from './style';

export const MainCourse = ({ course }) => {
  return (
    <StyledMainCourseContainer onClick={() => console.log('전체 클릭')}>
      <StyledLeader>
        <StyledEmojiBackground>
          <StyledEmoji>🧑‍🎤</StyledEmoji>
        </StyledEmojiBackground>
        <StyledLeaderName>
          {course.courseLeader.name} <StyledLeaderType>팀장</StyledLeaderType>
        </StyledLeaderName>
      </StyledLeader>
      <StyledCourseInfo>
        <StyledCourseTop>
          <StyledCourseTitle isEllipsis={course.courseName.length > 14}>
            {course.courseName}
          </StyledCourseTitle>
          {course.language.slice(0, 3).map((res, index) => {
            return (
              <StyledCourseLanguageImage
                key={index}
                src={`/img/icon/${res}.svg`}
                alt='언어 이미지'
              />
            );
          })}
        </StyledCourseTop>
        <StyledCourseBottom>
          <StyledCourseCase>
            난이도 :&nbsp;
            <StyledCourseCaseValue>{course.difficulty}</StyledCourseCaseValue>
          </StyledCourseCase>
          <StyledCaseSlash>/</StyledCaseSlash>
          <StyledCourseCase>
            투자시간 :&nbsp;
            <StyledCourseCaseValue>
              {course.requireTime}학점
            </StyledCourseCaseValue>
          </StyledCourseCase>
        </StyledCourseBottom>
      </StyledCourseInfo>
      <StyledCourseButton
        onClick={e => {
          e.stopPropagation();

          console.log('부분 클릭');
        }}>
        신청하기 1/5
      </StyledCourseButton>
    </StyledMainCourseContainer>
  );
};

MainCourse.propTypes = {
  course: PropTypes.object.isRequired,
};
