'use strict'
//set initial value
let count = 0;

//selecting values and buttons
const value = document.querySelector('.number');
const btns = document.querySelectorAll ('.btn');

//Making the buttons functional
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        //Change of value color
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black'
        }
    });
});


//Using for loop
// for (let i = 0; i < btns.length; i++)
//   btns[i].addEventListener('click', function (e) {
//     const styles = e.currentTarget.classList;
//             if (styles.contains("decrease")) {
//                 count--;
//             } else if (styles.contains("increase")) {
//                 count++;
//             } else {
//                 count = 0;
//             }
//             value.textContent = count;

            
//         //Change of value color
//         if (count > 0) {
//             value.style.color = 'green';
//         } else if (count < 0) {
//             value.style.color = 'red';
//         } else {
//             value.style.color = 'black'
//         }
//   });