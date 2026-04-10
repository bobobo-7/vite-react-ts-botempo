import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="mb-6 inline-flex rounded-[5px] border-2 border-transparent bg-(--accent-bg) px-2.5 py-1.25 text-base font-(--mono) text-(--accent) transition-colors hover:border-(--accent-border) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      Count is {count}
    </button>
  );
}

export default Counter;
