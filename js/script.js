// Import the functions you need from the SDKs you need
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved, onValue}
    from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
//認証用のおまじないインポート
import { getAuth, signInWithPopup, GoogleAuthProvider , signInWithRedirect} from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';

// ここのコードを絶対にウェブ上に上げない
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
//firebaseのRealtimeDBに接続するおまじない
const app = initializeApp(firebaseConfig);  //初期化
const db = getDatabase(app);                //RealtimeDBに接続
const dbRef = ref(db, "chat");              //RealtimeDB内の"chat"を使う

//データ登録(Click)
    $("#send").on("click",function(){
        console.log("送信ボタン押下")
        const msg = {
            uname : $("#uname").val(),      //入力した名前情報の取得
            text : $("#text").val()         //入力したテキスト情報の取得
        }
        const newPostRef = push(dbRef);
        console.log("newPostRef:",newPostRef)
        set(newPostRef, msg);
        //データ登録後に入力欄を空にする
        $("#uname").val("")
        $("#text").val("")

    })

    //指定パスにデータ追加or削除があった場合に都度トリガされ、オブジェクト（スナップショット）をリストとして取得
    onValue(dbRef, function(snapshots){
        console.log(snapshots);
    });
    //データ登録(Enter)


    //最初にデータ取得＆onSnapshotでリアルタイムにデータを取得
    //onChildAdded：指定されたパスに保存しているデータの分だけトリガされる
    onChildAdded(dbRef, function(data){
        const msg = data.val();
        const key = data.key;
        console.log("key:",key)
        //テンプレートリテラルでhtml上に入力したデータを表示
        //選択削除できるようにチェックボックスにkey値を格納
        let html = `
        <div class = box>
            <input class = cbox type="checkbox" name="checkItem" value = ${key}>
            <p class = username>${msg.uname}</p>
            <p class = message>${msg.text}</p>
        </div>
        `
        //jqueryを使って画面に表示
        $("#output").append(html);
        //この下は消さない
    })


    //データ一括削除（remove）
    $("#delete").on("click",function(){
        console.log("全削除ボタン押下")
        //全削除してもいいかの確認
        if(!confirm('本当に、、、消していいのか！！？？？')){
            /*　キャンセルの時は何もしない */
            return false;
        }else{
            /*　OKの時の処理*/
            remove(dbRef);
        }
        //データ削除時にページ更新を行う
        location.reload();
    })


    //選択削除
    $("#select_delete").on("click",function(){
    console.log("選択削除ボタン押下")
    //チェックボックスの値の取得
    getSelectedValues();
    function getSelectedValues() {
        const selectedValues = [];
        const checkboxes = document.querySelectorAll('input[name="checkItem"]:checked');
        //チェックボックスを選択した数だけfor文を回す
        for (let i = 0; i < checkboxes.length; i++) {
        selectedValues.push(checkboxes[i].value);
        console.log("checkboxes[i].value:",checkboxes[i].value)
        const string = "chat/" + checkboxes[i].value;
        console.log("string:",string)
        const dbRef = ref(db,string);
        console.log("dbRef:",dbRef)
        remove(dbRef);
        location.reload();
        }
        console.log("selectedValues:",selectedValues)
    }
})
