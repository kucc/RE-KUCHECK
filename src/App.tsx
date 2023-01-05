import { useEffect } from 'react';

import 'antd/dist/antd.less';
import 'moment/locale/ko';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation
} from 'react-router-dom';



import {
  AttendacePage,
  CoursePage,
  CourseRegisterPage,
  GetCSVPage,
  JoinPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  NoticePage
} from '@pages';

import { authService } from '@/firebase';
import { CourseHoc, CourseRegisterHoc, UserPageHoc } from '@hoc';

import { getMember } from './api';
import './App.less';
import GlobalStyle from './GlobalStyle';
import {
  INCLUDE_HEADERPATH_LIST, PATH, SINGLEPATHNAMES_LIST,
  StyledIncludeHeaderMain,
  StyledMainContainer,
  StyledOldMain,
  StyledUnIncludeHeaderMain
} from './utility';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 500000,
        cacheTime: 500000,
        retry: 0,
        useErrorBoundary: true,
      },
      mutations: {
        useErrorBoundary: true,
      },
    },
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const member = useSelector(state => state.member.currentMember);

  useEffect(() => {
    // Link로 이동 시 스크롤 top
    window.scrollTo(0, 0);

    const member = getMember();
    if (!member) return false;

    if (member.isLoggedIn) {
      dispatch(setMember(member));
    } else {
      dispatch(logoutMember());
    }
  }, [dispatch, pathname]);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        if (
          pathname === PATH.login ||
          pathname === PATH.signUp
        ) {
          history.push('/');
        }
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  }, [dispatch, history]);

  // 기존 페이지들
  const NavFooterPageRouter = () => {
    // TODO
    // 자신의 정보를 볼 수 있는 페이지는 profile 혹은 mypage가 더 적절하므로 userpage 이름 변경 필요
    // firebase의 authService에서 currentUser의 정보를 불러올 수 있기 때문에 id 파라미터는 삭제해야함
    return (
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={JoinPage} />
        <Route path='/rules' component={NoticePage} />
        <Route path='/timetable' component={TimeTablePage} />
        {/* userPage */}
        <Route exact path='/userpage/not-found' component={NotFoundPage} />
        <Route path='/userpage/:id' component={UserPageHoc()} />
        {/* coursePage */}
        <Route exact path='/course/not-found' component={NotFoundPage} />
        <Route
          exact
          path='/course/register'
          component={CourseRegisterHoc(CourseRegisterPage)}
        />
        {/* 
          option : 0 => 모든 사람이 출입할 수 있음
          option : 1 => 로그인된 사람만이 출입할 수 있음
        */}
        <Route exact path='/course/:id' component={CourseHoc(CoursePage, 0)} />
        <Route
          exact
          path='/course/:id/attendance'
          component={CourseHoc(AttendacePage, 1)}
        />
        <Route exact path='/getCSV' component={GetCSVPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  };

  // 리뉴얼 페이지들
  const PageRouter = () => {
    return (
      <Switch>
        <NotForMemberRoute
          path={PATH.login}
          component={LoginPage}
        />
        <NotForMemberRoute
          path={PATH.signUp}
          component={JoinPage}
        />
        <Route exact path={PATH.main} component={MainPage} />
        <Route
          path={PATH.courseCreate}
          component={CourseCreatePage}
        />
        <Route
          path={PATH.courseDetail}
          component={CourseDetailPage}
        />
        <Route
          path={PATH.attendance}
          component={AttendancePage}
        />
        <Route path={PATH.timeTable} component={TimeTablePage} />
        <Route path={PATH.profile} component={ProfilePage} />
        <Route path={PATH.notice} component={NoticePage} />
        <Route path={PATH.admin} component={AdminPage} />
      </Switch>
    );
  };

  // eslint-disable-next-line react/prop-types
  const NotForMemberRoute = ({ component: Component, ...res }) => {
    return (
      <Route
        {...res}
        render={props =>
          member ? (
            <Redirect to={PATH.main} />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  };

  const pathSliced = pathname.split('/');
  const path = pathSliced.length > 3 ? '/course/detail/:id' : pathname; // 세션 소개 url 구분
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      {SINGLEPATHNAMES_LIST.includes(pathname) ? ( // 로그인, 회원가입 처럼 헤더, 푸터 없는 경우
        PageRouter()
      ) : Object.values(PATH).includes(path) ? ( // 리뉴얼 페이지
        <>
          <TopHeader />
          <StyledMainContainer>
            {INCLUDE_HEADERPATH_LIST.includes(path) ? (
              <>
                <Header pathname={pathname} />
                <StyledIncludeHeaderMain>
                  {PageRouter()}
                </StyledIncludeHeaderMain>
              </>
            ) : (
              <>
                <LeftBackButton />
                <StyledUnIncludeHeaderMain>
                  {PageRouter()}
                </StyledUnIncludeHeaderMain>
              </>
            )}
          </StyledMainContainer>
          <Footer />
        </>
      ) : (
        // 기존 페이지
        <>
          <NavBar />
          <StyledOldMain className='main-background-color'>
            {NavFooterPageRouter()}
          </StyledOldMain>
          <Footer />
        </>
      )}
    </QueryClientProvider>
  );
}

export default App;
