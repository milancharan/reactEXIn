import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  state =  {
    items : [{ id: 1, title: "wake up"}, { id: 2, title: "make breakfast"}],
    id: uuid,
    item:"",
    editItem: false 
  }
  handleChange = e => {
    console.log("Hanlde Change");
  }
  handleSubmit = e => {
    console.log("Handle Submit");
  }
  clearList = () => {
    console.log("Clear List");
  }
  handleDelete = id => {
    console.log(`Handle Edit ${id}`);
  }
  handleEdit = id => {
    console.log(`Edit Edit ${id}`);
  }
  return (
      <div className='container'>
        <div className="row">
          <div className='col-10 col-md-8 mt-5 mx-auto'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput />
            <TodoList />
            <h3 className='bg-secondary col-6 col-md-2 row-6 text-center mt-2 p-10'>Revert me</h3>
          </div>
        </div>
      </div>
  );
}

export default App;
