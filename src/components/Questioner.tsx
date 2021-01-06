import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { IQuestion } from './../interfaces/IQuestion';
import { Question } from './Question';

interface IProps {
  questions: IQuestion[];
}

export const Questioner = (props: IProps) => {
  let history = useHistory();

  const onCheckClick = () => {
    const nextQuestion = Math.floor((Math.random() * 599));
    history.push("/question/" + nextQuestion);
  }
  return (
    <>
      <Switch>
          <Route path="/question/:id">
            <Question id={1} questions={props.questions} onCheckClick={onCheckClick}/>
          </Route>
      </Switch>
    </>
  );
}
