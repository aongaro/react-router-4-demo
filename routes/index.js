import AuthRoute from './AuthRoute';
import MainRouter from './MainRouter';

export default () => (
  <Switch>
    <Redirect exact path="/" to="/main" />
    <AuthRoute
      path="/main"
      redirectTo="/login"
      component={MainRouter}
    />
    <Route path="/login" component={Login} />
  </Switch>
)