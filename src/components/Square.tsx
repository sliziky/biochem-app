import "./Square.scss";
interface IProps {
  color: string;
}

export const Square = (props: IProps) => {
  return (
    <>
    {props.color === "red" &&
    <div className="squareRed">
      <img/>
    </div>
  } 
      {props.color === "green" &&
    <div className="squareGreen">
      <img/>
    </div>
  } 

    </>
  );
}
