import React, { useState }  from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import TabApp from './components/tabapp';
import format from 'date-fns/format';
import DatePicker from './components/datepicker'


function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  //New date for Date Picker
  const [selectedDate, setSelectedDate] = useState(new Date());

  //Values for TabApp
  const [value, setValue] = useState('one');
  const handleNavChange = (event, value) => {
      setValue(value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  //Set Task name
  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  //Set Task date in string format
  const setDate = (date) => {
    setSelectedDate(date);
    setTodo({...todo, date: format(date, 'dd/MM/yyyy')})
  }


  return (
    <div className="App">
      <TabApp 
        value = {value}
        handleNavChange = {handleNavChange}/>
      {value === 'one' && <h1>Tervetuloa todo listaan</h1>}
      {value === 'two' && <div>
  
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <DatePicker
          selectedDate = {selectedDate}
          setDate = {setDate}
          />
        <TextField
          label="Description"
          variant="standard"
          name="desc" value={todo.desc}
          onChange={inputChanged}/>
        <Button onClick={addTodo} variant="contained">Add</Button>
      </Stack>
      
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
      </div>}
    </div>
  );
}

export default App;
