import React, { useState } from "react";
import NavBarComp from "./components/navBarComp";
import AddAndMinusBtn from "./components/AddAndMinusBtn";

export default function App() {
  const arrItems = [
    { name1: "burger", count: 0 },
    { name1: "kofta", count: 0 },
    { name1: "7awashy", count: 0 },
  ];
  const [itemsState, setItemsState] = useState(arrItems);

  const handleIncrease = (addItem) => {
    const dataInfo = [...itemsState];
    const index = dataInfo.findIndex((item) => item.name1 === addItem.name1);
    dataInfo[index].count += 1;
    setItemsState(dataInfo);
  };

  const handleDecrease = (removeItem) => {
    const dataInfo = [...itemsState];
    const index = dataInfo.findIndex((item) => item.name1 === removeItem.name1);
    if (dataInfo[index].count > 0) {
      dataInfo[index].count -= 1;
      setItemsState(dataInfo);
    }
  };

  const handleDelete = (deleteItem) => {
    const dataInfo = itemsState.filter(
      (item) => item.name1 !== deleteItem.name1
    );
    setItemsState(dataInfo);
  };

  let totalItemsCount = 0;
  itemsState.forEach((item) => {
    totalItemsCount += item.count;
  });

  return (
    <div>
      <NavBarComp itemCount={totalItemsCount} />
      <AddAndMinusBtn
        itemsState={itemsState}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleDelete={handleDelete}
      />
    </div>
  );
}
