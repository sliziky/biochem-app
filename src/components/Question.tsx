import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IQuestion } from './../interfaces/IQuestion';
import { AnswerButton } from './AnswerButton';
import { CustomTextField } from './TextField';
import "./Question.scss";
import { Button } from '@material-ui/core';
import { Square } from './Square';
import { Icon } from './Icon';
interface IProps {
  id: number;
  questions: IQuestion[];
  onCheckClick: any;
}

export const Question = (props: IProps) => {
  let { id } : any = useParams();
  let history = useHistory();
  const [answered, setAnswered] = React.useState<boolean>(false);

  const [chosenAnswers, setChosenAnswers] = React.useState<boolean[]>([false, false, false, false]);
  const question = props.questions[id - 1];
  const answers = question !== undefined ? question.answers : [];
  const onButtonClick = (answer: any) => {
    console.log(answer);
    const correctAnswers = question.correctAnswers;
    const index = indexOfAnswer(answer);
    const old = [...chosenAnswers];
    old[index] = !old[index];
    setChosenAnswers(old);
  }

  const indexOfAnswer = (answer: string) => {
    const firstChar = answer.charAt(0);
    switch(firstChar) {
      case 'a': return 0;
      case 'b': return 1;
      case 'c': return 2;
      case 'd': return 3;
    }
    return 0;
  }

  //const answeredCorrectly

  const onCheckButtonClicked = () => {
    if (answered) {
      setChosenAnswers([false, false, false, false]);
      setAnswered(false);
      const nextQuestion = Math.floor((Math.random() * 599));
      history.push("/question/" + (parseInt(id) + 1));
    }
    else {
      setAnswered(true);
    }
  }

  return (<>
    {question === undefined && <h3>Yikes</h3>}
    {question !== undefined && 
    <div className="mainStack">
      <h2>Question number: {id}</h2>
      {question !== undefined && <CustomTextField text={question.question}/>}
      {answers.map((answer, index) => {
        const isAnsweredCorrectly = question.correctAnswers[index] === "S" && chosenAnswers[index] 
          || question.correctAnswers[index] === "N" && !chosenAnswers[index]; 
        return (
        <div className="buttonRow">
          {answered && <Icon color={isAnsweredCorrectly ? "green" : "red"}/> }
          <AnswerButton text={answer} onClick={onButtonClick} choosed={chosenAnswers[index]}/>
          {/* {answered && <Square color={question.correctAnswers[index] === 'S' ? "green" : "red"}/> } */}
        </div>
        )
      })}
      <Button variant="contained" onClick={onCheckButtonClicked} color={"primary"} style={{ fontSize: '15px', width: '100px', marginLeft: '40%', height: '60px', borderRadius: '35%', marginTop: '20px'}}>
        {answered ? "Next" : "Check"}
      </Button>
    </div>
    }
    </>
  );
}
