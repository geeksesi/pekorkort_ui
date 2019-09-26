const SELECT_ANSWER = (value) => {
    return {
        type: 'SELECT_ANSWER',
        value
    };
};

const NEW_QUEST = () => {
    return {
        type: 'NEW_QUEST',
    };
};

export {
    SELECT_ANSWER,
    NEW_QUEST,
}
