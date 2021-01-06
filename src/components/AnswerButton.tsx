import { Button } from '@material-ui/core';
import React from 'react';
import "./AnswerButton.scss";
interface IProps {
  text: string;
  onClick: any;
  choosed: boolean;
}

export const AnswerButton = (props: IProps) => {
  return (
    <>
          <Button variant="contained" className={props.choosed ? "activeButton" : "defaultButton"} color={"primary"} style={{ fontSize: '15px' }} onClick={(e) => props.onClick(props.text)}>
            {props.text}
          </Button>
    </>
  );
}
