import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/Slices/CounterSlice";
import { decrement } from "../../Redux/Slices/CounterSlice";
const Counter = () => {
  const counterGlobalState = useSelector((store) => store.counter.counter);

  const dispatch = useDispatch();
  const handleincrement = () => {
    dispatch(increment());
  };
  const decrementhandler = () => {
    if (counterGlobalState > 0) {
      dispatch(decrement());
    }
  };

  return (
    <div className="row ">
      <div className="col-lg-2 d-flex justify-content-between justify-md-content-center mt-5">
        <button
          onClick={handleincrement}
          className="btn btn-primary"
          style={{ width: "2rem" }}
        >
          +
        </button>
        <p>{counterGlobalState}</p>
        <button
          onClick={decrementhandler}
          className="btn btn-primary "
          style={{ width: "2rem" }}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
