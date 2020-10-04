import React, { useState } from "react";
import "@atlaskit/css-reset";
import Column from "./components/column";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";

const App = () => {
  const [state] = useState(initialData);

  const onDragEnd = (result) => {
    // TODO: Reorder column
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
