var positionList = [];

$(document).mousemove(function (e) {
  imgMoveFunction(e);
});

function imgMoveFunction(e) {
  positionList.push({ left: e.pageX, top: e.pageY });
  if (positionList.length == 30) {
    $(".hyunseo").css({
      left: positionList[15]["left"] - 75,
      top: positionList[15]["top"] - 100,
    });
    $(".cat").css({
      left: positionList[0]["left"] - 50,
      top: positionList[0]["top"] - 50,
    });
    positionList.shift();
  }
}
