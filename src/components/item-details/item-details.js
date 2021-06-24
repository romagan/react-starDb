import React from 'react';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
        <span className="term">{ label }</span>
        <span>{ item[field] }</span>
    </li>
  )
}

const ItemDetails = (props) => {
  const { item, image, children } = props;

  if (!item) {
    return <span>Select a person from a list</span>;
  }

  const { name } = item;

  return (
      <div className="person-details card">
          <img className="person-image" src={ image } />

          <div className="card-body">
              <h4>{ name }</h4>
              <ul className="list-group list-group-flush">
                  {React.Children.map(children, (child) => {
                    return React.cloneElement(child, { item })
                  })}
              </ul>
          </div>
      </div>
  );
}

export default ItemDetails;
export { Record };
