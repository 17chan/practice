const prompt = require('prompt-sync')();
let add;

const todoList = [];



while (true) {

    add = prompt('タスクを追加しますか y/n');

    if (add == "y") {
        const name = prompt('タスクを追加してください');

        console.log(`${name}を追加しました`);

        // ① todoListの配列の最後にどんどん追加したい。が、再代入(上書き)がされている状況
        todoList.push(name);
        console.log(todoList);

        // ② 下記のforeachが実行されていない...?
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