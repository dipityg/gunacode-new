function appendEnd() {

    let myparagraph = document.createElement("p");
    myparagraph.id = "mypara1";
    myparagraph.innerHTML = "MY PARAGRAPH!";
    document.body.appendChild(myparagraph);

    document.writeln("hi");

    

    //if(control_output == 1) {
        //document.body.appendChild(paragraph);
        //new_control = 0;
    //} else {
        //let para = document.getElementById("mypara");
        //document.body.removeChild(para);
        //new_control = 1;
    //}

}