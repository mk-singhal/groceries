import ItemList from "./ItemList";

const Content = ({items, handleChecked, handleDelete, search}) => {
  
  return (
    <>
      {items.length ? (
        <ItemList 
          items= {items}
          handleChecked= {handleChecked}
          handleDelete= {handleDelete}
          search= {search}
        />
      ) : (
        <p style={{marginTop: '2rem'}}>Your list is empty.</p>
      )}
    </>
  );
};
export default Content;
