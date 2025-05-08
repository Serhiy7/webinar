// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList/";
import TodoEditor from "./components/TodoEditor";
import { Component } from "react";
// import Form from "./components/Form/Form.jsx";
// import initialTodos from "./todos.json";
import shortid from "shortid";
import Filter from "./components/Filter/Filter";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: [],
    filter: "",
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));

    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       console.log("Нашли тот туду который нужно!");
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
  };

  // formSubmitHandler = (data) => {
  //   setTimeout(() => {
  //     console.log(data);
  //   }, 2000);
  // };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  componentDidMount() {
    console.log("App componentDidMount");

    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    console.log(parsedTodos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  s;

  componentDidUpdate(prevProps, prevState) {
    // порядок важен
    console.log("App componentDidUpdate");

    if (this.state.todos != prevState.todos) {
      console.log("обновилось поле");

      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  render() {
    console.log("App render");
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Form onSubm={this.formSubmitHandler} /> */}

        {/* <Counter initialValue={10} /> */}

        {/* <Dropdown /> */}

        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChangeFilter={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
