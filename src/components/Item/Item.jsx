import { toast } from 'react-toastify';

const Item = ({ text, id, isCompleted, todos, setTodos }) => {
  const handleDelete = (todoId) => {
    const fiteredTodo = todos.filter((el) => el.id !== todoId);
    setTodos([...fiteredTodo]);
    toast.error("Todo o'chirildi");
  };

  const handleEdit = (todoId, text) => {
    const newTodo = prompt('Yangi Todo kiriting', text);
    const findedTodo = todos.find((el) => el.id === todoId);
    findedTodo.text = newTodo;
    setTodos([...todos]);
    toast.warning("Todo o'zgartirildi");
  };

  const handleChange = (todoId) => {
    const findedTodo = todos.find((el) => el.id === todoId);
    findedTodo.isCompleted = !findedTodo.isCompleted;
    setTodos([...todos]);
  };

  return (
    <li className='list-group-item d-flex align-items-center'>
      <span>{id}.</span>
      <input
        onChange={() => handleChange(id)}
        checked={isCompleted}
        className='form-check-input mx-3'
        type='checkbox'
      />
      <strong
        className={
          isCompleted ? 'text-decoration-line-through text-success' : ''
        }
      >
        {text}
      </strong>
      <div className='ms-auto d-flex flex-column flex-sm-row'>
        <button
          className='btn btn-warning mx-1 mb-1'
          onClick={() => handleEdit(id, text)}
        >
          EDIT
        </button>
        <button
          onClick={() => handleDelete(id)}
          className='btn btn-danger'
        >
          DELETE
        </button>
      </div>
    </li>
  );
};

export default Item;
