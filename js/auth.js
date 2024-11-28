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

//google認証用の準備
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

console.log("location.href:",location.href);

// Google認証でサインインする関数
async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('ログイン成功:', user.displayName);
      console.log('ユーザー情報:', user);
      //3秒後にtest.htmlへ移動
      setTimeout(() => {
        location.href = "./chat.html";
      }, 3000);
    } catch (error) {
      console.error('ログインエラー:', error.message);
    }
  }
  // サインインボタンのクリックイベント
  document.getElementById('sign-in-button').addEventListener('click', signInWithGoogle);
