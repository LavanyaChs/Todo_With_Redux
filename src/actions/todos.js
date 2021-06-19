export const addTodo = (todo) => (dispatch, getState) => {
    console.log(getState());
    dispatch({ type: 'ADD_TODO', todo })
}
//NOT USING

/**
 *
export const addToDoAction = (todo) => {
    return (
        {
            type: 'ADD_TODO', todo
        }
    )


 */