// // import { useState } from "react";

// // function App() {
// //   const [todos, setTodos] = useState(["Test1", "Test2"]);
// //   const [value, setValue] = useState("");
// //   const [editIndex, setEditIndex] = useState(null); // null means we're not editing

// //   const addOrUpdateTodo = () => {
// //     if (value.trim() === "") return;

// //     if (editIndex !== null) {
// //       // Edit mode
// //       const updatedTodos = [...todos];
// //       updatedTodos[editIndex] = value;
// //       setTodos(updatedTodos);
// //       setEditIndex(null); // Exit edit mode
// //     } else {
// //       // Add mode
// //       setTodos([...todos, value]);
// //     }
// //     setValue(""); // Clear input
// //   };

// //   const deleteTodo = (index) => {
// //     const filteredTodos = todos.filter((_, i) => i !== index);
// //     setTodos(filteredTodos);
// //   };

// //   const editTodo = (index) => {
// //     setValue(todos[index]);  // Set the value to input
// //     setEditIndex(index);     // Set index to track which item to edit
// //   };

// //   return (
// //     <div>
// //       <h2>Todo App</h2>
// //       <ul>
// //         {todos.map((todo, i) => (
// //           <li key={i}>
// //             {todo}
// //             <button onClick={() => editTodo(i)}>Edit</button>
// //             <button onClick={() => deleteTodo(i)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>

// //       <input
// //         type="text"
// //         value={value}
// //         onChange={(e) => setValue(e.target.value)}
// //       />
// //       <button onClick={addOrUpdateTodo}>
// //         {editIndex !== null ? "Update Todo" : "Add Todo"}
// //       </button>
// //     </div>
// //   );
// // }

// // export default App;

// import { useState } from "react";
// import { Input, Button, List, Typography, Space, message } from "antd";

// function App() {
//   const [todos, setTodos] = useState(["Test1", "Test2"]);
//   const [value, setValue] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   const addOrUpdateTodo = () => {
//     if (value.trim() === "") {
//       message.warning("Please enter a todo.");
//       return;
//     }

//     if (editIndex !== null) {
//       const updatedTodos = [...todos];
//       updatedTodos[editIndex] = value;
//       setTodos(updatedTodos);
//       setEditIndex(null);
//       message.success("Todo updated!");
//     } else {
//       setTodos([...todos, value]);
//       message.success("Todo added!");
//     }
//     setValue("");
//   };

//   const deleteTodo = (index) => {
//     const filteredTodos = todos.filter((_, i) => i !== index);
//     setTodos(filteredTodos);
//     message.success("Todo deleted.");
//   };

//   const editTodo = (index) => {
//     setValue(todos[index]);
//     setEditIndex(index);
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "50px auto", padding: 20 }}>
//       <Typography.Title level={2} style={{ textAlign: "center" }}>
//         Ant Design Todo App
//       </Typography.Title>

//       <List
//         bordered
//         dataSource={todos}
//         renderItem={(item, index) => (
//           <List.Item
//             actions={[
//               <Button onClick={() => editTodo(index)} type="link">Edit</Button>,
//               <Button onClick={() => deleteTodo(index)} danger type="link">Delete</Button>,
//             ]}
//           >
//             {item}
//           </List.Item>
//         )}
//         style={{ marginBottom: 20 }}
//       />

//       <Space.Compact style={{ width: "100%" }}>
//         <Input
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder="Enter todo"
//         />
//         <Button type={editIndex !== null ? "primary" : "default"} onClick={addOrUpdateTodo}>
//           {editIndex !== null ? "Update" : "Add"}
//         </Button>
//       </Space.Compact>
//     </div>
//   );
// }

// export default App;



import { useState } from "react";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [todos, setTodos] = useState(["Test1", "Test2"]);
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTodo = () => {
    if (value.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = value;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, value]);
    }
    setValue("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My First Todo App
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Todo"
          variant="outlined"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant="contained"
          color={editIndex !== null ? "success" : "primary"}
          onClick={addOrUpdateTodo}
        >
          {editIndex !== null ? "Update" : "Add"}
        </Button>
      </Box>

      <List>
        {todos.map((todo, i) => (
          <ListItem key={i} divider>
            <ListItemText primary={todo} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => editTodo(i)} color="primary">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => deleteTodo(i)} color="error">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;

