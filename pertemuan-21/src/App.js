import logo from './logo.svg';
import './App.css';

const Header = () =>{
  return (
    <>  
      <h1>Basic React</h1>
      <h2>Component React</h2>
    </>
  )
}

const Year = () =>{
  return new Date().getFullYear()
}

const Day = () =>{
  return new Date().getDate()
}

const Hello = () =>{
  return(
    <>
    <p>Hello, welcome to to Webpro Class</p>
    <p>Tahun sekarang adalah {Year()}</p>
    <p>Tanggal sekarang adalah {Day()}</p>
    </>
  )
}

const Content = () =>{
  return (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
  )
}

function App() {
  return (
    <>
      <Header />
      <Hello />
      <Content />
    </>
  );
}

export default App;
