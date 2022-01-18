$(document).ready(function () {
  $("a").click(function () {
    $("iframe").show();
    $("article").hide();
  });
});

document
  .getElementById("slider-wght")
  .addEventListener("input", function () {
    let axisValue = document.getElementById("slider-wght").value;

    document.getElementById("testarea0").style.fontWeight = axisValue;

    document.getElementById("value-wght").innerText = axisValue;
  });
document
  .getElementById("slider-wght")
  .addEventListener("input", function () {
    let axisValue = document.getElementById("slider-wght").value;

    document.getElementById("testarea1").style.fontWeight = axisValue;

    document.getElementById("value-wght").innerText = axisValue;
  });

document
  .getElementById("slider-wght")
  .addEventListener("input", function () {
    let axisValue = document.getElementById("slider-wght").value;

    document.getElementById("testarea2").style.fontWeight = axisValue;

    document.getElementById("value-wght").innerText = axisValue;
  });
document
  .getElementById("slider-wght")
  .addEventListener("input", function () {
    let axisValue = document.getElementById("slider-wght").value;

    document.getElementById("testarea3").style.fontWeight = axisValue;

    document.getElementById("value-wght").innerText = axisValue;
  });
