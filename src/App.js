import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'


function App() {
  return (
    <>
      <Navbar
        title="MyReactApp"
        head1="About"
        head2="Contact"
        dropdown="Activities"
        id="body"
      />
      <br />
      <div className="container" id="body">
        <center>
          <TextArea title="Enter the text" id="textArea" />
        </center>
      </div>
    </>
  );
}

export default App;
