var emp = [
    {
      "#": "1",
      "Name": "Sunny",
      "Age": "21",
      "DOJ": "2014-10-03",
      "Salary": "10000",
      "mail-id": "Sunny@gmail.com"
    },
    {
      "#": "2",
      "Name": "Sandy",
      "Age": "23",
      "DOJ": "2015-06-02",
      "Salary": "20000",
      "mail-id": "Sandy@gmail.com"
    },
    {
      "#": "3",
      "Name": "John",
      "Age": "22",
      "DOJ": "2013-08-04",
      "Salary": "10000",
      "mail-id": "John@gmail.com"
    },
    {
      "#": "4",
      "Name": "Joe",
      "Age": "23",
      "DOJ": "2014-03-02",
      "Salary": "25000",
      "mail-id": "Joe@gmail.com"
    }
  /*  {
      "#": "5",
      "Name": "Noel",
      "Age": "20",
      "DOJ": "2012-10-02",
      "Salary": "18000",
      "mail-id": "Noel@gmail.com"
    }
   {
      "#": "6",
      "Name": "Sam",
      "Age": "25",
      "DOJ": "2015-04-10",
      "Salary": "10000",
      "mail-id": "Sam@gmail.com"
    },
    {
      "#": "7",
      "Name": "Dev",
      "Age": "18",
      "DOJ": "2013-06-08",
      "Salary": "30000",
      "mail-id": "Dev@gmail.com"
    },
    {
      "#": "8",
      "Name": "Bobby",
      "Age": "25",
      "DOJ": "2011-06-08",
      "Salary": "25000",
      "mail-id": "Bobby@gmail.com"
    },
    {
      "#": "9",
      "Name": "Hari",
      "Age": "22",
      "DOJ": "2012-10-08",
      "Salary": "28000",
      "mail-id": "Hari@gmail.com"
    },
    {
      "#": "10",
      "Name": "Sid",
      "Age": "19",
      "DOJ": "2011-10-05",
      "Salary": "27000",
      "mail-id": "Sid@gmail.com"
    }*/
  ];
  function createtable()
  {
    var result = "";
    var i;
    result += "<table border = '2' cellpadding = '5' id = 'tableid'>";
    result += "<thead>";
    var empcount = emp.length;
    var colcount = Object.keys(emp[0]);
    for(i = 0; i < colcount.length; i++)
    {
      result += "<th class = 'header'>" + colcount[i] + "<p class = 'dec' onclick = 'desc(" + i + ")'>" + "&#x025B4" + "</p>" + "<p class = 'inc' onclick = 'asec(" + i + ")'>" + "&#x025BE" + "</p>" + "</th>";
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
  function asec(colid)
  {
  /*  var t = document.getElementById("tableid");
      var j,f_row,s_row;
      var temp = "";
      var rowlength = t.rows.length;
      for(var i = 1; i < rowlength; i++)
      {
        for(j = 1; j < rowlength-1; j++)
        {
          if(colid == 0)
          {
            f_row = parseInt(t.rows[j].cells[colid].innerHTML);
            s_row = parseInt(t.rows[j+1].cells[colid].innerHTML);
          }
          else
          {
            f_row = t.rows[j].cells[colid].innerHTML;
            s_row = t.rows[j+1].cells[colid].innerHTML;
          }
            if(f_row < s_row)
            {
              temp = t.rows[j].innerHTML;
              t.rows[j].innerHTML = t.rows[j+1].innerHTML;
              t.rows[j+1].innerHTML = temp;
            }
          }
        }
      }*/
      //var employee = new array();
      var empcount = emp.length;
      var colcount = Object.keys(emp[0]);
      for(var i = 0; i < empcount; i++)
      {
        for(var j = 0; j < empcount-1; j++)
        {
          if(colid == 0)
          {
            f_row = parseInt(emp[j][colcount[colid]]);
            s_row = parseInt(emp[j+1][colcount[colid]]);
          }
          else
          {
            var f_row = emp[j][colcount[colid]];
            var s_row = emp[j+1][colcount[colid]];
          }
          if(f_row < s_row)
          {
            temp = emp[j][colcount[colid]];
            emp[j][colcount[colid]] = emp[j+1][colcount[colid]];
            emp[j+1][colcount[colid]] = temp;
            window.alert(emp[j+1][colcount[colid]]);
          }
        }
      }
    }
      function desc(colid)
      {
          var t = document.getElementById("tableid");
          var j,f_row,s_row;
          var temp = "";
          var rowlength = t.rows.length;
          for(var i = 1; i < rowlength; i++)
          {
            for(j = 1; j < rowlength-1; j++)
            {
              if(colid == 0)
              {
                f_row = parseInt(t.rows[j].cells[colid].innerHTML);
                s_row = parseInt(t.rows[j+1].cells[colid].innerHTML);
              }
              else
              {
                f_row = t.rows[j].cells[colid].innerHTML;
                s_row=t.rows[j+1].cells[colid].innerHTML;
              }
                if(f_row > s_row)
                {
                  temp = t.rows[j].innerHTML;
                  t.rows[j].innerHTML = t.rows[j+1].innerHTML;
                  t.rows[j+1].innerHTML = temp;
                }
              }
            }
          }
