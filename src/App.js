import './App.css';
import Footer from './Footer';
import Main from './Main';
import Navigation from './Navigation';
import Player from './Player';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Main /> */}
      <Player />
      <Footer />
    </div>
  );
}

export default App;
