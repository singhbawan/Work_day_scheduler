var hour;
// Different id for time block
var t09 = $("#09");
var t10 = $("#10");
var t11 = $("#11");
var t12 = $("#12");
var t13 = $("#13");
var t14 = $("#14");
var t15 = $("#15");
var t16 = $("#16");
var t17 = $("#17");

var textAreaEl = $("textarea");

var saveButtonEl = $(".saveBtn");

var time_block = [
  { value: 09, id: t09, idstr: "09" },
  { value: 10, id: t10, idstr: "10" },
  { value: 11, id: t11, idstr: "11" },
  { value: 12, id: t12, idstr: "12" },
  { value: 13, id: t13, idstr: "13" },
  { value: 14, id: t14, idstr: "14" },
  { value: 15, id: t15, idstr: "15" },
  { value: 16, id: t16, idstr: "16" },
  { value: 17, id: t17, idstr: "17" },
];

//Executed when window loads
$(document).ready(function () {
  $("#date").text(moment().format("dddd, MMM Do, h:mm a"));
  var hour = moment().format("HH");

  for (var i = 0; i < time_block.length; i++) {
    if (hour > time_block[i].value) {
      time_block[i].id.addClass("past");
    }
    if (hour == time_block[i].value) {
      time_block[i].id.addClass("present");
    }
    if (hour < time_block[i].value) {
      time_block[i].id.addClass("future");
    }
  }
  for (var i = 0; i < time_block.length; i++) {
    var storedData = localStorage.getItem(time_block[i].idstr);
    $("#" + time_block[i].idstr).val(storedData);
  }
});

saveButtonEl.on("click", function () {
  var currentId = $(this).prev().attr("id");
  var data = $("#" + currentId).val();
  localStorage.setItem(currentId, data);
});

$("#reset").on("click", function () {
  localStorage.clear();
  location.reload();
});
