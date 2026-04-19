let tg = window.Telegram.WedApp;
tg.expand()
let btn = document.querySelector("#click")

btn.onclick = () => {
    alert("Press")
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Cat")
        tg.MainButton.show()

    }
}