import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Helmet } from "react-helmet";

const HomePagee = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="Puedes encontrar fotos de animales domésticos muy bonitos"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};

export const Home = React.memo(HomePagee, (prevProps, props) => {
  return prevProps.categoryId === props.id;
});
