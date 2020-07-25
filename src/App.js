import React, { Component } from 'react';
import SetTodos from './components/todos/set-todos';
import GetTodos from './components/todos/get-todos';
class App extends Component {
    render() {
        return (
            <div>
                <h1>HelloWorld</h1>
                <SetTodos></SetTodos>
                <GetTodos></GetTodos>
                <a href="/todos">Todos</a>
            </div>
        );
    }
}
export default App;