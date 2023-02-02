import {
  StyledCaseSlash,
  StyledCourseBottom,
  StyledCourseButton,
  StyledCourseCancelButton,
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
  StyledMainCourseContainer,
} from './style';
import { useHistory } from 'react-router-dom';

export const MainCourse = ({ course, profile }: { course: Course, profile?: boolean }) => {
  const history = useHistory();
  const NOW_SEMESTER = "22-2";

  return (
    <StyledMainCourseContainer 
      onClick={() => {
        history.push(`/course/detail/${course.id}`);
      }}
    >
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
            <StyledCourseCaseValue>{course.requireTime}학점</StyledCourseCaseValue>
          </StyledCourseCase>
        </StyledCourseBottom>
      </StyledCourseInfo>
      {
        course.semester === NOW_SEMESTER ?
        profile && <StyledCourseCancelButton>수강 취소</StyledCourseCancelButton>
        || 
        <StyledCourseButton
          onClick={e => {
            e.stopPropagation();
            
            console.log('부분 클릭');
          }}>
          신청하기 1/5
        </StyledCourseButton>
        : 
        ""
      }
    </StyledMainCourseContainer>
  );
};
