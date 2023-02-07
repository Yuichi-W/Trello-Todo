import './App.css';
import Header from './components/Header';
import TaskCards from './components/task/TaskCards';

function App() {
  return (
    <div className='app'>
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
