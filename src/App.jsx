// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList/";
import { Component } from "react";
// import Form from "./components/Form/Form.jsx";
import initialTodos from "./todos.json";

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
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          console.log("Нашли тот туду который нужно!");
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  // formSubmitHandler = (data) => {
  //   setTimeout(() => {
  //     console.log(data);
  //   }, 2000);
  // };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

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

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
