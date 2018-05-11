import Routes from './routes';

/**
* App main page: Navbar, body and routes
*/
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        
        <div className="main_content"><Routes/></div>
        
      </div>
    );
  }
}

export default App;