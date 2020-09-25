import React, { useState, useEffect } from 'react';



const LfuiWrapper = ({children, script}) => {
  const [js, setJs] = useState("");
  
  useEffect(() => {
    setJs(script)
  }, []);
  
  return (
    <article className="lfui-theme">
      
      {children}
      <script>{eval(js)}</script>
      
    </article>
    
  )
};

export default LfuiWrapper;

