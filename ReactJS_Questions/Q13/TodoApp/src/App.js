import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import "./App.css";
import { useState } from "react";
import "react-dropdown/style.css";

const db = new Dexie("MarketList");
db.version(1).stores({ items: "++id,name,completed" });

const App = () => {
  const [search, setsearch] = useState("");
  const [error, seterror] = useState("");
  const [show, setshow] = useState(false);
  let duplicate = false;
  const allItems = useLiveQuery(() => db.items.toArray(), []);
  if (!allItems) return null;

  const addItemToDb = async (event) => {
    event.preventDefault();
    let name = document.querySelector(".item-name").value;
    for (var i = 0; i < allItems.length; i++) {
      if (allItems[i].name === name) {
        duplicate = true;
        seterror("Duplicate items are not allowed");
        break;
      } else {
        duplicate = false;
        seterror("");
      }
    }

    if (duplicate === false) {
      db.items.add({
        name,
        completed: false,
      });
    }
  };

  const editItem = async (id, itemp) => {
    // event.preventDefault();
    console.log(itemp);
    const name = document.querySelector(".item-name").value;
    if (name === "" || name === null) {
    } else if (itemp === true) {
      seterror("You can not edit the completed todo");
    } else {
      await db.items.update(id, { name: name });
      seterror("");
    }
  };

  const removeItemFromDb = async (id) => {
    await db.items.delete(id);
  };

  const markAsPurchased = async (id, event) => {
    if (event.target.checked) {
      await db.items.update(id, { completed: true });
    } else {
      await db.items.update(id, { completed: false });
    }
  };

  const check = () => {
    setshow(true);
  };

  const searching = (event) => {
    setsearch(event.target.value);
    setshow(false);
  };

  let filtered =
    search.length === 0
      ? allItems
      : allItems.filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        );

  let ans = allItems.filter((c) => c.completed === false);

  console.log(ans);
  const pro = ans.map(({ id, name, completed }) => (
    <div className="row" key={id}>
      <p className="col s7">
        <label className="cn">
          <input
            type="checkbox"
            checked={completed}
            onChange={(event) => markAsPurchased(id, event)}
          />
          <span className="white-text">{name}</span>
        </label>
      </p>
      <i
        onClick={() => editItem(id, completed)}
        className="col s2 material-icons edit-button"
      >
        edit
      </i>
      <i
        onClick={() => removeItemFromDb(id)}
        className="col s2 material-icons delete-button"
      >
        delete
      </i>
    </div>
  ));

  const itemData = filtered.map(({ id, name, completed }) => (
    <div className="row" key={id}>
      <p className="col s7">
        <label className="cn">
          <input
            type="checkbox"
            checked={completed}
            onChange={(event) => markAsPurchased(id, event)}
          />
          <span className="white-text">{name}</span>
        </label>
      </p>
      <i
        onClick={() => editItem(id, completed)}
        className="col s2 material-icons edit-button"
      >
        edit
      </i>
      <i
        onClick={() => removeItemFromDb(id)}
        className="col s2 material-icons delete-button"
      >
        delete
      </i>
    </div>
  ));

  return (
    <div className="container">
      <h3 className="title">To do App</h3>
      <form className="add-item-form" onSubmit={(event) => addItemToDb(event)}>
        <input
          type="text"
          className="item-name white-text txt"
          placeholder="Write todo here.."
          required
        />
        <button className="btn">Add todo</button>
        <br />
        <p style={{ color: "red" }}>{error.length > 0 && error}</p>
      </form>

      <input
        type="search"
        id="searchbar"
        placeholder="search here.."
        value={search}
        onChange={(e) => searching(e)}
      />
      <button onClick={check} className="btn">
        In progress
      </button>
      {show && (
        <div className="card darken-1">
          <div className="card-content row">{pro}</div>
        </div>
      )}
      {filtered.length > 0 && (
        <div className="card darken-1">
          <div className="card-content row">{itemData}</div>
        </div>
      )}
    </div>
  );
};

export default App;
