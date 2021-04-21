
let count =0;


function add()
{
  count++;
  let add = document.getElementById('head');
  add.innerHTML = count;
}

function sub()
{
    if(count>=1)
    {
        count--;
    }
    let add = document.getElementById('head');
    add.innerHTML = count;
}