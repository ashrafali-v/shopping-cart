import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Users() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch('http://localhost:3027/api/user');
    const items = await data.json();
    setItems(items);
    console.log(items);

  }
  return (
    <div>
      {
        items.map(item => (
          <h3 key={item._id}>
            <Link to={`/users/${item._id}`}>{item.name}</Link>
          </h3>
        ))
      }

    </div>
  );
}

export default Users;
