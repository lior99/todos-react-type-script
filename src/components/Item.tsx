import React from 'react'
import { ItemProps } from '../interfaces/interfaces';

const Item: React.FC<ItemProps> = (props) =>  {
  const { onChange } = props;
  const { description, completed, id } = props.item;

  const className = completed ? 'completed' : '';

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    onChange({ completed: target.checked, id });
  }

  return (
    <div className="list-item">
      <input type="checkbox" onChange={onCheckboxChange} />
      <div className={className}>{ description }</div> 
    </div>
  )

}

export default Item;