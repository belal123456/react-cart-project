import React from "react";

export default function AddAndMinusBtn({
  itemsState,
  handleIncrease,
  handleDecrease,
  handleDelete,
}) {
  return itemsState.map((item) => (
    <div key={item.name1} className="m-4 p-4 border rounded">
      <h1 className="bg-blue-500 hover:bg-red-400 text-white m-1 p-1 text-center">
        {item.name1}
      </h1>
      <div className="flex justify-center items-center">
        <button
          className="btn bg-blue-500 hover:bg-red-400 text-white m-1 p-2"
          onClick={() => handleDecrease(item)}
        >
          Remove
        </button>
        <span className="mx-4">{item.count}</span>
        <button
          className="btn bg-green-500 hover:bg-gray-400 text-white m-1 p-2"
          onClick={() => handleIncrease(item)}
        >
          Add
        </button>
        <button
          className="btn bg-red-500 hover:bg-red-700 text-white m-1 p-2"
          onClick={() => handleDelete(item)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
}
