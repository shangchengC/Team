function create() {

    //create a div
    var div = document.createElement("div");

    //create class = "test" for dive
    var divattr = document.createAttribute("id");
    divattr.value = "main_div";

    //add class = "test" to div
    div.setAttributeNode(divattr);

    //create edit button
    var edit_btn = document.createElement("input");
    edit_btn.setAttribute("type","button");
    edit_btn.setAttribute("value","edit");
    edit_btn.setAttribute("style","display:block");
    edit_btn.setAttribute("id","edit");
    edit_btn.setAttribute("onclick","edit_on_click()");


//create text area
    var input = document.createElement("input");
    var inputattr = document.createAttribute("type");
    inputattr.value = "text";
    input.setAttributeNode(inputattr);
    var inputattr1 = document.createAttribute("placeholder");
    inputattr1.value = "bitte here schreiben";
    input.setAttributeNode(inputattr1);
    var inputattr = document.createAttribute("style");
    inputattr.value = "display:none";
    input.setAttributeNode(inputattr);
    var inputattr2 = document.createAttribute("id");
    inputattr2.value = "input1";
    input.setAttributeNode(inputattr2);

    //create save button
    var save_btn = document.createElement("input");
    save_btn.setAttribute("type","button");
    save_btn.setAttribute("value","save");
    save_btn.setAttribute("style","display:none");
    save_btn.setAttribute("id","save");
    save_btn.setAttribute("onclick","save_on_click()");

//create delete button
    var delete_btn = document.createElement("input");
    delete_btn.setAttribute("type","button");
    delete_btn.setAttribute("value","delete");
    delete_btn.setAttribute("onclick","delete_on_click()");


    //create text 请输入内容
    var label = document.createElement("label");
    var text = document.createTextNode("einschreiben here ");
    label.appendChild(text);
    label.setAttribute("id","text1");

    //add botton and text to dive
    div.appendChild(edit_btn);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(save_btn);
    div.appendChild(delete_btn);



    //create dive style
    var style = document.createAttribute("style");
    div.setAttributeNode(style);
    div.style.backgroundColor = "#F00";
    div.style.borderWidth = "20px";
    div.style.borderColor = "#000";
    div.style.width = "300px";
    div.style.height = "300px";
    div.style.marginLeft = "10%";
    div.style.marginTop = "1%";

    //add div to body
    document.getElementsByClassName("content-right").item(0).appendChild(div);
}

function edit_on_click(){
    var x=document.getElementById("text1");//获取输入框元素
    var y=document.getElementById("input1"); //获取id为html的元素

    var z=document.getElementById("edit");
    var w=document.getElementById("save");

    swap(x,y);
    rotate(z,w);
}

function save_on_click(){
    var x=document.getElementById("input1");//获取输入框元素
    var y=document.getElementById("text1"); //获取id为html的元素

    var z=document.getElementById("save");
    var w=document.getElementById("edit");

    swap(x,y);
    rotate(z,w);

}

function swap(x,y) {
    var hide_attr = document.createAttribute("style");
    hide_attr.value = "display:none";
    x.setAttributeNode(hide_attr);
    var display_attr = document.createAttribute("style");
    display_attr.value = "display:block";
    y.setAttributeNode(display_attr);
    y.innerHTML =x.value; //将输入框的值赋给div标签
}

function rotate(x,y) {
    var hide_attr = document.createAttribute("style");
    hide_attr.value = "display:none";
    x.setAttributeNode(hide_attr);
    var display_attr = document.createAttribute("style");
    display_attr.value = "display:block";
    y.setAttributeNode(display_attr);
}

function delete_on_click(){
    e = document.getElementById('main_div')
    e.parentNode.removeChild(e);
}
