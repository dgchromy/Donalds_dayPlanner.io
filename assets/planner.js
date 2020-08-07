// variable for time slots//

var today = moment().format("dddd, MMMM Do, YYYY hh:mm a");
$("#upToDate").text(today);
var now = (moment()).toString();
var today9Am = (moment("09:00", "HH:mm")).toString();
var today10Am = (moment("10:00", "HH:mm")).toString();
var today11Am = (moment("11:00", "HH:mm")).toString();
var today12Pm = (moment("12:00", "HH:mm")).toString();
var today1Pm = (moment("13:00", "HH:mm")).toString();
var today2Pm = (moment("14:00", "HH:mm")).toString();
var today3Pm = (moment("15:00", "HH:mm")).toString();
var today4Pm = (moment("16:00", "HH:mm")).toString();
var today5Pm = (moment("17:00", "HH:mm")).toString();


// time blocks if and else statements//
if (now < today9Am)
{
    $("#9AmBlock").addClass("future");
}
else if ((now >= today9Am) && (now < today10Am))
{
    $("#9AmBlock").addClass("present");
}
else if (now >= today10Am)
{
    ("#9AmBlock").addClass("past");
};


if (now < today10Am)
{
    $("#10AmBlock").addClass("future");
}
else if ((now >= today10Am) && (now < today11Am))
{
    $("10AmBlock").addClass("present");
}
else if (now >= today11Am)
{
    ("#10AmBlock").addClass("past");

};

if (now < today11Am)
{
    $("#11AmBlock").addClass("future");
}
else if ((now >= today11Am) && (now < today12Am))
{
    $("#11AmBlock").addClass("present");
}
else if (now >= today12Pm)
{
    ("#11AmBlock").addClass("past");

};

if (now < today12Pm)
{
    $("#12PmBlock").addClass("future");
}
else if ((now >= today12Pm) && (now < today1Pm))
{
    $("#12PmBlock").addClass("present");
}
else if (now >= today1Pm)
{
    ("#12PmBlock").addClass("past");

};

if (now < today1Pm)
{
    $("#1PmBlock").addClass("future");
}
else if ((now >= today1Pm) && (now < today2Pm))
{
    $("#1PmBlock").addClass("present");
}
else if (now >= today11Am)
{
    ("#1PmBlock").addClass("past");

};

if (now < today2Pm)
{
    $("#2PmBlock").addClass("future");
}
else if ((now >= today2Pm) && (now < today3Pm))
{
    $("#2PmBlock").addClass("present");
}
else if (now >= today11Am)
{
    ("#2PmBlock").addClass("past");

};

if (now < today3Pm)
{
    $("#3PmBlock").addClass("future");
}
else if ((now >= today3Pm) && (now < today4Pm))
{
    $("#3PmBlock").addClass("present");
}
else if (now >= today11Am)
{
    ("#3PmBlock").addClass("past");

};

if (now < today4Pm)
{
    $("#10AmBlock").addClass("future");
}
else if ((now >= today4Pm) && (now < today5Pm))
{
    $("#4PmBlock").addClass("present");
}
else if (now >= today11Am)
{
    ("#4PmBlock").addClass("past");

};

if (now < today5Pm)
{
    $("#5PmBlock").addClass("future");
}
else if ((now >= today5Pm) && (now < today6Pm))
{
    $("#5PmBlock").addClass("present");
}
else if (now >= today11Am)
{
    ("#5PmBlock").addClass("past");

};


// 9Am EVENT
var eventRetrieved9Am = localStorage.getItem("9AmEventAdded");
$("#9AmBlock").text(eventRetrieved9Am);

$(".Button9Am").on("click", function (event) {

    var eventAdded9Am = $("#9AmBlock").text();
    localStorage.setItem("9AmEventAdded", (eventAdded9Am));
});

// 10Am EVENT
var eventRetrieved10Am = localStorage.getItem("10AmEventAdded");
$("#10AmBlock").text(eventRetrieved10Am);

$(".Button10Am").on("click", function (event) {

    var eventAdded10Am = $("#10AmBlock").text();
    localStorage.setItem("10AmEventAdded", (eventAdded10Am));
});

// 11Am EVENT
var eventRetrieved11Am = localStorage.getItem("11AmEventAdded");
$("#11AmBlock").text(eventRetrieved11Am);

$(".Button11Am").on("click", function (event) {

    var eventAdded11Am = $("#11AmBlock").text();
    localStorage.setItem("11AmEventAdded", (eventAdded11Am));
});

// 12Pm EVENT
var eventRetrieved12Pm = localStorage.getItem("12PmEventAdded");
$("#12PmBlock").text(eventRetrieved12Pm);

$(".Button12Pm").on("click", function (event) {

    var eventAdded12Pm = $("#12PmBlock").text();
    localStorage.setItem("12PmEventAdded", (eventAdded12Pm));
});

// 1Pm EVENT
var eventRetrieved1Pm = localStorage.getItem("1PmEventAdded");
$("#1PmBlock").text(eventRetrieved1Pm);

$(".Button1Pm").on("click", function (event) {

    var eventAdded1Pm = $("#1PmBlock").text();
    localStorage.setItem("1PmEventAdded", (eventAdded1Pm));
});

// 2Pm EVENT
var eventRetrieved2Pm = localStorage.getItem("2PmEventAdded");
$("#2PmBlock").text(eventRetrieved2Pm);

$(".Button2Pm").on("click", function (event) {

    var eventAdded2Pm = $("#2PmBlock").text();
    localStorage.setItem("2PmEventAdded", (eventAdded2Pm));
});

// 3Pm EVENT
var eventRetrieved3Pm = localStorage.getItem("3PmEventAdded");
$("#3PmBlock").text(eventRetrieved3Pm);

$(".Button3Pm").on("click", function (event) {

    var eventAdded3Pm = $("#3PmBlock").text();
    localStorage.setItem("3PmEventAdded", (eventAdded3Pm));
});
// 4Pm EVENT
var eventRetrieved4Pm = localStorage.getItem("4PmEventAdded");
$("#4PmBlock").text(eventRetrieved4Pm);

$(".Button4Pm").on("click", function (event) {

    var eventAdded4Pm = $("#4PmBlock").text();
    localStorage.setItem("4PmEventAdded", (eventAdded4Pm));
});

// 5Pm EVENT
var eventRetrieved5Pm = localStorage.getItem("5PmEventAdded");
$("#5PmBlock").text(eventRetrieved5Pm);

$(".Button5Pm").on("click", function (event) {

    var eventAdded5Pm = $("#5PmBlock").text();
    localStorage.setItem("5PmEventAdded", (eventAdded5Pm));
});