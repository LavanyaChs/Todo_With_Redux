const mainReducer = (state = {
    list: [],
    status: [
        {
            name: "All",
            isActive: true
        },
        {
            name: "Active",
            isActive: false
        },
        {
            name: "Completed",
            isActive: false
        }]
}, action) => {

    switch (action.type) {
        case 'ADD_TODO': {
            let newList = state.list.slice();
            newList.push(action.todo)
            //alert(JSON.stringify(newList))
            return { ...state, list: newList }
        }
        case 'UPDATE_IS_CHECK': {

            let copyList = [...state.list];
            //action.todo
            copyList.map(x => {
                if (x.name === action.todo.name) {
                    x.isActive = action.checked;
                }
            })
            return { ...state, list: copyList }
        }
        case 'CHANGE_TODOS_IN_VIEW': {
            let newStatus = state.status.slice();
            newStatus.map(x => {
                if (x.name === action.selectedBtn.name) {
                    x.isActive = !x.isActive
                } else {
                    x.isActive = false;
                }
            })
            return { ...state, status: newStatus }
        }
        case 'DELETE_TODO': {
            let newTodos = state.list.filter(x => x.name != action.todo.name);
            return { ...state, list: newTodos }
        }
        case 'EDIT_TODO': {
            let copyList = [...state.list];
            copyList.map(x => {
                if (x.name === action.todo.name) {
                    x.name = action.newName;
                }
            })
            return { ...state, list: copyList }
        }
        default: return state;
    }
}
export default mainReducer;
