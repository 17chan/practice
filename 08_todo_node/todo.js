const prompt = require('prompt-sync')();
let add;




while (true) {
    
    add = prompt('タスクを追加しますか y/n');
    
    if (add == "y") {
        const todoList = [];
        const name = prompt('タスクを追加してください');

        console.log(`${name}を追加しました`);

        todoList.push = name;
        
        console.log(todoList);

        todoList.forEach(li => {
            console.log("● " + li);
        });


    } else if (add == "n") {
        break;



    } else {
        console.log("ちゃんと入力してください y/n");
    }


}







// for (i=0; i<3; i++){
//     const name = prompt('to doを追加してください');
//     console.log(`${ name }を追加しました`);

//     todoList[i] = name;

//     todoList.forEach(li => {
//         console.log("● " + li);
//     });
// }