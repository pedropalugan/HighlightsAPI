let game;
const verificarTime = () => {
    let x = 0;
    let team = document.getElementById("team").value;
    let div = document.getElementById("thumb");
    div.innerHTML = `<div></div>`
    fetch("https://free-football-soccer-videos1.p.rapidapi.com/v1/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com",
            "x-rapidapi-key": "349a7e73f9msh1bcccf175e78c5cp1d8fe9jsn8595c6b1f7a6"
        }
    })
        .then(Response => Response.json())
        .then((success) => {
            console.log(success)
            for (let game = 0; game < success.length; game++) {
                if (team == success[game]['side1']['name'] || team == success[game]['side2']['name']) {
                    div.innerHTML = success[game]['videos'][0]['embed']
                    if (x < 1) {
                        alert("Scroll para baixo")
                        x++
                    }
                }
            }
            if (x == 0){
                alert("Não foi possível encontrar esse time em nosso banco de dados")
            }
        })
}
