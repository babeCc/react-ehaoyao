export const  TimeDown=(id, endDateStr)=> {
    //结束时间
    var endDate = new Date(endDateStr);
    //当前时间
    var nowDate = new Date();
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出到页面
    document.getElementById(id).innerText = "剩余 : " + (days>10?days:"0"+days+" ") + "天 " +( hours>9?hours:"0"+hours)  +" 小时 "+ ( minutes>9?minutes:"0"+minutes) +" 分 ";
    //延迟一秒执行自己
    
}

