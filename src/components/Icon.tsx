import { faCheckSquare, faHome, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Icon.scss";

interface IProps {
  color: string;
}

export const Icon = (props: IProps) => {
  return (
    <>
    {props.color === "red" &&
    <div className="wrongIcon">
      <FontAwesomeIcon icon={faTimesCircle} color={"red"} size={"5x"}/>

    </div>
  } 
      {props.color === "green" &&
      <div className="goodIcon">

        <FontAwesomeIcon icon={faCheckSquare} color={"green"} size={"5x"} />
      </div>

  } 

    </>
  );
}
