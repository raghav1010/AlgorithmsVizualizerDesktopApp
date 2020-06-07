function pushstack() {
	var data = document.getElementById("data").value
	eel.push_stack(data)(run)
}

function popelement()
{
  eel.pop_ele()(run2)
}

async function run(li) {
	var a=li[0];

if(typeof a[4] !== "undefined"){
  document.getElementById('output1').value = a[4];
}
if(typeof a[3] !== "undefined"){
	document.getElementById('output2').value = a[3];
}
if(typeof a[2] !== "undefined"){
	document.getElementById('output3').value = a[2];
}
if(typeof a[1] !== "undefined"){
	document.getElementById('output4').value = a[1];
}
if(typeof a[0] !== "undefined"){
	document.getElementById('output5').value = a[0];
}


    document.getElementById('top').value = li[1];
}
async function run2(val) {
	var a=val[1];

    document.getElementById('top').value = val[0];
		if(typeof a[4] !== "undefined"){
		  document.getElementById('output1').value = a[4];
		}
		else {
			document.getElementById('output1').value = " ";
		}
		if(typeof a[3] !== "undefined"){
			document.getElementById('output2').value = a[3];
		}
		else {
			document.getElementById('output2').value = " ";
		}
		if(typeof a[2] !== "undefined"){
			document.getElementById('output3').value = a[2];
		}
		else {
			document.getElementById('output3').value = " ";
		}
		if(typeof a[1] !== "undefined"){
			document.getElementById('output4').value = a[1];
		}
		else {
			document.getElementById('output4').value = " ";
		}
		if(typeof a[0] !== "undefined"){
			document.getElementById('output5').value = a[0];
		}
		else {
			document.getElementById('output5').value = " ";
		}
}






/* linked-list part*/
function insertatend() {
	var data = document.getElementById("data").value
	eel.insert_end(data)(run3)
}
function insertatbeg() {
	var data = document.getElementById("data").value
	eel.insert_beg(data)(run3)
}
async function run3(li) {
	var a=li[0];

if(typeof a[4] !== "undefined"){
  document.getElementById('output5').value = a[4];
}
if(typeof a[3] !== "undefined"){
	document.getElementById('output4').value = a[3];
}
if(typeof a[2] !== "undefined"){
	document.getElementById('output3').value = a[2];
}
if(typeof a[1] !== "undefined"){
	document.getElementById('output2').value = a[1];
}
if(typeof a[0] !== "undefined"){
	document.getElementById('output1').value = a[0];
}


    document.getElementById('del').value = li[1];
}

function deletefromfront()
{
	eel.del_beg()(run4)
}
function deletefromend()
{
	eel.del_end()(run4)
}
async function run4(val)
{
	var a=val[1];

    document.getElementById('del').value = val[0];

		if(typeof a[0] !== "undefined"){
		  document.getElementById('output1').value = a[0];
		}
		else {
			document.getElementById('output1').value = " ";
		}
		if(typeof a[1] !== "undefined"){
			document.getElementById('output2').value = a[1];
		}
		else {
			document.getElementById('output2').value = " ";
		}
		if(typeof a[2] !== "undefined"){
			document.getElementById('output3').value = a[2];
		}
		else {
			document.getElementById('output3').value = " ";
		}
		if(typeof a[3] !== "undefined"){
			document.getElementById('output4').value = a[3];
		}
		else {
			document.getElementById('output4').value = " ";
		}
		if(typeof a[4] !== "undefined"){
			document.getElementById('output5').value = a[4];
		}
		else {
			document.getElementById('output5').value = " ";
		}
}
