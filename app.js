
// var items= document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[2]);

// items[2].style.backgroundColor="green";
// for(let i=0 ; i<items.length; i++){
//     items[i].style.fontWeight="bold"
// }


// var new_li =document.getElementsByClassName("new-list-item");
//     new_li[0].style.color="red";
//     console.log(new_li)

//     var li= document.getElementsByName("li-5");
//     li[0].style.backgroundColor="pink"

//Using QuerySelectorALL change the font color to green for 2nd item in the item list
// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor="green"
// var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display="none"

// query selector all

var seconditem=document.querySelectorAll('li:nth-child(n)');
var odd= document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<seconditem.length; i++){
    if(i==1){
        seconditem[i].style.color="green"
    }
}
for(var i=0;i<odd.length; i++){
    odd[i].style.backgroundColor="green";
}

