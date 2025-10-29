import logo from './logo.svg';
import './App.css';

//Component Welceom
//Basic function
// function Welcome1() {
//   return <h1>Welcome to React !</h1>
// }
// // Arrow function
// const Welcome2 = () => {
//   return <h1>Welcome to React  !! </h1>;
// };

// //Arrow function with implicit return
// const Welcome3 = () => <h1>Welcome to React !!!</h1>;

// //Props
// function Greeting(props) {
//   return <h1>My name is {props.name}, Age {props.age}  </h1>
// }
// // props.name
// function Greeting2({ name }) {
//   return <h1>Hello {name} !! </h1>
// }

// //mutiple props
// function Greeting3({ name, age }) {
//   return <h1>Helo {name},age {age}   </h1>
// }
// //defult props
// function Greeting4({ name = "Harry" }) {
//   return <h1>Helo {name}</h1>
// }

//button component
function Button({ text, onClick, type = "button" }) {
  return (
    // <button type={type} onClick={onClick} className="btn" style={{ fontSize: 18 }}>{text}</button>
    <button type={type} onClick={onClick} className="fontCha">{text}</button>

  );
}

//Card component
function Card({ title, content, imageUrl }) {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className="card-body">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}
//Header component
function Header({ logo, navigation }) {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        {navigation.map((item, index) => (
          <p>
            <a key={index} href={item.url}>
              {item.title}
            </a>
          </p>
        ))}
      </nav>
    </header>
  );
}

function App() {
  const name = "phisa";
  const age = "18";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello name, {name}
        </p>
        <p>
          อายุ : {age}
        </p>
        {/**การใช้งาน */}
        <Header logo={"https://meeting-rm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.14a503fb.png&w=128&q=75"}
          navigation={
            [
              {
                title: "header สาวแว่น", url: "https://cdn.readawrite.com/articles/9768/9767660/thumbnail/large.gif?1"
              },
              {
                title: "hearder สาวแว่น2", url: "https://cdn.readawrite.com/articles/7447/7446528/thumbnail/large.gif?1"
              }
            ]
          } />
        <Card title={"Card Tawa"} content={"DPU student"} imageUrl={"https://cdn.readawrite.com/articles/7447/7446528/thumbnail/large.gif?1"} />
        <Button text="Click me" onClick={() => alert("Clicked!")} />

        {/* <Greeting4 name="Boon" />
        <Greeting4 />
        <Greeting3 name="ono" age={15} />
        <Greeting2 name="momo" />
        <Greeting name="Mr.Yong" age="20" />

        <Welcome1 />
        <Welcome2 />
        <Welcome3 /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
