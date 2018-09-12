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
  }

  // タスクの状態を変更
  changeDone(taskId) {
    // 配列のコピーを作成して対象のインデックスのタスクを書き換える
    const tasks = this.state.tasks.map((task) => ({...task}));
    const targetTask = tasks.find((task) => task.id === taskId);
    targetTask.done = !targetTask.done;
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="App">
        <h1>タスク一覧</h1>
        <div>
          <span>完了:</span>
          <output>1/3</output>
        </div>
        <ul className="tasks">
          {this.state.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              changeDone={this.changeDone}></Task>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
