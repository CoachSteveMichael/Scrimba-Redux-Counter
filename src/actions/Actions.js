import React from "react";
import { store } from "../store/store";

function increment() {
  store.dispatch({
    type: "INCREMENT",
    payload: 1
  });
}

function decrement() {
  store.dispatch({
    type: "DECREMENT",
    payload: 1
  });
}

export { increment, decrement };
