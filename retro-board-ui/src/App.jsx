import React, { useState } from "react";
import "@atlaskit/css-reset";
import Column from "./components/column";
import initialData from "./initial-data";

const App = () => {
  const [state, setState] = useState(initialData);

  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });
};

export default App;
