import "@atlaskit/css-reset";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "./components/Column/Column";
import { BASE_URL } from "./constants";
import initialData from "./initial-data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  const [state, setState] = useState(initialData);
  const [columns, setColumns] = useState({ state:'pending' });
  
  useEffect(() => {
    getColumns()
    
  }, [BASE_URL]);
  
  const getColumns = (showTasks = true) => {
    let params = `?`
    
    if (showTasks) {
      params += `withTask=true`
    }
    
    fetch(`${BASE_URL}/column${params}`)
    .then(response => response.json())
    .then(value => setColumns({ state: "resolved", value }))
    .catch(error => setColumns({ state: "rejected", error }));
  }

  const onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
    ? destination.index / Object.keys(state.tasks).length
    : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };
  
  const onDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId } = result;
    
    if (!destination) return;
    
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
      ) {
        return;
      }
      
      const start = state.columns[source.droppableId];
      const finish = state.columns[destination.droppableId];
      
      if(start === finish){
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        
        const newColumn = {
          ...start,
          taskIds: newTaskIds,
        };
        
        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn,
          },
        };
        
        setState(newState);
        return 
      }
      
      // Moving from one list to another
      const startTaskIds = Array.from(start.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStart = { 
        ...start,
        taskIds: startTaskIds
      }
      
      const finishTaskIds = Array.from(finish.taskIds)
      finishTaskIds.splice(destination.index, 0, draggableId)
      const newFinish = { 
        ...finish,
        taskIds: finishTaskIds
      }
      
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      
      setState(newState);
      
      
    };
    
    return (
      <DragDropContext onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
      <Container>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
        
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
      </Container>
      </DragDropContext>
      );
    };
    
    export default App;
    