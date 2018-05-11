const AuthOnlyRoute = ({ component: Component, condition, redirectTo, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      condition ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

/**
* NOTE: ...rest contains all the props passed by react-router
*/
class AuthRoute extends PureComponent {
  render() {

    const { auth, redirectTo, component, ...rest } = this.props;

    return(
      <AuthOnlyRoute 
        condition={auth.isAuthenticated}
        component={component}
        redirectTo={redirectTo}
        {...rest}
      />
    )
  }
}


AuthRoute = connect(
  (state) => (
    {
      auth: state.auth
    }
  )
)(AuthRoute);

export default AuthRoute;