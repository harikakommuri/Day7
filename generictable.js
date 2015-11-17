var emp = [
    {
      "#": "1",
      "Name": "Sunny",
      "Age": "21",
      "DOJ": "2014-10-03",
      "Salary": "10000"
    },
    {
      "#": "2",
      "Name": "Sandy",
      "Age": "23",
      "DOJ": "2015-06-02",
      "Salary": "20000"
    },
    {
      "#": "3",
      "Name": "John",
      "Age": "22",
      "DOJ": "2013-08-04",
      "Salary": "10000"
    },
    {
      "#": "4",
      "Name": "Joe",
      "Age": "23",
      "DOJ": "2014-03-02",
      "Salary": "25000"
    },
    {
      "#": "5",
      "Name": "Noel",
      "Age": "20",
      "DOJ": "2012-10-02",
      "Salary": "18000"
    },
    {
      "#": "6",
      "Name": "Sam",
      "Age": "25",
      "DOJ": "2015-04-10",
      "Salary": "10000"
    },
    {
      "#": "7",
      "Name": "Dev",
      "Age": "18",
      "DOJ": "2013-06-08",
      "Salary": "30000"
    },
    {
      "#": "8",
      "Name": "Bobby",
      "Age": "25",
      "DOJ": "2011-06-08",
      "Salary": "25000"
    },
    {
      "#": "9",
      "Name": "Hari",
      "Age": "22",
      "DOJ": "2012-10-08",
      "Salary": "28000"
    }
  ];
  function createtable()
  {
    var result = "";
    var i;
    result += "<table border = '2' cellpadding = '5'>";
    result += "<thead>";
    var empcount = emp.length;
    var colcount = Object.keys(emp[0]);
    for(i = 0; i < colcount.length; i++)
    {
      result += "<th>" + colcount[i] + "</th>";
    }
      result += "</thead>";
      result += "<tbody>";
      for(i = 0; i < empcount; i++)
      {
        result += "<tr>";
        for(j = 0; j < colcount.length; j++)
        result += "<td>" + emp[i][colcount[j]] + "</td>";
        result += "</tr>";
      }
      result += "</tbody>";
      result += "</table>";
      document.getElementById("body").innerHTML = result;
  }
