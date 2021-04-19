import './scss/my.scss'
import Header from './component/Header.js'
import Title from './component/Title.js'
import Piano from './component/Piano.js'
function App() {
  return (
    <div className="app-container">
      <Title />
      <Header></Header>
      <Piano />
    </div>
  );
}

export default App;
