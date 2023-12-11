const textBtn = document.getElementById('btn');

const chengeText = document.getElementById('text');
textBtn.addEventListener('click', () => {
    chengeText.innerHTML = "ボタンをクリックしました";
});
