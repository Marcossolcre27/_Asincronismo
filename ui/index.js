const tabla = document.querySelector('#resultados');
const nameUser = document.querySelector('.name');
const form = document.getElementById('form');


async function getData(){
    try{
        const resp = await fetch('http://localhost:3000/clientes');
        const data = await resp.json();
        
        data.forEach((cliente) => {

            renderClient(cliente);
        
        });
    } 
    catch(e) {
        console.log(e);    
    }
}

function renderClient(cliente){
    const tr = document.createElement('tr');
    const tdActions = document.createElement('td');
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const deleteImg = document.createElement('img');
    deleteImg.setAttribute('class', 'tash');
    const editImg = document.createElement('img');
    editImg.setAttribute('class', 'edit');
   
    
    deleteImg.addEventListener('click', async ()=>{
      

        const deleteOptions = {
            method: 'DELETE',
            headers: { 
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            }
        };
       const response = await fetch('http://localhost:3000/clientes/'+ `${cliente.id}`, deleteOptions);

        clearTabla();
        getData();
        return response;
    }
    );

    editImg.addEventListener('click',  async ()=>{

        const userName = nameUser.value;

        const editClient = {
            name: userName
        };

        const putOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editClient)
        };
        const response = await fetch('http://localhost:3000/clientes/'+ `${cliente.id}`, putOptions );

        clearTabla();
        getData();
        return response;
    });

    //Load data
    tdId.innerText = cliente.id;
    tdName.innerText = cliente.name;
    

    //Apend
    tdActions.append(deleteImg,editImg);
    tr.append(tdId, tdName, tdActions);
    tabla.append(tr);
    
}


//agregar
form.addEventListener('submit', addClient);

async function addClient(e){
    
    e.preventDefault();

    const userName = nameUser.value;

    const newClient = {
        name: userName
    };

    //Post to Json
        
    const myClient = { method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newClient)
    };

    const response = await fetch('http://localhost:3000/clientes', myClient);
   

    clearTabla();
    getData();
    form.reset();
    return response;
}

function clearTabla(){
    tabla.innerHTML = '';
  
}
    
getData();

