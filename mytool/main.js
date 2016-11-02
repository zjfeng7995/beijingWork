var currentNow = new Date();
function print(msg){
	console.log('当前时间：'+currentNow.getFullYear()+'-'+(currentNow.getMonth()+1)+'-'+currentNow.getDate()+' '+currentNow.getHours()+':'+currentNow.getMinutes()+':'+currentNow.getSeconds()+';打印内容：'+msg);
}
exports.print = print;