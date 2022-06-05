const btnpic = document.querySelector('#pic');
const check = document.querySelector('.btnsign');
const layout = document.querySelector('.rocket');
const overlay = document.querySelector('.reg');
const whole = document.getElementById('memeber');
const cross = document.querySelector('.close');
//console.log(btnpic.classList.add('hidden'));




 /*document.querySelector('.heading').addEventListener('mousekey', function(e){
     console.log(e);
     e.classlist.add('bright');
 })
 */
console.log(layout);
console.log(whole);
overlay.addEventListener('click', function(e){
    e.preventDefault();
    layout.classList.remove('hidden');
    console.log(layout);
    //whole.classList.add('hidden');
    //whole.classList.add('layout');
    console.log(whole);  

})

cross.addEventListener('click', function(e){
    e.preventDefault();
   // whole.classList.remove('hidden');
    //whole.classList.remove('layout');
    layout.classList.add('hidden');

})