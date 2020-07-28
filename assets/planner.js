// variable for time slots//

var today = moment().format("dddd, MMMM Do, YYYY hh:mm a");
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
$("#currentDay").text(today);

// time blokcs if and else statements//
if (now < today9Am)
{
    $("#9AmBlock").addClass("future");
}
else if ((now >= today9Am) && (now < today10Am))
{
    $("#9amBlock").addClass("present");
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
