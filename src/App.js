import React, { Component } from 'react';
import './App.css';
import Task from './components/Task';

class App extends Component {
  // コンストラクターを記述
  constructor() {
    super();
    this.state = {
      // タスク用の配列データを設定
      tasks: [
        { id: 1, title: 'タスク1', done: false },
        { id: 2, title: 'タスク2', done: true },
        { id: 3, title: 'タスク3', done: false },
      ],
    };
    this.changeDone = this.changeDone.bind(this);
    this.doneCount = this.doneCount.bind(this);
  }

  // タスクの状態を変更
  changeDone(taskId) {
    this.setState((state) => {
      const tasks = state.tasks.map(task => ({ ...task }));
      const targetTask = tasks.find(task => task.id === taskId);
      targetTask.done = !targetTask.done;
      return { tasks };
    });
  }

  // 完了したタスクの件数を返す
  doneCount() {
    return this.state.tasks.filter(t => t.done).length;
  }

  render() {
    return (
      <div className="App">
        <h1>タスク一覧</h1>
        <div>
          <span>完了:</span>
          <output>
            {this.doneCount()}
            /
            {this.state.tasks.length}
          </output>
        </div>
        <ul className="tasks">
          {this.state.tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              changeDone={this.changeDone}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
