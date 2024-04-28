import { FaTrashAlt } from "react-icons/fa";
import Highlighter from 'react-highlight-words';

const LineItem = ({ searchWord, item, handleChecked, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChecked(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleChecked(item.id)}
      >
        { 
          searchWord != null ? 
            (<Highlighter
              highlightClassName="highlight-text"
              searchWords={searchWord}
              textToHighlight={item.name}
            />) : item.name+'%%'
        }
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.name}`}
      />
    </li>
  );
};

export default LineItem;