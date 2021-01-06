import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { IQuestion } from './../interfaces/IQuestion';

interface IProps {
  text: string;
}

export const CustomTextField = (props: IProps) => {
  return (
    <>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={6}
          size={"medium"}
          value={props.text}
          inputProps={{style: {fontSize: 20}}}
        />
    </>
  );
}
