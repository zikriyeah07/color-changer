// first method but in this then the event will be trigreted in document file by adding onclick and then caling function wit value
//   function colorChange(element) {
//         document.body.style.backgroundColor= element

//      }




// METHOS TWO ( This is better)
// const eachButton = document.querySelectorAll('.button');
// const body = document.querySelector("body");
// //   console.log(eachButton);

// eachButton.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         // console.log(e);
//         console.log(e.target.id);
//         switch (e.target.id) {
//             case "grey":
//                 body.style.backgroundColor = e.target.id
//                 body.style.color = 'black'
//                 break;
//             case "white":
//                 body.style.backgroundColor = e.target.id
//                 body.style.color = 'black'
//                 break;
//             case "blue":
//                 body.style.backgroundColor = e.target.id
//                 body.style.color = 'white'
//                 break;
//             case "yellow":
//                 body.style.backgroundColor = e.target.id
//                 body.style.color = 'black'
//                 break;

//             default: body.style.backgroundColor = 'red'
//                 break;
//         }



//     })


// });


const allButtons = document.querySelectorAll('.button')
allButtons.forEach((a) => {
    a.addEventListener('click', function (b) {
        // console.log(b);
        
        switch (b.target.id) {
            case 'grey':
                document.body.style.backgroundColor = b.target.id
                break;

            case 'white':
                document.body.style.backgroundColor = b.target.id
                break;

            case 'blue':
                document.body.style.backgroundColor = b.target.id
                break;

            case 'yellow':
                document.body.style.backgroundColor = b.target.id
                break;
            case 'purple':
                document.body.style.backgroundColor = b.target.id
                break;

            default:
                break;
        }

    })

});

const button = document.querySelector('.textChanger')
const body = document.body;
button.addEventListener('click', function (p) {
    // console.log(p);
    body.classList.toggle('black')
    
})


const resetButton = document.querySelector('#reset')
const resetBody = document.body;
resetBody.addEventListener('click', function (p) {
    // console.log(p);
    
})


