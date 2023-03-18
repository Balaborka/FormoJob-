import React from 'react';

interface ListItem {
  id: number;
  text: string;
}

interface Props {
  itemsSource: ListItem[];
}

function ListBox(props: Props) {
  const { itemsSource } = props;

  return (
    <ol>
      {itemsSource.map((itemsSource) => (
        <li key={itemsSource.id}>{itemsSource.text}</li>
      ))}
    </ol>
  );
}

export default ListBox;