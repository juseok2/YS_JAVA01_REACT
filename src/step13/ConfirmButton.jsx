import { useState } from "react";

export function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  let date = Date();
  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  }
  return (
    <>
      <button onClick={handleConfirm}>
        {isConfirmed ? '확인됨' : '확인하기'}
      </button>
      <p>{date.getDay()}</p>
    </>
  );
}