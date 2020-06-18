export const updateObject = (prevObj, updatedProps) => {
  return{
    ...prevObj,
    ...updatedProps
  }
}