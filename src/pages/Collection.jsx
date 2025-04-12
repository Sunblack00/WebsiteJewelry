import React from "react";
import ListCollection from "../components/ListCollection";
import collection from "../../data/collection.json";

export default function Collection() {
  return (
    <>
      <p className="capitalize text-5xl font-semibold text-center mt-10">
        Collection
      </p>
      <ListCollection collections={collection}></ListCollection>
    </>
  );
}
