var testValue = 0;
var displayValue = "bro";
var products = []
/*csv_data*/
function makeProductChart() {


  document.writeln("<canvas id=\"myChart\" style=\"width:100%;max-width:700px\"></canvas>");
  // document.writeln("<p>"+displayValue+"</p>");
  
  // document.writeln("<p>TOTALS</p>");
  
  var choletot = 0;
  // var products = [];
  var totals = [];
  // populate a set of all the products
  for (let x in csv_data){
    //document.writeln("<p>"+csv_data[x].Product+"</p>");
    if (!(products.includes(csv_data[x].Product))){
      prod = csv_data[x].Product;
      //document.writeln("<p>"+csv_data[x].Product+"</p>");

      products.push(prod)

    }
  }  

  // document.writeln("<p>"+products[0]+"</p>");
  // document.writeln("<p>"+products[1]+"</p>");
  // document.writeln("<p>"+products[2]+"</p>");
  // document.writeln("<p>"+products[3]+"</p>");

  // calculate the totals for all the products
  for (let j in products){
    for (let i in csv_data){
      if (csv_data[i].Product == products[j]){
        // document.writeln("<p>product"+products[j]+"</p>");

        var totalpres = parseInt(csv_data[i].NRx_Month_1) + parseInt(csv_data[i].NRx_Month_2) + 
        parseInt(csv_data[i].NRx_Month_3)+parseInt(csv_data[i].NRx_Month_4)+parseInt(csv_data[i].NRx_Month_5)+
        parseInt(csv_data[i].NRx_Month_6);

        //document.writeln("<p>"+String(parseInt(csv_data[i].NRx_Month_1))+" "+String(parseInt(csv_data[i].NRx_Month_2))+"</p>");
        //document.writeln("<p>"+String(totalpres)+"</p>");
        
        // document.writeln("<p>nrx month 1 "+csv_data[i].NRx_Month_1+"</p>");
        // document.writeln("<p>totalpres "+totalpres+"</p>");

        var avgpres = totalpres/6;
        // document.writeln("<p>"+String(avgpres)+"</p>");

        
        // document.writeln("<p>average "+avgpres+"</p>");
        choletot = choletot + avgpres;
        
      }

    }
    totals[j]=choletot;
    choletot = 0;

  }

  
  // document.writeln("<p>tot "+totals+"</p>");

  // document.writeln("<p>"+products+"</p>");
  // document.writeln("<p>"+totals+"</p>");
  // var producty = (csv_data[0].Product);
  // document.writeln("<p>"+producty+"</p>");

  var id = parseInt(csv_data[0].id);
  var month = parseInt(csv_data[0].NRx_Month_1);
  var month2 = 20
  // let obj = 
  var xyValues2 = [{x:id, y:month}];
  xyValues2[1] = {x:id, y:month2};

  xyValues3 = [];
  
  for (let j in products){
    
    xyValues3.push({x: products[j], y: totals[j]});

  }

  // print(xyValues)
  
  new Chart("myChart", {
    
    type: "bar",
    data: {
      labels: products,
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: totals,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 0, max:5000}}],
        yAxes: [{ticks: {min: 0, max:5000}}],
      }
    }
  });

  testValue = parseInt(csv_data[1].NRx_Month_1);
  displayValue = csv_data[0].NRx_Month_1;

  printValue = String(xyValues2[0].id);
  //printValue = "hey";


  // document.writeln("<p>"+displayValue+"</p>");
  // document.writeln("<p>"+products+"</p>");
  // document.writeln("<p>"+month+"</p>");
}


function plotTopDoctors(){
  document.writeln("<button onclick='topByProduct()'>"+"Top Doctors by Product"+"</button>");
  // var product = document.createElement("button");
  // // var state = document.createElement("button");
  // document.body.appendChild(product);
  // document.body.appendChild(state);
  // product.addEventListener("click",topByProduct)
  // state.addEventListener("click",topByState)


}

