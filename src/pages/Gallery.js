import React, { useContext } from "react";
import DragItem from "../components/DragItem";
import { GridItem } from "../components/Grid";
import GridContext from "../containers/GridContextContainer";

function Gallery() {
  const { items, moveItem } = useContext(GridContext);

  return (
    <div className="App">
      <h2>Draggable gallery using react</h2>
      <div className='grid'>
        {items.map(item => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
              <img className='grid-image' src={item.src} />
            </GridItem>
          </DragItem>
        ))}
      </div>
    </div>
  );
}

export default Gallery;