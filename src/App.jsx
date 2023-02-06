import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List/List';
import Item from './components/Item/Item';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const elInput = useRef();

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        isCompleted: false,
        text: elInput.current.value,
      },
    ]);
    elInput.current.value = '';
    toast.success("Todo qo'shildi");
  };

  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <div className='container'>
      <h1 className='display-2 mt-3 fw-semibold text-center'>Todo...</h1>
      <form
        className='col-12 col-sm-10 col-md-6 offset-3 mx-auto my-4 p-5 shadow'
        onSubmit={handleSubmit}
      >
        <div className='input-group'>
          <input
            required
            ref={elInput}
            className='form-control'
            type='text'
            placeholder='Todo...'
          />
          <button className='btn btn-primary'>Send</button>
        </div>
      </form>

      {todos.length ? (
        <List>
          {todos.map((el) => (
            <Item
              key={el.id}
              todos={todos}
              setTodos={setTodos}
              id={el.id}
              text={el.text}
              isCompleted={el.isCompleted}
            />
          ))}
        </List>
      ) : (
        <h2 className='text-center text-warning'>Todolar mavjud emas</h2>
      )}
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default App;
