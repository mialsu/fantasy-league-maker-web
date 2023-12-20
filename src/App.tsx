import { useEffect } from "react";

import CustomRouter from "./router";
import { httpGetEnums } from "./services/enums";

function App() {
  useEffect(() => {
    httpGetEnums().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <CustomRouter />
    </>
  );
}

export default App;
