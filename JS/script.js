alert("Pulse aceptar para ingresar a la pagina de Pasteleria Cuchurrumin");

document.querySelector('h1').addEventListener('click',()=>{
    document.body.style.background='pink';
})
window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarPajaros);
	document.getElementById("stop").addEventListener("click",callarPajaros);			
});

function sonarSonido(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","audio/pajaritos.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",sonarSonido);
}

function callarSonido(){
	var iframe = document.getElementsByTagName("iframe");
    if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarSonido);
	}
}