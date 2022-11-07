

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");



// window.addEventListener("DOMContentLoaded",lodedBookList);
btn.addEventListener("click",function(e){
e.preventDefault();


if(title.value =='' || author.value =='' || year.value ==''){
    alert("Plese Enter Your Information!!")
}else{
    const newRow = document.createElement("tr");

    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    const newyear = document.createElement("th");
    newyear.innerHTML = year.value;
    newRow.appendChild(newyear);

    bookList.appendChild(newRow);

    const myData = localStorage.getItem("AllMyData") ? JSON.
parse(localStorage.getItem("AllMyData")) : [];
myData.push(`${title.value},${author.value},${year.value}`);
localStorage.setItem("AllMyData",JSON.stringify(myData))





// // const lodedBookList = ()=>{
// //     Localvalur =  localStorage.getItem("AllMyData") ? JSON.
// //     parse(localStorage.getItem("AllMyData")) : [];
// //     Localvalur.map((arman)=> bookList(arman.title,arman.author,arman.year))
// }

   
}
title.value=""
author.value=""
year.value=""




});
