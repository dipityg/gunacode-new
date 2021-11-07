function newFunction(control_output) {

    /*new_control = 1;
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
    }*/

    my_label1 = 'Drug1';

    if(first_time == 1) {
        first_time = 0;
        my_label1 = 'Mug1';
    } else {
        //removeEnd();
    }

    var xyValues = [
        8, 15, 11
        
        
      ];
      
      var xyValues2 = [
        9, 12, 13
        
        
      ];
      
      

    new_control = 1;
    let canva = document.createElement("canvas");
    canva.id="mycha";
    canva.style="width:100%;max-width:700px";
  //document.body.appendChild(canva);
    
    if(control_output == 1) {
        document.body.appendChild(canva);
        new_control = 0;
    } else {
        let new_canva = document.getElementById("mycha");
        document.body.removeChild(new_canva);
        new_control = 1;
    }

    //appendEnd();

    new Chart("mycha", {
        type: "line",
        
        data: {
            labels: ["Month 1", "Month 2", "Month 3"],
          datasets: [{
                 
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            label: my_label1,
            data: xyValues
          },
          
          {
                 
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            label: 'Drug2',
            data: xyValues2
          }
          
          ]
        },
        options: {
          legend: {display: true},
          scales: {
            xAxes: [{ticks: {min: 40, max:160}}],
            yAxes: [{ticks: {min: 6, max:25}}],
          }
        }
      });

      

      
    
      //return return_first;

}