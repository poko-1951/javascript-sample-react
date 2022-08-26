// import "./styles.css"

const onClickAdd = () => {
  // 入力を取得して変数に代入、その後初期化
  const input_text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  create_incomplete_list(input_text);
};

// 未完了から削除する
const delete_from_incomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加
const create_incomplete_list = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン
  const complete_button = document.createElement("button");
  complete_button.innerText = "完了";
  complete_button.addEventListener("click", ()=> {
    delete_from_incomplete(complete_button.parentNode);
    // 完了リストに追加する要素
    const add_target = complete_button.parentNode;
    // TODOのliタグのテキストを取得
    const text = add_target.firstElementChild.innerText;
    // div以下を初期化→なぜ？→ボタンを一括削除している
    add_target.textContent = null;
    // liタグを作成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻すボタンを作成
    const back_button = document.createElement("button");
    back_button.innerText = "戻す";
    back_button.addEventListener("click", () => {
      const delete_target = back_button.parentNode;
      document.getElementById("complete-list").removeChild(delete_target);
      const text = delete_target.firstElementChild.innerText;
      create_incomplete_list(text);
    });

    add_target.appendChild(li);
    add_target.appendChild(back_button);

    document.getElementById("complete-list").appendChild(add_target);
  });

  // 削除ボタン
  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", ()=> {
    delete_from_incomplete(delete_button.parentNode);
  });

  div.appendChild(li);
  div.appendChild(complete_button);
  div.appendChild(delete_button);

  document.getElementById("incomplete-list").appendChild(div);
};

// 入力フォームで追加をクリックしたとき
document.getElementById("add-button").addEventListener("click", ()=> onClickAdd());

