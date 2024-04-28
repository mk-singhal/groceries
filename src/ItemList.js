import LineItem from './LineItem'

const ItemList = ({ items, handleChecked, handleDelete, search }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem 
          key={item.id}
          item={item}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          searchWord= {search.split(" ")}
        />
      ))}
    </ul>
  );
};

export default ItemList;
