export function Grading(props){
  let totalScore = props.Eng + props.Math + props.Kor;
  let avgScore = Math.floor((props.Eng + props.Math + props.Kor)/3);
  let fail = props.Eng >= 40 && props.Math >= 40 && props.Kor >= 40 ? "합격":"불합격";
  let pass = avgScore>=60 ? "합격":"불합격";
  return(
    <>
    <p>총점: {totalScore}</p>
    <p>평균: {avgScore}</p>
    <p>과락: {fail}</p>
    <p>{pass}</p>
    </>
  );
}