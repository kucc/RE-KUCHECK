/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  StyledBar,
  StyledBarMenu1,
  StyledBarMenu3,
  StyledBody,
  StyledCommonTitle,
  StyledContentBox,
  StyledSubTitle,
} from "./style";

export const NoticePage = () => {
  const noticeList = [
    {
      no: "03",
      title: "21-2 KUCC 회비 및 보증금 납부",
      content:
        "안녕하세요 KUCC입니다! 준회원(신입회원)의 경우 회비는 3만원이며, 정회원(기존회원)의 경우 만원 경\u001e하여 2만원입니다. 또한 본인이 참여한 스터디 및 세션 개수 * 20,000원 만큼 추가로 입금하셔야 합니다! 회비 납부 👉 준회원(신입회원): 3만원 👉 정회원(기존회원): 2만원 회비 할인 안내 - 운영진 참여시 1만원 경감 - 시니어의 경우 1만원 경감 - 세션장 참여 시 회비 면제 보증금 계산 공식 = (스터디 참여 수 + 세션 참여 수) * 20,000원 각 세션 및 스터디별로 보증금을 걷습니다. ※ KUCC 4학기 이상 등록 시 회비 면제에 대해서는 회칙상 명시된 바가 없어 운영진 회의를 통해 결정할 예정입니다. 4학기 이상 등록한 사람의 경우에도 회비를 입금해주시고, 추후 결정될 경우 환급해드리겠습니다. 회비 및 보증금 계산 예시 ) 준회원이 세션을 2개 듣고, 스터디에 하나 참여한다면 -> 3만원 + 2만원 * 2 + 2만원 * 1 = 9만원 ‼️본인이 납부해야할 회비 및 보증금이 헷갈리신다면 저에게 갠톡으로 문의해주세요! ‼️기존회원 중 스터디 및 세션, 이후 모든 행사에 참여하지 않을 경우 회비를 입금하지 않으셔도 됩니다.",
      date: "2021.07",
      id: "id3",
    },
    {
      no: "02",
      title: "21-2 KUCC 세션 및 스터디 활동 안내",
      content: "content2",
      date: "2021.07",
      id: "id2",
    },
    {
      no: "01",
      title: "21-2 KUCC 세션 및 스터디 신청 안내",
      content: "content1",
      date: "2021.07",
      id: "id1",
    },
  ];

  const [activeIndex, setActiveIndex] = useState();
  // const ListItem = ({
  //   title,
  //   list,
  //   active,
  //   activeIndex,
  //   setActiveIndex,
  //   idx,
  // }) => {

  //   const history = useHistory();
  //   const [clickedIdx, setClickedIdx] = useState();

  //   const handleClick = () => {
  //     setActiveIndex(idx);
  //     setClickedIdx(null);
  //     history.push('/${title')
  //   }

  //   return (
  //     <Li>

  //     </Li>
  //   )
  // }

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const ListItem = ({ res, active, idx }) => {
    return (
      // <li>
      <div className={active}>
        <div onClick={() => handleClick(idx)}>
          <div>
            <div />
          </div>
          <div>{res.title}</div>
        </div>
        <StyledContentBox isShow={idx === activeIndex}>
          {res.content}
        </StyledContentBox>
      </div>
      // </li>
    );
  };

  return (
    <div>
      <StyledBody>
        <StyledCommonTitle>공지사항</StyledCommonTitle>
        <StyledSubTitle>
          KUCC 내 활동 관련 운영 정책들을 확인해보세요!
        </StyledSubTitle>
        <StyledBarMenu1>
          <span>No</span>
          <span>제목</span>
          <StyledBarMenu3>작성일</StyledBarMenu3>
        </StyledBarMenu1>
        <StyledBar></StyledBar>

        <div>
          {noticeList.map((res, idx) => {
            const active = idx === activeIndex ? "active" : "";

            return (
              <>
                <ListItem
                  res={res}
                  idx={idx}
                  active={active}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
                {/* <div key={res.id}>
                  <CollapseBox>
                  <span>{res.no}</span>
                  <span>{res.title}</span>
                  <StyledBoxDate>{res.date}</StyledBoxDate>
                  {activeIndex ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </CollapseBox>
                  {activeIndex && <p>{res.content}</p>}
                  <StyledSubBar></StyledSubBar>
                </div> */}
              </>
            );
          })}
        </div>
      </StyledBody>
    </div>
  );
};
