import React from 'react'

interface ItemProps {
  description: string, 
  completed: boolean,
  onChange: Function,
  id: string
}

const Item: React.FC = (props: ItemProps) =>  {
  const { description, completed, onChange, id } = props;

  const className = completed ? 'completed' : '';

  const onCheckboxChange = ({ target }) => {
    onChange({ completed: target.checked, id });
  }

  return (
    <>
      <input type="checkbox" onChange={onCheckboxChange} id={id} />
      <div className={className}>{ description }</div> 
    </>
  )

}

export default Item;