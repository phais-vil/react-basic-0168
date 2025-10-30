import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// //useState
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
//     </div>
//   );
// }
// //useState Multi
// function UserProfile() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [email, setEmail] = useState("");
//   return (
//     <div>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="ชื่อ"
//       />
//       <input
//         type="number"
//         value={age}
//         onChange={(e) => setAge(parseInt(e.target.value))}
//         placeholder="อายุ"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="อิเมล"
//       />
//       <p>
//         <h2>
//           ชื่อ {name},อายุ {age}, Email: {email}
//         </h2>
//       </p>
//     </div>
//   );
// }

// //event Handling (eventพื้นฐาน)
// function EventDemo() {
//   const [message, setMessage] = useState("");
//   const handleClick = () => {
//     setMessage("ปุ่มถูกคลิ๊ก!");
//   };
//   const handleMouseEnter = () => {
//     setMessage("เมาส์เข้ามา");
//   };
//   const handleInputChange = (event) => {
//     setMessage(event.target.value);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>คลิกฉัน</button>
//       <div onMouseEnter={handleMouseEnter}>วางเมาส์ที่นี้</div>
//       <input onChange={handleInputChange} />
//       <p>{message}</p>
//     </div>
//   );
// }

// //object state
// function PersonForm() {
//   const [person, setPerson] = useState({
//     name: " ",
//     age: 0,
//     city: " ",
//     university: "",
//   });
//   const handleInputChange = (field, value) => {
//     setPerson((prevPerson) => ({
//       ...prevPerson, // คัดลอกค่าเดิม
//       [field]: value, // อัพเดดเฉพาะ field ที่เปลี่ยน
//     }));
//   };
//   return (
//     <div>
//       <input
//         value={person.name}
//         onChange={(e) => handleInputChange("name", e.target.value)}
//         placeeholder="ชื่อ"
//       />
//       <input
//         type="number"
//         value={person.age}
//         onChange={(e) => handleInputChange("age", parseInt(e.target.value))}
//         placeholder="อายุ"
//       />
//       <input
//         value={person.city}
//         onChange={(e) => handleInputChange("city", e.target.value)}
//         placeholder="เมือง"
//       />
//       <input
//         value={person.university}
//         onChange={(e) => handleInputChange("university", e.target.value)}
//         placeholder="university"
//       />
//       <p>ข้อมูล {JSON.stringify(person)}</p>
//     </div>
//   );
// }

// Array state
function TodoList() {
  // สั่งกด State จะเสร็จเป็น [] เพื่อเก็บข้อมูลเป็น Array
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    //trim  ช่องว่าง
    if (inputValue.trim()) {
      // เก็บข้อมูลไว้ใน Array
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };
  //เมื่อมีการ Click จะทำการเปลี่ยน compledted
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="เพื่อรายการ"
      />
      <button onClick={addTodo}>เพิ่ม</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      RawData : {JSON.stringify(todos)}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TodoList />
        {/* <PersonForm /> 
         <EventDemo />
        <UserProfile />
        <Counter /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
