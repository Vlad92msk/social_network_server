import React, { PropsWithChildren } from 'react'
import { Draggable } from 'react-beautiful-dnd'


interface DigitalCardDraggableProps extends PropsWithChildren {
  id: number
  index: number
}

/**
 * Карточка для ФОТО/ВИДЕО
 */
export const DigitalCardDraggable: React.FC<DigitalCardDraggableProps> = (props) => {
  const { index, id, children } = props

  return (
    <Draggable draggableId={`item[${id}]`} index={index}>
      {({
        draggableProps,
        dragHandleProps,
        innerRef,
      }, snapshot) => (
        <div
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  )
}
