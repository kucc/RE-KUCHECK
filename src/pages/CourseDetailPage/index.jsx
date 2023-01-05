import PropTypes from "prop-types";

import { StyledCommonTitle } from "@utility/COMMON_STYLE";

export const CourseDetailPage = (props) => {
  const courseId = props.match.params.id;

  console.log(courseId);
  return (
    <div>
      <StyledCommonTitle>세션 소개</StyledCommonTitle>
      <span> 부탁해요 </span>
    </div>
  );
};

CourseDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
