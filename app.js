
document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    button.appendChild(btnText);
    document.body.appendChild(button);

    let num = Number + 1;
    button.addEventListener("click", function () {

        const div = document.createElement("div");
        div.className = "divs";
        let counter = document.getElementsByTagName("div").length +1;
        div.id = counter;
        let para = document.createElement("p");
        let idNumber = document.createTextNode(div.id);
        div.appendChild(para).appendChild(idNumber);
        document.body.appendChild(div);
        let colors = ["red", "green", "blue", "purple", "black", "orange", "yellow", "pink"];
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
    })
    button.addEventListener("dblclick", function(){
        let counter = document.getElementsByTagName("div").length +1;
        if (counter % 2 == 0){
        let docs = document.getElementById(counter +1);
        docs.parentNode.removeChild(docs);
        } else if(counter % 2 ==1){
            let docs1 = document.getElementById(counter -1);
            docs1.parentNode.removeChild(docs1);
        } else{
            alert("There is no Square!!")
        }
    })

});


