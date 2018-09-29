export function changeValue({ target: { value } }) {
  return {
    type: "VALUE_CHANGED",
    payload: value,
  }
}