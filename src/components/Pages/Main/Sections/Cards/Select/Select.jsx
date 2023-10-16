import "./select.scss";
import { useState } from "react";

const Select = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className="select">
      <div className="select__body">
        <div className="select__content icon-arrow-down">{props.title}</div>
        {open && (
          <div className="select__menu">
            <ul className="select__menu-list">
              {props.select.map((select, index) =>
                select === props.title ? null : (
                  <li key={index} className="select__menu-list-item">
                    {select}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
