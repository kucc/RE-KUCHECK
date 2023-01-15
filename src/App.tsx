import { Component, useRef } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import 'moment/locale/ko';
import { Redirect, Route, Switch } from 'react-router-dom';

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

const NotForMemberRoute = ({ component, ...res }: any) => {
  const isMember = true;
  return (
    <Route
      {...res}
      render={props => (!isMember ? <Redirect to={PATH.main} /> : <Component {...props} />)}
    />
  );
};

function App() {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({});
  }

  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <GlobalStyle />
        <TopHeader />
        <Switch>
          <NotForMemberRoute path={PATH.login} component={LoginPage} />
          <NotForMemberRoute path={PATH.signUp} component={JoinPage} />
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
    </>
  );
}

export default App;