function topByProduct(){

  // make an object that keeps track of doctors and their total prescriptions
  var docprescs = []
  // document.writeln("<p>Hellooooo</p>");
  // document.writeln("<p>"+products+"</p>");

    // calculate the totals for all the products
    for (let j in products){
      for (let i in csv_data){
        if (csv_data[i].Product == products[j]){
          // document.writeln("<p>product"+products[j]+"</p>");
  
          var totalpres = parseInt(csv_data[i].TRx_Month_1) + parseInt(csv_data[i].TRx_Month_2) + 
          parseInt(csv_data[i].TRx_Month_3)+parseInt(csv_data[i].TRx_Month_4)+parseInt(csv_data[i].TRx_Month_5)+
          parseInt(csv_data[i].TRx_Month_6);
          // document.writeln("<p>"+products[j]+"</p>");
          // document.writeln("<p>"+csv_data[i].first_name+"</p>");
          // document.writeln("<p>"+totalpres+"</p>");
          docprescs.push({"product":products[j],"first_name":csv_data[i].first_name,
          "last_name":csv_data[i].last_name,
          "totprescs":totalpres});
         

          //document.writeln("<p>"+String(parseInt(csv_data[i].NRx_Month_1))+" "+String(parseInt(csv_data[i].NRx_Month_2))+"</p>");
          //document.writeln("<p>"+String(totalpres)+"</p>");
          
          // document.writeln("<p>nrx month 1 "+csv_data[i].NRx_Month_1+"</p>");
          // document.writeln("<p>totalpres "+totalpres+"</p>");
  
          // var avgpres = totalpres/6;
          // document.writeln("<p>"+String(avgpres)+"</p>");
  
          
          // document.writeln("<p>average "+avgpres+"</p>");
          
        }
  
      }
      // totals[j]=choletot;
      // choletot = 0;
  
    }

    // rank the top doctors!
    // for (i in products){
      var topdoc1, topdoc2, topdoc3, topdoc4;
      var max1=0;
      var max2=0;
      var max3=0;
      var max4=0;
      for (x in docprescs){
        // prints all the objects
        // var obj = Object.values(docprescs[x]);
        // document.writeln("<p>"+obj+"</p>");
        // if (products[i]==docprescs[x].product){
          
        // }
        if (docprescs[x].product==products[0]){
          if (docprescs[x].totprescs>max1){
            topdoc1 = docprescs[x];
            max1 = docprescs[x].totprescs
          }

        }

        if (docprescs[x].product==products[1]){
          if (docprescs[x].totprescs>max2){
            topdoc2 = docprescs[x];
            max2 = docprescs[x].totprescs
          }

        }

        if (docprescs[x].product==products[2]){
          if (docprescs[x].totprescs>max3){
            topdoc3 = docprescs[x];
            max3 = docprescs[x].totprescs
          }

        }

        if (docprescs[x].product==products[3]){
          if (docprescs[x].totprescs>max4){
            topdoc4 = docprescs[x];
            max4 = docprescs[x].totprescs
          }

        }
      }
      document.writeln("<p>TOP DOCTORS</p>");
      var top1 = Object.values(topdoc1);
      document.writeln("<p>"+top1+"</p>");
      document.writeln("<p>"+max1+" prescriptions</p>");

      var top2 = Object.values(topdoc2);
      document.writeln("<p>"+top2+"</p>");
      document.writeln("<p>"+max2+" prescriptions</p>");

      var top3 = Object.values(topdoc3);
      document.writeln("<p>"+top3+"</p>");
      document.writeln("<p>"+max3+" prescriptions</p>");

      var top4 = Object.values(topdoc4);
      document.writeln("<p>"+top4+"</p>");
      document.writeln("<p>"+max4+" prescriptions</p>");

      
  // }
    // var myArray = Object.values(docprescs);
    // document.writeln("<p >hellllllo</p>");


    // document.writeln("<p>THE DOC PRESCS"+Object.values(docprescs)+"</p>");
    // document.getElementById("demo").innerHTML = myArray;
    // document.writeln("<p>THE DOC PRESCS"+docprescs+"</p>");


}
function topByState(){
  document.writeln("<p>STATEEE</p>");

}

