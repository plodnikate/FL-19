/*eslint no-magic-numbers: */
const url = 'https://jsonplaceholder.typicode.com/users';
const buttonLoadByJS = document.getElementsByClassName('by-js')[0];
const buttonLoadByFetch = document.getElementsByClassName('by-fetch')[0];
const loading = document.getElementsByClassName('loading')[0];

buttonLoadByJS.onclick = () => {
    loading.classList.remove('hidden');
    loadByJS();
};
buttonLoadByFetch.onclick = () => {
    loading.classList.remove('hidden');
    loadByFetch();
};

function loadByJS(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
        const parsed = JSON.parse(xhr.response)
        for(let i=0; i<10; i++){
            let user = document.createElement('div');
            document.getElementsByClassName('left-column')[0].appendChild(user);
            user.append(parsed[i].name)
        }
        loading.classList.add('hidden');
    }
    xhr.send();
}

function loadByFetch(){
    fetch(url)
    .then((apidata) => {
        return apidata.json();
    })
    .then((actualdata) => {
        for(let i=0; i<10; i++){
            let user = document.createElement('div');
            let userName = document.createElement('div');
            let deleteButton = document.createElement('button');
            let editButton = document.createElement('button');
            editButton.innerHTML = 'edit';
            deleteButton.innerHTML = 'delete';
            document.getElementsByClassName('right-column')[0].appendChild(user);
            deleteButton.addEventListener('click', () => removeItem(user, i+1), false);
            editButton.addEventListener('click', () => put(user, i+1, editButton, userName), false);
            userName.append(actualdata[i].name)
            user.append(userName)
            user.append(deleteButton)
            user.append(editButton)
        }
        loading.classList.add('hidden');
    })
    .catch((error) => {
        console.log(`The error ${error}`)
    })
}

function removeItem(item, id){
    loading.classList.remove('hidden');
    fetch(url + '/' + id, {
        method: 'DELETE'
      }).then(() => {
        loading.classList.add('hidden');
      }).catch(err => {
        console.error(err)
      })
      
    item.remove();
    alert(`User with id - ${id} was deleted`)
}

function put(item, id, editButton, userName){
    let newName = document.createElement('input')
    item.append(newName);
    let saveButton = document.createElement('button');
    saveButton.innerHTML = 'save';
    editButton.classList.add('hidden');
    item.append(saveButton);
    saveButton.addEventListener('click', () => saveChange(id, newName, saveButton, editButton, userName), false);
    }

    function saveChange(id, newName, saveButton, editButton, userName){
        loading.classList.remove('hidden');
        fetch(url + '/' + id, {
            method: 'PUT',
            body: JSON.stringify({
            id: id,
            name: newName.value
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8'
            }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            loading.classList.add('hidden');
            saveButton.classList.add('hidden');
            editButton.classList.remove('hidden');
            newName.classList.add('hidden');
            userName.innerHTML = newName.value;
    }

