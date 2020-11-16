import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    window
      .fetch(
        "https://petgramm-server-vercel-leon-9ep5ag4so.vercel.app/categories"
      )
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  const renderList = () => (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return renderList();
};
