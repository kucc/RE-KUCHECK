import { useRef } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import 'moment/locale/ko';
import { Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import {
  AdminPage,
  AttendancePage,
  CourseCreatePage,
  CourseDetailPage,
  JoinPage,
  LoginPage,
  MainPage,
  NoticePage,
  ProfilePage,
  TimeTablePage,
} from '@pages';

import './App.less';
import GlobalStyle from './GlobalStyle';
import { Footer, TopHeader } from './components';
import { PATH } from './utility';

function App() {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({});
  }

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClientRef.current}>
          <GlobalStyle />
          <TopHeader />
          <Switch>
            <Route exact path={PATH.login} component={LoginPage} />
            <Route path={PATH.signUp} component={JoinPage} />
            <Route exact path={PATH.main} component={MainPage} />
            <Route path={PATH.courseCreate} component={CourseCreatePage} />
            <Route path={PATH.courseDetail} component={CourseDetailPage} />
            <Route path={PATH.attendance} component={AttendancePage} />
            <Route path={PATH.timeTable} component={TimeTablePage} />
            <Route path={PATH.profile} component={ProfilePage} />
            <Route path={PATH.notice} component={NoticePage} />
            <Route path={PATH.admin} component={AdminPage} />
          </Switch>
          <Footer />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
