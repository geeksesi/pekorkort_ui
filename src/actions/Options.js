const OPTION_SUBMITE = () => {
    return {
        type: 'OPTION_SUBMITE',
    };
};

const ADD_CATEGORY = (category_id, category_name) => {
    return {
        type: 'ADD_CATEGORY',
        category_id,
        category_name,
    };
};


const REMOVE_CATEGORY = (category_id) => {
    return {
        type: 'REMOVE_CATEGORY',
        category_id,
    };
};


const RANDOM_CHECK = (value) => {
    return {
        type: 'RANDOM_CHECK',
        value,
    };
};

const NEW_CHECK = (value) => {
    return {
        type: 'NEW_CHECK',
        value,
    };
};


const WRONGS_CHECK = (value) => {
    return {
        type: 'WRONGS_CHECK',
        value,
    };
};


const EMPTYS_CHECK = (value) => {
    return {
        type: 'EMPTYS_CHECK',
        value,
    };
};


const LENGTH_UPDATE = (value) => {
    return {
        type: 'LENGTH_UPDATE',
        value,
    };
};


const RESULT_VALUE = (value) =>{
    return {
        type: 'RESULT_VALUE',
        value,
    };
}


export {
    OPTION_SUBMITE,
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    RANDOM_CHECK,
    NEW_CHECK,
    WRONGS_CHECK,
    EMPTYS_CHECK,
    LENGTH_UPDATE,
    RESULT_VALUE,
}
