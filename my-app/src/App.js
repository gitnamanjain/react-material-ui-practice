
import './App.css';
import Banner from './Banner';
import MyCard from './MyCard';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Content></Content>

      <Footer></Footer>

    </div>
  );
}

export default App;
