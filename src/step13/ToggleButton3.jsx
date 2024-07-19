import { useToggle } from "./useToggle";

export function ToggleButton3() {
  
  const[text,func] = useToggle(true)
  const[text2,func2] = useToggle(true)
  const[text3,func3] = useToggle(true)
  return (
    <>
      <button onClick={(e) => func(e)}>
        {text}
      </button>
      <button onClick={func2}>
        {text2}
      </button>
      <p onClick={func3}>
        {text3}
      </p>
    </>
  );
}