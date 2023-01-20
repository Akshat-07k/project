'using strict'/
console.log('hello World!');

let area = document.querySelector('.main--right');
let namer = 'No Data ❌';

let collage = 'No Data ❌';
let interest = 'No Data ❌';
let sport = 'No Data ❌';
let review = 'No Data ❌';

function reload()
{
    location.reload(true);
}
 
function main(ind){
     if(ind===1)
    {
        // document.querySelector(".butt--1").classList.remove('.red');
        document.querySelector('.but--1').style.backgroundColor = 'greenyellow';
        area.innerHTML = `
            <h1>Colalge Info </h1><hr><br/> 
            <h2>Enter name of collage </h2>   
            <input type="text" class='collage'/>
        `
    }
    else if(ind===2)
    {
                document.querySelector('.but--2').style.backgroundColor = 'greenyellow';

        area.innerHTML = `
            <h1>Interest in field</h1>
            <h2>Coding 🥰<input type='radio' name='same' value='coding' class='field_input'/></h2>
            <h2>Marketing 🧧<input type='radio' name='same' value='marketing' class='field_input'/></h2>
            <h2>Hacking 💻🚫<input type='radio' name='same' value='hacking' class='field_input'/></h2>
        `
    }
    else if(ind===3)
    {
                document.querySelector('.but--3').style.backgroundColor = 'greenyellow';

        area.innerHTML = `
        <h2>Enter your favourate sport </h2>
            <h2>Cricket 🏏<input type='radio' name='same' class='sport_input' value='Cricket'/></h2>
            <h2>Hockey 🏑<input type='radio' name='same' class='sport_input' value='Hockey'/></h2>
            <h2>FutBoll ⚽<input type='radio' name='same' class='sport_input' value='Socker'/></h2>
            <h2>F1 🏎<input type='radio' name='same' class='sport_input' value='F1'/></h2>
        `
    }
    else if(ind===4)
    {
                document.querySelector('.but--4').style.backgroundColor = 'greenyellow';

        area.innerHTML = `
        <h2>Do you liked our Site : </h2>
            <h2>Yes 🥰<input type='radio' name='same' value="YES" class='review'/></h2>
            <h2>NO 🚫<input type='radio' name='same' value="NO" class='review'/></h2>
        `
    }
    else{
                // let temp = ;
            document.querySelector('.but--5').style.backgroundColor = 'greenyellow';


        area.innerHTML = `
        <h1>----: Info Page :---</h1>
        <hr><br>
        <h3>Name : ${namer} </h3>
        <h3>Collage : ${collage}</h3>
        <h3>job Field Interest : ${interest}</h3>
        <h3>Favorite Sport : ${sport}</h3>
        <h3>Do you liked My webSite : ${review}</h3>
        `
    }
}

let button1 = document.querySelectorAll('.click-me');

// button1.forEach((temp,index,arr)=>{
//     temp.addEventListener('click', ()=>{
//         console.log(namer);
//         main(index);
//         console.log(index);
//     })
// });

document.querySelector('.submit').addEventListener('click',()=>{
    main(99);
})
let index = 0;
document.querySelector('.next').addEventListener('click',()=>{
    if(index===0)
    namer = document.querySelector('.name')?.value;
    else if(index===1)
    collage = document.querySelector('.collage')?.value;

    else if(index===2)
    interest = document.querySelector('.field_input')?.value;

    else if(index===3)
    sport = document.querySelector('.sport_input')?.value;

    else if(index===4)
    review = document.querySelector('.review')?.value;
    // console.log(namer);
    main(++index);
});
// addEventListener

document.querySelector('.refresh').addEventListener('click',()=>{
    reload();
})