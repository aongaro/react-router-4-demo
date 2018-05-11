/**
* Handling nested subroutes from /main
* NOTE: /:id/deeper must be placed before /:id due to how react-router iterates through
*
* NOTE: theoretically for it to work we just need to set the most outer route to check user authentication, just test it
* or replace Routes here with AuthRoutes
*/
export default (props) => (
  <Switch>
    <Route path={props.match.path} exact component={SomeComponent0} />
    <Route path={`${props.match.path}/:id/deeper`} component={SomeComponent2}/>
    <Route path={`${props.match.path}/:id`} component={SomeComponent1} />
  </Switch>
)