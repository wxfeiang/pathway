//  定义对象
// function csnvas() {
//     var canv = document.getElementById('canv');
//     var ctx = canv.getContext('2d');
// }
var canv = document.getElementById('myCanvas');
var ctx = canv.getContext('2d');
console.log(canv.width);
//  定义画圆方法
function CreatRound() {
    // 圆心x起点坐标
    // 圆心y坐标
    // 半径
    // 画得角度
    ctx.beginPath();
    ctx.fillStyle = '#1890ff';
    ctx.arc(200, 205, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}
//  定义画黑白轨道得方法
function CreatLine() {
    // 开始得坐标
    // 结束得坐标
    // 宽度
    // 高度
    // 边框颜色
    // 边框宽度
    // 填充黑白颜色
    //  是否旋转
    ctx.save(); //保存
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.rotate((0 * Math.PI) / 180);
    ctx.fillRect(80, 300, 30, 10);
    ctx.restore(); //取消保存
    ctx.closePath();
}
//定义写文本方法
function CreatText() {
    //  字体大小
    //  文本内容
    //  开始坐标
    //  结束坐标
    ctx.font = '20px Arial';
    ctx.fillText('线路图', canv.width / 3, 50);
}
//  监听浏览器宽度变化 重新绘制
//  执行得方法

CreatLine();
CreatText();
CreatRound();