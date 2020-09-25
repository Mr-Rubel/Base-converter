function convert(){
    var deco = document.querySelector(".dec").value;
    var num = parseInt(deco);
    document.querySelector(".btn-bin").value= num.toString(2);
    document.querySelector(".btn-oct").value= num.toString(8);
    document.querySelector(".btn-hex").value= num.toString(16);
}
document.querySelector("#de").addEventListener("keyup", function(){
	var live = document.querySelector("#de").value;
	var show = parseInt(live);
	document.querySelector("#bn").value = show.toString(2);
	document.querySelector("#oc").value = show.toString(8);
	document.querySelector("#hex").value = show.toString(16);
});