function totaltrends(){
  chole = [0,0,0,0,0,0]
  zap = [0,0,0,0,0,0]
  nasal = [0,0,0,0,0,0]
  nova = [0,0,0,0,0,0]

  var monthlyTotals = [];

  // calculate the totals for all the products
  // for (let j in products){
    for (let i in csv_data){
      if (csv_data[i].Product == products[0]){
        // document.writeln("<p>product"+products[j]+"</p>");
        // document.writeln("<p>sumb"+chole[0]+"</p>");

        chole[0] = chole[0]+ parseInt(csv_data[i].TRx_Month_1);
        // document.writeln("<p>sum"+chole[0]+"</p>");
        // document.writeln("<p>product"+parseInt(csv_data[i].NRx_Month_1)+"</p>");
        chole[1] = chole[1] + parseInt(csv_data[i].TRx_Month_2);
        chole[2] = chole[2] + parseInt(csv_data[i].TRx_Month_3);
        chole[3] = chole[3] + parseInt(csv_data[i].TRx_Month_4);
        chole[4] = chole[4] + parseInt(csv_data[i].TRx_Month_5);
        chole[5] = chole[5] + parseInt(csv_data[i].TRx_Month_6);
      
        
      }

      if (csv_data[i].Product == products[1]){
        // document.writeln("<p>product"+products[j]+"</p>");
        
        zap[0] = zap[0] + parseInt(csv_data[i].TRx_Month_1);
        zap[1] = zap[1] + parseInt(csv_data[i].TRx_Month_2);
        zap[2] = zap[2] + parseInt(csv_data[i].TRx_Month_3);
        zap[3] = zap[3] + parseInt(csv_data[i].TRx_Month_4);
        zap[4] = zap[4] + parseInt(csv_data[i].TRx_Month_5);
        zap[5] = zap[5] + parseInt(csv_data[i].TRx_Month_6);
      
        
      }

      if (csv_data[i].Product == products[2]){
        // document.writeln("<p>product"+products[j]+"</p>");
        
        nasal[0] = nasal[0] + parseInt(csv_data[i].TRx_Month_1);
        nasal[1] = nasal[1] + parseInt(csv_data[i].TRx_Month_2);
        nasal[2] = nasal[2] + parseInt(csv_data[i].TRx_Month_3);
        nasal[3] = nasal[3] + parseInt(csv_data[i].TRx_Month_4);
        nasal[4] = nasal[4] + parseInt(csv_data[i].TRx_Month_5);
        nasal[5] = nasal[5] + parseInt(csv_data[i].TRx_Month_6);
      
        
      }

      if (csv_data[i].Product == products[3]){
        // document.writeln("<p>product"+products[j]+"</p>");
        
        nova[0] = nova[0] + parseInt(csv_data[i].TRx_Month_1);
        nova[1] = nova[1] + parseInt(csv_data[i].TRx_Month_2);
        nova[2] = nova[2] + parseInt(csv_data[i].TRx_Month_3);
        nova[3] = nova[3] + parseInt(csv_data[i].TRx_Month_4);
        nova[4] = nova[4] + parseInt(csv_data[i].TRx_Month_5);
        nova[5] = nova[5] + parseInt(csv_data[i].TRx_Month_6);
      
        
      }

    }
    // totals[j]=choletot;
    // choletot = 0;

  // }
  months = ["Month 1","Month 2","Month 3","Month 4","Month 5","Month 6", ]
  // monthlyTotals.push(month1);
  // monthlyTotals.push(month2);
  // monthlyTotals.push(month3);
  // monthlyTotals.push(month4);
  // monthlyTotals.push(month5);
  // monthlyTotals.push(month6);
  // document.writeln("<p>monthlytotals chole"+chole+"</p>");
  // document.writeln("<p>monthlytotals zap"+zap+"</p>");
  // document.writeln("<p>monthlytotals nasal"+nasal+"</p>");
  // document.writeln("<p>monthlytotals nova"+nova+"</p>");

  graphTotalTrends(months,monthlyTotals);

}

function graphTotalTrends(months,monthlyTotals){
  document.writeln("<canvas id=\"chart2\" style=\"width:100%;max-width:700px\"></canvas>");

  new Chart("chart2", {
    type: "line",
  
    data: {
        labels: months,
      datasets: [{
  
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        label: 'chole',
        data: chole
      },
  
      {
  
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,5,255)",
        label: 'zap',
        data: zap
      },

      {
  
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        label: 'nasal',
        data: nasal
      },

      {
  
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        label: 'nova',
        data: nova
      }
  
      ]
    },
    options: {
      legend: {display: true},
      scales: {
        xAxes: [{ticks: {min: 0, max:160}}],
        yAxes: [{ticks: {min: 0, max:40000}}],
      },
      title:{
        display: true,
        text:'Total Trends'
      }
    }
  });

}

