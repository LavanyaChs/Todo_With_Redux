export const addTodo = (todo) => (dispatch, getState) => {
    console.log(getState());
    dispatch({ type: 'ADD_TODO', todo })
}

/**
 *
export const addToDoAction = (todo) => {
    return (
        {
            type: 'ADD_TODO', todo
        }
    )


 */