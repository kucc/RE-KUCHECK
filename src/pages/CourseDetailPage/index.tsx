import { StyledCommonTitle } from '@utility/COMMON_STYLE';

export const CourseDetailPage = (props: any) => {
  const courseId = props.match.params.id;

  return (
    <div>
      <StyledCommonTitle>세션 소개</StyledCommonTitle>
      <span> 부탁해요121 </span>
    </div>
  );
};
