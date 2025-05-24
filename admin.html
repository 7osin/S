import { auth, db } from './firebase-config.js';
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const titleInput = document.getElementById('titleInput');
const contentInput = document.getElementById('contentInput');
const videoInput = document.getElementById('videoInput');
const downloadInput = document.getElementById('downloadInput');
const saveBtn = document.getElementById('saveBtn');
const message = document.getElementById('message');
const logoutBtn = document.getElementById('logoutBtn');

// تأكد من وجود مستخدم مسجل دخول
onAuthStateChanged(auth, user => {
  if (!user) {
    alert('يجب تسجيل الدخول أولاً');
    window.location.href = 'index.html';
  } else {
    loadData();
  }
});

// تحميل البيانات من Firestore للادخال
async function loadData() {
  const docRef = doc(db, "blog", "main");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    titleInput.value = data.title || '';
    contentInput.value = data.content || '';
    videoInput.value = data.video || '';
    downloadInput.value = data.download || '';
  }
}

// حفظ البيانات في Firestore
saveBtn.addEventListener('click', async () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const video = videoInput.value.trim();
  const download = downloadInput.value.trim();

  if (!title || !content) {
    message.style.color = 'red';
    message.textContent = 'العنوان والمحتوى مطلوبان!';
    return;
  }

  try {
    await setDoc(doc(db, "blog", "main"), {
      title,
      content,
      video,
      download
    });
    message.style.color = 'green';
    message.textContent = 'تم حفظ التعديلات بنجاح!';
  } catch (error) {
    message.style.color = 'red';
    message.textContent = 'خطأ في الحفظ: ' + error.message;
  }
});

// تسجيل خروج
logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = 'index.html';
  });
});
