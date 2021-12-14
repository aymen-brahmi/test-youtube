import './App.css';
import Comments from './components/Comments';
import Principal from './components/principal';
import SuggestionVideos from './components/SuggestionVideos';
import Navig from './components/Navig';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <Navig />
      </div>
      <div className='row'>
        <Principal />
        <SuggestionVideos />
      </div>
      <div className='row'>
        <Comments />
      </div>
    </div>
  );
};

export default App;

