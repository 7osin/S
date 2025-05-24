import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModal");
const loginForm = document.getElementById("loginForm");

// عند الضغط على زر تسجيل الدخول: إظهار النافذة
loginBtn.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

// إغلاق النافذة عند الضغط على زر الإغلاق
closeModalBtn.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

// إغلاق النافذة عند الضغط خارج محتوى النافذة
loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add("hidden");
  }
});

// التعامل مع إرسال النموذج - تسجيل الدخول
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {خخ
    await signInWithEmailAndPassword(auth, email, password);
    alert("تم تسجيل الدخول بنجاح!");
    // توجه إلى صفحة الادمن (قم بإنشائها لاحقاً)
    window.location.href = "admin.html";
  } catch (error) {
    alert("فشل تسجيل الدخول: " + error.message);
  }
});
<!-- Firebase App (Core SDK) -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<!-- Firebase Authentication -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<!-- Firebase Storage -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>
//     message.textContent = 'حدث خطأ أثناء حفظ التعديلات: ' + error.message;
//   }
// });خ