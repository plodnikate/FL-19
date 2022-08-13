let click_value = 0; 
const time = 5000;

function click_add_one() {
    click_value++;
}

function click_count() {
    click_value = 0;
    document.getElementById('click_btn').onclick = click_add_one;
}

function click_result() {
    alert(click_value);

    if (sessionStorage.result < click_value) {
        sessionStorage.result = click_value;
        sessionStorage.nickname = sessionStorage.new_nickname;
    }

    if (localStorage.result < click_value) {
        localStorage.result = click_value;
        localStorage.nickname = sessionStorage.new_nickname;
    }
}

function start() {
    try { 
        const nickname = document.getElementById('nickname').value;

        if (nickname === '') { 
            throw 'Empty';
        }

        setTimeout(click_result, time);
        click_count();
        sessionStorage.setItem('new_nickname', nickname);
    } catch(err) {
        alert(err + ' nickname');
    }
}

function show_best_result() {
    alert('Best result is: ' + sessionStorage.result);
}

function show_best_result_all_time() {
    alert('Best result for the whole time is:'+ localStorage.result + ' by ' + localStorage.nickname);
}

function clear_best_result() {
    sessionStorage.setItem('result', 0);
    sessionStorage.setItem('nickname', null);
    sessionStorage.setItem('new_nickname', null);
    alert('Best result is cleared');
}

function clear_best_result_all_time() {
    localStorage.setItem('result', 0);
    localStorage.setItem('nickname', null);
    alert('Best result for whole time is cleared');
}

function init() {
    if (!sessionStorage.result) {
        sessionStorage.setItem('result', 0);
        sessionStorage.setItem('nickname', null);
    }

    if (!localStorage.result) {
        localStorage.setItem('result', 0);
        localStorage.setItem('nickname', null);
    }
}

init();
document.getElementById('start_btn').onclick = start;
document.getElementById('best_result_btn').onclick = show_best_result;
document.getElementById('best_result_all_time_btn').onclick = show_best_result_all_time;
document.getElementById('clear_best_result_btn').onclick = clear_best_result;
document.getElementById('clear_best_result_all_time_btn').onclick = clear_best_result_all_time;


