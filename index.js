const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const output_code = document.getElementById('output_code');
let html_code = `
<html>
<head>
<title>Aryan Code Editor</title>
<style>${css.value}</style>
</head>
<body>${html.value}<script>${js.value}</script></body>
</html>
`
html.addEventListener("keyup", (event) => {
    html_code = `
<html>
<head>
<title>Aryan Code Editor</title>
<style>${css.value}</style>
</head>
<body>${html.value}<script>${js.value}</script></body>
</html>
`
    output_code.srcdoc = html_code
})

css.addEventListener("keyup", (event) => {
    html_code = `
<html>
<head>
<title>Aryan Code Editor</title>
<style>${css.value}</style>
</head>
<body>${html.value}<script>${js.value}</script></body>
</html>
`
    output_code.srcdoc = html_code
})

js.addEventListener("keyup", (event) => {
    html_code = `
<html>
<head>
<title>Aryan Code Editor</title>
<style>${css.value}</style>
</head>
<body>${html.value}<script>${js.value}</script></body>
</html>
`
    output_code.srcdoc = html_code
})




document.getElementById("newtab").addEventListener("click", (event) => {
    const newTab = window.open(); // Opens a new tab
    newTab.document.open();
    newTab.document.write(html_code); // Writes the HTML content to the new tab
    newTab.document.close();
})


document.getElementById("h_open").addEventListener("click", (event) => {
    document.querySelector(".html_box").style.flexGrow = 12;
    document.getElementById("h_open").style.display = "none";
    document.getElementById("h_close").style.display = "block";
})

document.getElementById("c_open").addEventListener("click", (event) => {
    document.querySelector(".css_box").style.flexGrow = 12; 
    document.getElementById("c_open").style.display = "none";
    document.getElementById("c_close").style.display = "block";
})

document.getElementById("j_open").addEventListener("click", (event) => {
    document.querySelector(".js_box").style.flexGrow = 12; 
    document.getElementById("j_open").style.display = "none";
    document.getElementById("j_close").style.display = "block";
})

document.getElementById("h_close").addEventListener("click", (event) => {
    document.querySelector(".html_box").style.flexGrow = 1; 
    document.getElementById("h_close").style.display = "none";
    document.getElementById("h_open").style.display = "block";
})

document.getElementById("c_close").addEventListener("click", (event) => {
    document.querySelector(".css_box").style.flexGrow = 1; 
    document.getElementById("c_close").style.display = "none";
    document.getElementById("c_open").style.display = "block";
})

document.getElementById("j_close").addEventListener("click", (event) => {
    document.querySelector(".js_box").style.flexGrow = 1; 
    document.getElementById("j_close").style.display = "none";
    document.getElementById("j_open").style.display = "block";
})