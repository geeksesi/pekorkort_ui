const OptionsReduces = (state = {
    id: 0,
    picture: "",
    quest: "",
    answers: [],
    correct: 0,
}, action) => {

    switch (action.type) {
        case 'SELECT_ANSWER':
            state.length = action.value;
            return state;
            break;
        case 'NEW_QUEST':
            state = state;
            return state;
            break;
        default:
            return state;
    }
}

export default OptionsReduces;