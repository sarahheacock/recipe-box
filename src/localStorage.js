//make sure that we
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('recipes');
    if (serializedState === null) {
      return undefined;
    }
    if (JSON.parse(serializedState) !== Array) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
