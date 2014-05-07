var req_btn = document.querySelector("#req_btn");
var res_div = document.querySelector("#res_div");

req_btn.onclick = function(e) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://github.com/mahata", true);
    xhr.responseType = "document";
    xhr.onload = function(e) {
        if (this.status === 200) {
            console.log(this.responseXML.title);
            res_div.innerText = this.responseXML.title;
        }        
    };
    xhr.send();
}
