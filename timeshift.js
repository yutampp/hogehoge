var sh = new ActiveXObject( "WScript.Shell" );
var time = new Date();
var time_value = time.getTime();
try{
        var arg = parseInt(WScript.Arguments(0) ) || 0;
}catch(e){
        var arg = 0;
}
var delta = 1000 * 60 * parseInt(arg);
time.setTime(time_value + delta);

WScript.echo(time);

var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();

var time_string = (" " + hour + ":" + minute + ":" + second );

WScript.echo(time_string);

sh.exec("cmd /c time " + time_string);
