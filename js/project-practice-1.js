let num = 0;

function changeTheColors(){
    const color = ['red', 'green', 'yellow', 'pink', 'tomato'];
    const target = document.querySelector('body');
    const btn = document.getElementById('btn');
    target.style.backgroundColor = color[num];
    num++;
    if (num > color.length - 1) {
        num = 0;
    }

}
