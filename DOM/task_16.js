// Write your code below:

// Write your code below:

function handleFormSubmit(event) {
    event.preventDefault();

    // console.log(event.target.username.value);
    // console.log(event.target.email.value)
    // console.log(event.target.phone.value)
    let myobj = {
        username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value};

    //console.log(myobj);

    let myobj_serial = JSON.stringify(myobj);
    
    //console.log(myobj_serial);
    localStorage.setItem(myobj.email,myobj_serial)
    
    
    const string = `${myobj.username}-${myobj.email}-${myobj.phone}`
    // console.log(string)

    const newli = document.createElement('li');
     
    const del_but = document.createElement('button');
    del_but.id = "db"
    del_but.className = "db"
    const del_text = document.createTextNode('Delete');

    // EDIT Button

    const edit_but = document.createElement('button');
    edit_but.id = "eb";
    edit_but.className = "eb";
    const edit_text = document.createTextNode("Edit")




    del_but.appendChild(del_text) ;
    edit_but.appendChild(edit_text);


    const newlitext = document.createTextNode(string);
    newli.appendChild(newlitext);
    newli.appendChild(del_but);
    newli.appendChild(edit_but);
    // console.log(newli)

    const list = document.querySelector("ul")
    list.appendChild(newli)
    
    //console.log(list)

    const temp = document.querySelector('ul') ;
    //console.log(temp)

  }

//module.exports = handleFormSubmit ;

const listings = document.querySelector('ul')

if (listings){

listings.addEventListener('click',function(event){
    if(event.target.classList.contains('db')){
        const todel = event.target.parentElement;
         
        const text = todel.textContent
        const email = text.split("-")[1].trim();
        listings.removeChild(todel);
        localStorage.removeItem(email)
     }

     if(event.target.classList.contains('eb')){
        const toedit = event.target.parentElement;
        const text = toedit.textContent
        const email = text.split("-")[1].trim();
        const username = text.split("-")[0].trim();
        const phone = text.split("-")[2].trim();
        console.log(email)
        console.log(username)
        const only_phone = phone.split("Delete")[0]
        //console.log(only_phone)
        listings.removeChild(toedit);
        localStorage.removeItem(email)

        const naam = document.getElementById('username')
        const dur = document.getElementById('phone')
        const patta = document.getElementById('email')
        naam.value = username ;
        dur.value = only_phone;
        patta.value = email
        // console.log(naam)


     } 
 })
}
module.exports = handleFormSubmit ;