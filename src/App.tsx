import React, { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    // { id: 1, name: "comprar o pão", done: false },
    // { id: 2, name: "montar o pc", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  };
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => {
          return <ListItem key={index} item={item}></ListItem>;
        })}
      </C.Area>
    </C.Container>
  );
};

export default App;
