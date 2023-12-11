const textBtn = document.getElementById('btn');

const changeText = document.getElementById('text');

textBtn.addEventListener('click', () => {
    setTimeout(() => {
        changeText.innerHTML = "ボタンをクリックしました。"
    }, 2000);
});
