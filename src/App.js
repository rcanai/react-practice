import React, { Component } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

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
      // タスク追加用のデータを設定
      text: '',
    };
    this.changeDone = this.changeDone.bind(this);
    this.doneCount = this.doneCount.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.addTask = this.addTask.bind(this);
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

  // タスク追加用の文字列を更新
  updateValue(event) {
    this.setState({
      text: event.target.value,
    });
  }

  // タスクを追加
  addTask() {
    if (!this.state.text) {
      // 空文字は無効とする
      return;
    }
    this.setState((state) => {
      const maxId = Math.max.apply(
        null,
        state.tasks.map(t => t.id),
      );
      const tasks = state.tasks.map(task => ({ ...task }));
      tasks.push({
        id: maxId + 1,
        title: state.text,
        done: false,
      });
      return { tasks };
    });
    this.setState({ text: '' });
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
        <TaskForm
          text={this.state.text}
          updateValue={this.updateValue}
          addTask={this.addTask}
        />
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
