var svg = Snap("#svg");
//  顶部标题
var title = svg.paper.text(750, 50, " 嘉兴站线路图").attr({
    fontSize: 30
});

// 带白色边框得矩形  //  旋转角度  x坐标  Y 坐标
svg.paper
    .rect(300, 45, 50, 9)
    .attr({
        stroke: "#000",
        fill: "#fff",
        strokeWidth: 1
    })
    .transform(new Snap.Matrix().rotate(-30, 20, 200));

// let bais1 = svg.paper
//     .rect(90, 300, 60, 10)
//     .transform(new Snap.Matrix().rotate(-45, 90, 300));
function textMolde(x, y, text, size) {
    svg.paper.text(x, y, text).attr({
        fontSize: size
    });
}

function criceModel(x, y, r, fill, borclor) {
    // x  // y  // r  /fill  // 边框颜色 //
    svg.paper.circle(x, y, r).attr({
        fill: fill, //
        stroke: borclor,
        strokeWidth: 1
    });
}

function lineModel(strat, item, space, x, y, w, h) {
    // 开始得位置    // 长度(个数)  // 间距  //  x  //  y  // width //  height //  填充颜色 //
    for (let i = strat; i < item; i++) {
        if (i % 2 == 0) {
            svg.paper.rect(i * space + x, y + 1, w, h).attr({
                stroke: "#000",
                fill: "#fff",
                strokeWidth: 1
            });
        } else {
            svg.paper.rect(i * space + x, y, w, h + 2);
        }
    }
}
svg.paper.rect(150, 150, 50, 10);
lineModel(2, 5, 60, 60, 150, 60, 8);
lineModel(1, 17, 60, 60, 220, 60, 8);
lineModel(2, 15, 60, 60, 260, 60, 8);
let sv1 = svg.paper.rect(30, 300, 30, 10); //  黑色
lineModel(0, 17, 60, 60, 300, 60, 8);
textMolde(10, 330, "牵出线", 16);
criceModel(60, 290, 10, "#00f", "#00f");
criceModel(80, 290, 10, "#fff", "#000");