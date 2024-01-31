import { ADD, DELETE, EDITED, PRIO_CHANGE } from "./action-identifiers";

export function Add() {
  return {
    type: ADD,
  };
}
export function Delete() {
  return {
    type: DELETE,
  };
}

export function ProorityChange() {
  return {
    type: PRIO_CHANGE,
  };
}

export function Edited() {
  return {
    type: EDITED,
  };
}
