import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IQuestion } from './../interfaces/IQuestion';
import { questions } from '../consts/questions';
import { answers } from '../consts/answers';
import { Questioner } from './Questioner';
import { Route, Switch } from 'react-router-dom';
import { Question } from './Question';
export const App = () => {
  const [data, setData] = React.useState<IQuestion[]>([]);
  React.useEffect(() => {
    let q = questions;
    let ans = answers.split('\n');
    let p = ans.shift();
    let qa = q.split('\n');
    for(let i = 1, j = 0; i < qa.length - 1; i += 5, j += 1) {
      const question : IQuestion = {questionNumber : j, question: qa[i].split('.')[1], answers: [qa[i + 1], qa[i + 2], qa[i + 3], qa[i + 4]] ,correctAnswers: ans[j].split(" ")[1]  }
      setData(data => [...data, question])
    }
  }, []);
  return (
    <>
      <Questioner questions={data}/>
    </>
  );
}

export default App;
