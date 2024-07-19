import { useState } from "react"

export function Compo(){
  const[abc,steAbc] = useState(info);
  return(
    {
      info:<p>상품정보</p>,
      shop:<p>가게정보</p>,
      refund:<p>환불정보</p>
    },[abc]
  );
}