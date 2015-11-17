
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
    },
    {
      "#": "5",
      "Name": "Noel",
      "Age": "20",
      "DOJ": "2012-10-02",
      "Salary": "18000",
      "mail-id": "Noel@gmail.com"
    },
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
    }
  ];
  function createtable()
  {
    var empcount = emp.length;
    var colcount = Object.keys(emp[0]);
    var table =  $("<table></table>");
    var thead = table.append("<thead></thead>");
    for(var i = 0 ; i < colcount.length; i++)
    {
      thead.append($("<th>" + colcount[i] + "</th>"));
    }
    var tbody = table.append($("<tbody></tbody>"));
    for(var i = 0; i < empcount; i++)
    {
      var tr =  tbody.append($("<tr></tr>"));
      for(var j = 0; j < colcount.length; j++)
      {
        tr.append($("<td>" + emp[i][colcount[j]] + "</td>"));
      }
    }
    $("#body").append(table);
}
