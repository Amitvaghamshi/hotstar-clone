function append(data) {
    document.getElementById("showmovie").innerHTML = null
    data.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.Poster

        let title = document.createElement("p");
        title.innerText = el.Title;

        let Type = document.createElement("p");
        Type.innerText = el.Type;

        let Year = document.createElement("p");
        Year.innerText = el.Year

        div.append(img, title, Type, Year);

        document.getElementById("showmovie").append(div)
    })

    

}

export default append