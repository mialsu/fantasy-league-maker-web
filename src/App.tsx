import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomRouter from "./router";
import { fetchEnums } from "./features/enums/enumActions";
import { AppDispatch } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEnums());
  }, [dispatch]);

  return (
    <>
      <CustomRouter />
    </>
  );
}

export default App;
