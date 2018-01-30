function CopyRight() {
    var lastModDate = document.lastModified;
    var lastModDate = lastModDate.substring(0, 10);
    dateModified.innerHTML = "<span style='font-size:8pt;'>This document was last modified " + lastModDate + ".</span>"
}

function todayDate() {
    var today = new Date();
    var dayofweek = today.toLocaleString();
    var dayLocate = dayofweek.indexOf(" ");
    var weekDay = dayofweek.substring(0, dayLocate);
    var newDay = dayofweek.substring(dayLocate);
    var dateLocate = newDay.indexOf(",");
    var monthDate = newDay.substring(0, dateLocate + 1);
    var yearLocate = dayofweek.indexOf("2018");
    var year = dayofweek.substr(yearLocate, 4);

    var memDay = new Date("January 31, 2018");
    var daysToGo = memDay.getTime() - today.getTime();
    var daysTilDue = Math.ceil(daysToGo / (1000 * 60 * 60 * 24));

    displayDate.innerHTML = "<h3>Today is " + weekDay + " " + monthDate + " " + year + ". Only " + daysTilDue + " days until this assignment is due.</h3>"
}

function navigateCat() {
    // var currentURL = window.location.href;
    // var currentPath = window.location.pathname;

    window.location.assign("http://localhost:8080/PA9-category.html");
}

function navigateDeal() {
    window.location.assign("http://localhost:8080/PA9-Deals.html");
}