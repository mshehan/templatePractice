/*
/Matthew Shehan
//mshehan@my.smccd.edu
//CIS 
//114 OL
//department.js
//assignment 7
// 05-13-2016
 */
$(document).ready(function () {
    $.getJSON("json/department.json", function (data) {
        var dept = "{{#depts}}<h2>{{name}}</h2>"
            + "<p>{{#employees}}{{>employee}}{{/employees}}</p>"
            + "{{/depts}}";
        var emp_partial = {
            employee: "<img src='{{pic}}' />"
            + "{{firstName}} {{lastName}}, {{title}}<br>"
        };
        var output = Mustache.to_html(dept, data, emp_partial);
        $('#employees').html(output);
    });
});