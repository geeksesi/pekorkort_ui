const endpoint = "http://localhost/wordpress/wp-json/pekorkort-exam-api/v1/";

let questions = {};
let user_access = false;
let categories = [];


function make_encrypte(array_data) {
    $json = JSON.stringify(array_data);
}

function token_generator(user_id) {
    return "cmZsNXVnVGttak1qNVJrTmQwQmIxTUd4ZkErUHVrNHZLWmVXQ2w4b0tjbz0=";
}

// *  token         [string]
// *  new_only      [boolean]
// *  emptys        [boolean]
// *  wrongs        [boolean]
// *  answer_result [boolean]
// *  random        [boolean]
// *  length        [int]
// *  category      [string]
function make_exam(options) {

    const url = endpoint + "make_exam";
    const token = token_generator();

    const data = new URLSearchParams()

    data.append("token", token);
    data.append("new_only", options.new_only);
    data.append("random", options.random);
    data.append("emptys", options.emptys);
    data.append("wrongs", options.wrongs);
    data.append("answer_result", options.result);
    data.append("length", options.length);
    data.append("category", JSON.stringify(options.categories));

    fetch(url, {
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        body: data,
    })
        .then(res => { return res.json() })
        .then(data => {
            console.log(data);
            // const arr = JSON.parse(data);
            // categories.push(...arr.data)
            // cb(categories);
        })
        .catch(err => console.log(err));

}


function get_categoies(cb) {
    const url = endpoint + "get_categories";
    const token = token_generator();
    // const data = new FormData();
    // data.append('token', token);
    const data = new URLSearchParams()
    data.append("token", token);
    // console.log(data);
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        body: data,
    })
        .then(res => { return res.json() })
        .then(data => {
            const arr = JSON.parse(data);
            categories.push(...arr.data)
            cb(categories);
        })
        .catch(err => console.log(err));

}


function get_user_access() {

}


function finish_exam() {

}


export {
    make_exam,
    get_categoies,
    get_user_access,
    finish_exam,

}