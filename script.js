const inputs = [
    ["09.10.2023", 2215, 316, 23],
]

window.addEventListener("load", (event) => {
    for(let i = 0; i < inputs.length; i++) {
        let total_games = inputs[i][2] + inputs[i][3]
        document.write(`<h3>${inputs[i][0]}</h3>`)
        document.write(`<p>ELO: ${inputs[i][1]}, Wins: ${inputs[i][2]}, Losses: ${inputs[i][3]}, Win ratio: ${Math.floor((inputs[i][2] / total_games) * 100)}%</p><br>`)
    }

    document.body.style.color = "rgb(230, 230, 230)"
    document.body.style.backgroundColor = "rgb(30, 30, 30)"
    document.body.style.fontFamily = "Comic Sans MS"
});