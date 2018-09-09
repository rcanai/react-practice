import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // コンストラクターを記述
  constructor() {
    super();
    this.state = {
      // タスク用の配列データを設定
      tasks: [
        { title: 'タスク1', done: false },
        { title: 'タスク2', done: true },
        { title: 'タスク3', done: false },
      ],
    };
  }

  // タスクの状態を変更
  changeDone (index) {
    // 配列のコピーを作成して対象のインデックスのタスクを書き換える
    const tasks = [...this.state.tasks];
    tasks[index].done = !tasks[index].done;
    this.setState({tasks: tasks});
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
          {this.state.tasks.map((task, index) => {
            return <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => this.changeDone(index)} />
                <span>{task.title}</span>
              </label>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
