function UpdateColor (color,element)
{
    //document.body.style.background = color;
    var display = document.getElementById(element).style.background = color;
}

function EnableDisable(element) 
{
    var display = document.getElementById(element).style.display;
    var botao = document.getElementById("enableDisable");

    if(display == "none") {
        document.getElementById(element).style.display = 'block';
        botao.innerHTML = "Esconder";
    }
    else {
        document.getElementById(element).style.display = 'none';
        botao.innerHTML = "Mostrar";
    }
}

function DisableButton()
{
    var btnVisible=0;
    if ((document.getElementById('valueCheck1').checked)) 
    {
       btnVisible++;
    }
    if ((document.getElementById('valueCheck2').checked)) 
    {
        btnVisible++;  
    }
    if ((document.getElementById('valueCheck3').checked)) 
    {
        btnVisible++; 
    }
    if (btnVisible >= 2) 
    {
        var display = document.getElementById('buttonVisible').style.display = 'block';
    }
    else
    {
        var display = document.getElementById('buttonVisible').style.display = 'none';
    }

}

function ChangeFont(font) 
{
    var texto = document.getElementById('paragraph2').style.fontFamily = font; 
}

function TextTransform(metodo) 
{
    var texto = document.getElementById('paragraph2').style.textTransform = metodo;
    
}

function DarkLight()
{
    var botao = document.getElementById('darklight');
    var texto = document.getElementById('paragraph2').style.color;    
    if (texto == "white") 
    {
        document.getElementById('paragraph2').style.color = 'black';
        document.getElementById('paragraph2').style.background = 'white';
        botao.innerHTML = "<i class=\"fas fa-adjust\"></i><br>Dark";
    }
    else
    {
        document.getElementById('paragraph2').style.color = 'white';
        document.getElementById('paragraph2').style.background = 'black';
        botao.innerHTML = "<i class=\"fas fa-adjust\"></i><br>Light";
    }
}


function ValidationLogin()
{
    
    var pass = document.getElementById("password");
    var cfm = document.getElementById("confirmed");

    if ((pass.value.length < 6 || pass.value.length > 10) &&
     (cfm.value.length < 6 || cfm.value.length > 10)) {
        alert('O campo deve conter entre 6 a 10 caracteres.');
        pass.select();
        pass.focus(); 
    }
    else
    {
        if (pass.value == cfm.value) 
        {
            alert("Login realizado com sucesso")    
        }
        else
        {
            alert("Os campos não coincidem...")
            pass.select();
            pass.focus(); 
        }
    }

}


function ValidationRegister(elemento, valor)
{
    var opcao = document.getElementById(elemento);
    var escolha = opcao.value = valor;

    if (escolha == "cpf") 
    {
        document.getElementById('cnpj').disabled = true;
        document.getElementById('cpf').disabled = false;
        document.getElementById('cnpj').value = "";
    }
    else
    {
        document.getElementById('cnpj').disabled = false;
        document.getElementById('cpf').disabled = true;
        document.getElementById('cpf').value = "";
    }
}

var corCompleta = ""
var corIncompleta = ""

function ResetCampos(){
    var textFields = document.getElementsByTagName("input");
        for(var i=0; i < textFields.length; i++){
        if(textFields[i].type == "text"){
            textFields[i].style.backgroundColor = "";
            textFields[i].style.borderColor = "";
        }
    }   
}

function coresMask(t){
	var l = t.value;
	var m = l.length;
	var x = t.maxLength;
	if(m==0){
		t.style.borderColor="";
		t.style.backgroundColor="";
	}
	else if(m<x){
		t.style.borderColor=corIncompleta;
		t.style.backgroundColor=corIncompleta;
	}else{
		t.style.borderColor=corCompleta;
		t.style.backgroundColor=corCompleta;
	}
}

function mascara(m,t,e,c){
	var cursor = t.selectionStart;
	var texto = t.value;
	texto = texto.replace(/\D/g,'');
	var l = texto.length;
	var lm = m.length;
	if(window.event) {                  
	    id = e.keyCode;
	} else if(e.which){                 
	    id = e.which;
	}
	cursorfixo=false;
	if(cursor < l)cursorfixo=true;
	var livre = false;
	if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
 	ii=0;
 	mm=0;
 	if(!livre){
	 	if(id!=8){
		 	t.value="";
		 	j=0;
		 	for(i=0;i<lm;i++){
		 		if(m.substr(i,1)=="#"){
		 			t.value+=texto.substr(j,1);
		 			j++;
		 		}else if(m.substr(i,1)!="#"){
		 			t.value+=m.substr(i,1);
		 		}
		 		if(id!=8 && !cursorfixo)cursor++;
		 		if((j)==l+1)break;
		 		
		 	} 	
	 	}
	 	if(c)coresMask(t);
 	}
 	if(cursorfixo && !livre)cursor--;
 	t.setSelectionRange(cursor, cursor);
}