function newtrends(){
  chole = [0,0,0,0,0,0]
  zap = [0,0,0,0,0,0]
  nasal = [0,0,0,0,0,0]
  nova = [0,0,0,0,0,0]

  var monthlyTotals = [];

  // calculate the totals for all the products
  // for (let j in products){
    for (let i in csv_data){
      if (csv_data[i].Product == products[0]){
        // document.writeln("<p>product"+products[j]+"</p>");
        // document.writeln("<p>sumb"+chole[0]+"</p>");

        chole[0] = chole[0]+ parseInt(csv_data[i].NRx_Month_1);
        // document.writeln("<p>sum"+chole[0]+"</p>");
        // document.writeln("<p>product"+parseInt(csv_data[i].NRx_Month_1)+"</p>");
        chole[1] = chole[1] + parseInt(csv_data[i].NRx_Month_2);
        chole[2] = chole[2] + parseInt(csv_data[i].NRx_Month_3);
        chole[3] = chole[3] + parseInt(csv_data[i].NRx_Month_4);
        chole[4] = chole[4] + parseInt(csv_data[i].NRx_Month_5);
        chole[5] = chole[5] + parseInt(csv_data[i].NRx_Month_6);
      
        
      }

      if (csv_data[i].Product == products[1]){
        // document.writeln("<p>product"+products[j]+"</p>");
        
        zap[0] = zap[0] + parseInt(csv_data[i].NRx_Month_1);
        zap[1] = zap[1] + parseInt(csv_data[i].NRx_Month_2);
        zap[2] = zap[2] + parseInt(csv_data[i].NRx_Month_3);
        zap[3] = zap[3] + parseInt(csv_data[i].NRx_Month_4);
        zap[4] = zap[4] + parseInt(csv_data[i].NRx_Month_5);
        zap[5] = zap[5] + parseInt(csv_data[i].NRx_Month_6);
      
        
      }

      if (csv_data[i].Product == products[2]){
        // document.writeln("<p>product"+products[j]+"</p>");
        
        nasal[0] = nasal[0] + parseInt(csv_data[i].NRx_Month_1);
        nasal[1] = nasal[1] + parseInt(csv_data[i].NRx_Month_2);
        nasal[2] = nasal[2] + parseInt(csv_data[i].NRx_Month_3);
        nasal[3] = nasal[3] + parseInt(csv_data[i].NRx_Month_4);
        nasal[4] = nasal[4] + parseInt(csv_data[i].NRx_Month_5);
        nasal[5] = nasal[5] + parseInt(csv_data[i].NRx_Month_6);
      
        
      }

      if (csv_data[i].Product == products[3]){
        // document.writeln("<p>product"+products[j]+"</p>");
      
        nova[0] = nova[0] + parseInt(csv_data[i].NRx_Month_1);
        nova[1] = nova[1] + parseInt(csv_data[i].NRx_Month_2);
        nova[2] = nova[2] + parseInt(csv_data[i].NRx_Month_3);
        nova[3] = nova[3] + parseInt(csv_data[i].NRx_Month_4);
        nova[4] = nova[4] + parseInt(csv_data[i].NRx_Month_5);
        nova[5] = nova[5] + parseInt(csv_data[i].NRx_Month_6);
      
        
      }

    }
    // totals[j]=choletot;
    // choletot = 0;

  // }
  months = ["Month 1","Month 2","Month 3","Month 4","Month 5","Month 6", ]
  // monthlyTotals.push(month1);
  // monthlyTotals.push(month2);
  // monthlyTotals.push(month3);
  // monthlyTotals.push(month4);
  // monthlyTotals.push(month5);
  // monthlyTotals.push(month6);
  // document.writeln("<p>monthlytotals chole"+chole+"</p>");
  // document.writeln("<p>monthlytotals zap"+zap+"</p>");
  // document.writeln("<p>monthlytotals nasal"+nasal+"</p>");
  // document.writeln("<p>monthlytotals nova"+nova+"</p>");

  graphNewTrends(months,monthlyTotals);

}

function graphNewTrends(months,monthlyTotals){
  document.writeln("<canvas id=\"chart3\" style=\"width:100%;max-width:700px\"></canvas>");

  new Chart("chart3", {
    type: "line",
  
    data: {
        labels: months,
      datasets: [{
  
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        label: 'chole',
        data: chole
      },
  
      {
  
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,5,255)",
        label: 'zap',
        data: zap
      },

      {
  
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        label: 'nasal',
        data: nasal
      },

      {
  
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        label: 'nova',
        data: nova
      }
  
      ]
    },
    options: {
      legend: {display: true},
      scales: {
        xAxes: [{ticks: {min: 0, max:160}}],
        yAxes: [{ticks: {min: 0, max:4000}}],
      },
      title:{
        display: true,
        text:'New Trends'
      }
    }
  });

}