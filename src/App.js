import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

//Array Map
// const users = [
//   { id: 1, name: "Alice", role: "Admin" },
//   { id: 2, name: "Bob", role: "User" },
// ];
// function UserList() {
//   return (
//     //list
//     // <ul>
//     //   {users.map((u) => (
//     //     <li key={u.id}>
//     //       {u.name} - {u.role}
//     //     </li>
//     //   ))}
//     // </ul>

//     //table
//     <table border={1} style={{ width: "100%" }}>
//       <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Role</th>
//       </tr>
//       {users.map((u) => (
//         <tr key={u.id}>
//           <td>{u.id}</td>
//           <td>{u.name}</td>
//           <td>{u.role}</td>
//         </tr>
//       ))}
//     </table>
//   );
// }

// //reoder และผลของkey
// const items = [
//   { id: "a", text: "First" },
//   { id: "b", text: "Second" },
//   { id: "c", text: "Third" },
// ];
// function List() {
//   const [arr, setArr] = useState(items);
//   const shuffle = () => {
//     setArr((prev) => [...prev].sort(() => Math.random() - 0.5));
//   };
//   return (
//     <div>
//       <button onClick={shuffle}>Shuffle</button>
//       <ul>
//         {arr.map((item) => (
//           <li key={item.id}>
//             <input defaultValue={item.text} />
//             {
//               // มีstate ภายใน DOM
//             }
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// //Nested lists key ซ้อน
// const categories = [
//   { id: "cat1", name: "Fruits", items: [{ id: "f1", name: "Apple" }] },
//   { id: "cat2", name: "Drinks", items: [{ id: "d1", name: "Water" }] },
// ];
// function Menu() {
//   return (
//     <div>
//       {categories.map((cat) => (
//         <section key={cat.id}>
//           <h3>{cat.name}</h3>
//           <ul>
//             {cat.items.map((it) => (
//               <li key={it.id}>{it.name}</li>
//             ))}
//           </ul>
//         </section>
//       ))}
//     </div>
//   );
// }

// //rander component from list
// const users = [
//   { id: 1, name: "Alice", role: "Admin" },
//   { id: 2, name: "Bob", role: "User" },
// ];
// function UserRow({ user }) {
//   return <li>{user.name}</li>; // ไม่ใส่ key ที่นี้
// }

// function UserList({ users }) {
//   return (
//     <ul>
//       {users.map((u) => (
//         <UserRow key={u.id} user={u} /> // ใส่ key ที่จุด map
//       ))}
//     </ul>
//   );
// }

// //list emply status loading error states
// const product = [
//   { id: 1, name: "IPHONE" },
//   { id: 2, name: "Samsung" },
// ];
// function ProductList({ products, isLoading, error }) {
//   if (isLoading) return <p>Loading.....</p>;
//   if (error) return <p>เกิดข้อผิดพลาด</p>;
//   if (!products.length) return <p>ไม่มีสินค้า</p>;
//   return (
//     <ul>
//       {products.map((p) => (
//         <li key={p.id}>{p.name}</li>
//       ))}
//     </ul>
//   );
// }

// การจัดกลุ่มและแยกส่วน Fragment กับ key
function TableRows({ rows }) {
  return rows.map((r) => (
    <React.Fragment key={r.id}>
      <tr>
        <td style={{ fontWeight: "bold" }}>{r.title}</td>
      </tr>
      <tr>
        <td>{r.desc}</td>
      </tr>
    </React.Fragment>
  ));
}
const rowsData = [
  { id: "r1", title: "Row 1", desc: "Row 1 description" },
  { id: "r2", title: "Row 2", desc: "Row 2 description" },
  { id: "r3", title: "Row 3", desc: "Row 3 description" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*  */}
        <div style={{ padding: 16 }}>
          <h3>Fragment with key: แสดง 2 แถวต่อ 1 ระเบียน</h3>
          <table
            border="1"
            cellPadding="6"
            cellSpacing="0"
            style={{ borderCollapse: "collapse", width: 480 }}
          >
            <thead>
              <tr>
                <th>ข้อมูล</th>
              </tr>
            </thead>
            <tbody>
              <TableRows rows={rowsData} />
            </tbody>
          </table>
        </div>

        {/* <ProductList
          products={product}
          error={product.length <= 0 ? true : false}
        /> */}
        {/* <UserList users={users} /> */}
        {/* <Menu /> */}
        {/* <List /> */}
        {/* <UserList /> */}
      </header>
    </div>
  );
}

export default App;
