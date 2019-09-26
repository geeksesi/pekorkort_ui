const OptionsReduces = (state = {
    new_only: false,
    random: false,
    wrongs: false,
    emptys: false,
    result: 0,
    length: 15,
    categories: []
}, action) => {
    // state = {
    //     new_only: false,
    //     random: false,
    //     wrongs: false,
    //     emptys: false,
    //     result: 0,
    //     length: 15,
    //     categories: []
    // }
    switch (action.type) {
        case 'OPTION_SUBMITE':
            return state;
            break;
        case 'ADD_CATEGORY':
            const tmp_obj = { category_id: action.category_id, category_name: action.category_name };
            // let tmp_categories= state.categories;
            // state.categories.push(tmp_obj);
            return state;
            break;
        case 'REMOVE_CATEGORY':
            let categories_tmp = state.categories;
            categories_tmp.splice(action.category_id, 1);
            state.categories = categories_tmp;
            return state;
            break;
        case 'RANDOM_CHECK':
            state.random = action.value;
            return state;
            break;
        case 'NEW_CHECK':
            state.new_only = action.value;
            return state;
            break;
        case 'WRONGS_CHECK':
            state.wrongs = action.value;
            return state;
            break;
        case 'EMPTYS_CHECK':
            state.emptys = action.value;
            return state;
            break;
        case 'LENGTH_UPDATE':
            state.length = action.value;
            return state;
            break;
        case 'RESULT_VALUE':
            state.result = action.value;
            return state;
            break;
        default:
            return state;
    }
}

export default OptionsReduces;