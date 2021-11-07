function newFunction(control_output) {

    new_control = 1;
    let paragraph = document.createElement("p");
    paragraph.id = "mypara";
    paragraph.innerHTML = "MY PARAGRAPH!"
    
    if(control_output == 1) {
        document.body.appendChild(paragraph);
        new_control = 0;
    } else {
        let para = document.getElementById("mypara");
        document.body.removeChild(para);
        new_control = 1;
    }

    

}