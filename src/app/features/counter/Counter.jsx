import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section className="bg-gray-200 p-10 flex flex-col  rounded-md items-center gap-5">
      <p className="text-5xl ">{count}</p>
      <div className="flex gap-2">
        <button
          className="bg-green-600 px-5 py-2 text-white rounded-md"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-red-600 py-2 px-5 text-white rounded-md"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>

      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        className="grid place-items-center w-[80px] h-[50px]"
      />
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(incrementByAmount(addValue))}
          className="bg-green-500 py-1 px-3 text-white rounded-md"
        >
          Add Amount
        </button>
        <button
          className="bg-transparent border-2 border-black py-1 px-3  rounded-md focus:bg-black focus:text-white"
          onClick={resetAll}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
