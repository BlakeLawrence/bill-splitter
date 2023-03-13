import React, { useState } from "react";

function Split() {
  const [input, setInput] = useState("");
  const [bill, setBill] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [total, setTotal] = useState(null);

  function billAmount() {
    setBill(input);
    setInput("");
  }
  function calculateTotal() {
    setTotal(bill / numberOfPeople);
  }

  return (
    <div className="w-full h-screen bg-gray-400">
      <div className="flex justify-center pt-2 ml-4">
        <label htmlFor="input" className="text-xl">
          How much was the bill?
        </label>
        <input
          value={input}
          className="ml-4 px-2 py-0.5 rounded-lg bg-white"
          type="text"
          placeholder="enter amount"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-2 py-0.5 bg-white rounded-lg ml-2"
          onClick={billAmount}
        >
          submit
        </button>
      </div>
      {bill && <h2 className="text-white">Bill total: £{bill}.00</h2>}
      {bill && (
        <div>
          <h2>How many people to split bill by?</h2>
          <input
            type="number"
            placeholder="enter number"
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
          <button onClick={calculateTotal}>submit</button>
          {total && <h3>each person owes: £{total}</h3>}
        </div>
      )}
    </div>
  );
}

export default Split;
