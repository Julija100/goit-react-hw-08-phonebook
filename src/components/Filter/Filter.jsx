import style from "../Filter/Filter.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/ContactsActions";


function Filter ({ value }) {
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label>
      <p className={style.filterLitleTitle}>Find contacts by name:</p>
      <input
        value={value}
        className={style.filterInput}
        type="text"
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filter;
