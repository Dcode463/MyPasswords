// Service of caches
navigator.serviceWorker.register('service.js');
let version = 'version-0.3.0';
caches.keys().then(key => { // abrir cahce
	key.map(cache => {
	   if(version !== cache) {
		  caches.delete(cache)
	   }
	})
	   })
//////////////////////////////////////////////////////////
const rango = document.getElementById('rangeInput');
const chexboxMayusculas = document.getElementById('checkboxMayusculas')
const chexboxMinusculas = document.getElementById('checkboxMinusculas')
const chexboxNumeros = document.getElementById('checkboxNumeros')
const chexboxLestrasExtras = document.getElementById('checkboxMiTxt')
const chexboxletrasEspeciales = document.getElementById('checkboxLestrasEspeciales');
const buttonCopiar = document.getElementById('buttonCopiar');
const aplicadordecambios = document.getElementById('aplicarCambios');
const buttonRegenerar = document.getElementById('regenerar')
const containerButton = document.getElementById('prompButtons')
const buttonOpenContainerKey = document.getElementById('buttonMenuKey');
const resultado = document.getElementById('resultado')
const rangeSegurity = document.getElementById('rangeSecurity');
const commentSegurity = document.getElementById('commentSegurity');
const allButtons = document.querySelectorAll('.buttons');
let contentGenradorItem = document.getElementById('itemPassword');
let contentGenradorItemTwo = document.getElementById('itemPassword')
let u = true;
let mayusculas = true;
let minusculas = false;
let numeros = false;
let letrasEspeciales = false;
let o = true;

const objectDocument = {
	containerKeys : {
		element : document.getElementById('containerKeys'),
		open : (funcion) => {objectDocument.containerKeys.element.style.display = 'block'; if(funcion)setTimeout(()=>{objectDocument.containerKeys.element.classList.replace('mininizar','maximizar')},10)},
		close : (funcion) => { if(funcion) {objectDocument.containerKeys.element.classList.replace('maximizar','mininizar'); setTimeout(()=> {objectDocument.containerKeys.element.style.display = 'none';},100)} else {objectDocument.containerKeys.element.style.display = 'none';}}
	},
	sobrePonerBody : {
		element : document.getElementById('sobrePoner'),
		open : (a) => {if(a)objectDocument.sobrePonerBody.element.classList.replace('sobreponerReponsive','sobreponerReponsiveActive');objectDocument.sobrePonerBody.element.style.display = 'block'},
		close : (a) => {if(a)objectDocument.sobrePonerBody.element.classList.replace('sobreponerReponsiveActive','sobreponerReponsive');objectDocument.sobrePonerBody.element.style.display = 'none'}
	},
 //////////////// buttons
		 buttoncloseContainerKey :  document.getElementById('closeContainerKey'),
		 buttonSaveKey : document.getElementById('guardar'),
	//// container saveKey
	containerSaveKey : {
	  element : document.getElementById('containerSave'),
	  open : () => {objectDocument.containerSaveKey.element.style.display = 'block'; setTimeout(()=> {objectDocument.containerSaveKey.element.classList.replace('inactive','active')},20);},
	  close : () => {objectDocument.containerSaveKey.element.classList.replace('active','inactive'); setTimeout(()=> {objectDocument.containerSaveKey.element.style.display = 'none';},100)}
	},
inputPasswordS : document.getElementById('PasswordOfSave'),
inputCommitS : document.getElementById('commitOfSave'),
noKeysContainerKey : {
	element : document.getElementById('noKeys'),
	open : () => objectDocument.noKeysContainerKey.element.style.display = 'flex',
	close : () => objectDocument.noKeysContainerKey.element.style.display = 'none'
}, 
containerPushPassword : {
 element : document.getElementById('pushContainer'),
 add : child => objectDocument.containerPushPassword.element.appendChild(child)
},
containerView : {
	element : document.getElementById('containerView'),
	open : () => {objectDocument.sobrePonerBody.element.classList.replace('sobreponerReponsive','sobreponerReponsiveActive');objectDocument.containerView.element.style.display = 'flex'},
	close : () => {objectDocument.sobrePonerBody.element.classList.replace('sobreponerReponsiveActive','sobreponerReponsive');;objectDocument.containerView.element.style.display = 'none'}
},
alertCommit : {
	element : document.getElementById('alertCommit'),
	open : () => objectDocument.alertCommit.element.style.display = 'flex',
	close : () => objectDocument.alertCommit.element.style.display = 'none'
},
textContainer : document.getElementById('commentALERT'),
objectFunctionCommitAlert :  (funcion,alerta) => {
  if(funcion) {
objectDocument.errorSound.play()
	objectDocument.alertCommit.element.style.opacity = '1'
objectDocument.alertCommit.open(); setTimeout(()=> {objectDocument.alertCommit.element.style.opacity = '0'},2500);
objectDocument.textContainer.textContent = alerta
}
},
errorSound : document.getElementById('errorSound'),
passwordView : document.getElementById('passwordView'),
exitContainerView : document.getElementById('exitContainerView'),
copiarView : document.getElementById('copiarView'),
borrarView : document.getElementById('borrarView'),
searchInput : document.getElementById('searchInput'),
/// buttons of saveKey
buttonCancelSave : document.getElementById('saveCancel'),
buttonSave : document.getElementById('saveConfirm'),
// other name
checkboxBinariTraductor : document.getElementById('checkboxBinariTraductor'),
chexboxOtherName : document.getElementById('checkboxNameOther'),
labelOtherName : document.getElementById('nameOther'),
inputOtherName : {
	element : document.getElementById('inputNameOther'),
	open : () => {
		    objectDocument.inputOtherName.element.style.display = 'inline-block'; 
			   objectDocument.labelOtherName.style.display = 'none';
setTimeout(()=>{
	objectDocument.inputOtherName.element.style.width = '70%'; 

},100)
	},
	close : ()=> {
		objectDocument.inputOtherName.element.style.width = '10%'; 

		setTimeout(()=>{
		objectDocument.inputOtherName.element.style.display = 'none'; 
		objectDocument.labelOtherName.style.display = 'inline-block';


		},200)
	}
},
// container config customizations
containerConfigcustomizations : {
 element : document.getElementById('containerConfigPesonalization'),
open : () => {
	 objectDocument.containerConfigcustomizations.element.style.display = 'block';
	objectDocument.containerConfigcustomizations.element.style.opacity = 1;
	objectDocument.containerConfigcustomizations.element.style.color = 'grey';
	setTimeout(()=> {objectDocument.containerConfigcustomizations.element.style.opacity = '0'},200)
	setTimeout(()=> {objectDocument.containerConfigcustomizations.element.style.opacity = '1';
	objectDocument.containerConfigcustomizations.element.style.color = 'grey';
},500)
},
close : () => {
	objectDocument.containerConfigcustomizations.element.style.display = 'none';
	objectDocument.containerConfigcustomizations.element.style.opacity = 0;
}
},
checkboxEncode : document.getElementById('checkboxEncode'),
checkboxBinari : document.getElementById('checkboxBinari'),
//container no results
containerNoResults : document.getElementById('noResults'),
containerNoResultsTxt : document.getElementById('textNoResults'),
// container Customization Design
buttonActiveContainerCustomization : document.getElementById('buttonConfig'),
buttonExitContainerCustomization : document.getElementById('exitContainerPersonalizacion'),
containerCustomizations : {
element : document.getElementById('containerPersonalizacion'),
	open : () => {objectDocument.containerCustomizations.element.style.display = 'flex'},
	close : () => {objectDocument.containerCustomizations.element.style.display = 'none'}
},
contentGenratorBody : {
element : document.getElementById('contentGenrator'),
changeStyle : clas => {
let classBefore = objectDocument.contentGenratorBody.element.classList
objectDocument.contentGenratorBody.element.classList.replace (classBefore[0], clas)
}
},

dayModeBox : document.getElementById('dayMode'),
defaultModeBox : document.getElementById('defaultModeBox'),
NigthModeBox : document.getElementById('NigthMode')
} 


actulizaraRango();

mayusculasP.innerHTML = ` <i class="fa-solid fa-arrow-right"></i>  <P style ="color:white; display:inline-block; font-size :12px;">  ABC</P>`;



const copiar = (element,funcion) => 
	{ 
let buttonCopy;
	if(funcion != undefined){
buttonCopy = buttonCopiar;
	}
else {
	buttonCopy = objectDocument.copiarView;
}
	  const copiar = document.createRange();
	  copiar.selectNode(element)
	  window.getSelection().removeAllRanges();
	  window.getSelection().addRange(copiar);
	  try { 
   const exito = document.execCommand('copy');
   const mensaje = exito ? '  copiado ' : 'la copia no fue exitosa';
   buttonCopy.innerHTML = mensaje + ' <i class="fa-solid fa-thumbs-up fa-fade"></i>';
   buttonCopy.style.background = 'royalblue'
   setTimeout(()=> { buttonCopy.innerHTML = `copiar  <i class="fa-sharp fa-solid fa-copy"></i>`;
   buttonCopy.style.background = 'black'
}, 1000)
	  }catch(err){
	  	console.error('error al copiar el contenido : ', err);
	  }
	  window.getSelection().removeAllRanges();
}



function numberAleatorio(){
	let num = [1,2,3,4,5,6,7,8,9,0];
    var numeros = Math.floor(Math.random() * num.length);
    var datoAleatorio = num[numeros]; 
    return datoAleatorio;
}

function letraAleatorias(){
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
	             "j", "k", "l", "m","n", "ñ", "o", "p", "q", "r",
				  "s", "t", "u", "v", "w", "x", "y", "z"];
    var letra = Math.floor(Math.random() * letras.length);
    var LetraAleatoria = letras[letra]; 
    return LetraAleatoria;
}

function letraAleatoriasMayus(){
    let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
	              "K", "L", "M","N", "Ñ", "O", "P", "Q", "R", "S", "T",
				  "U", "V", "W", "X", "Y", "Z"];
    var letraMayus = Math.floor(Math.random() * letras.length);
    var LetraAleatoriaMayus = letras[letraMayus]; 
    return LetraAleatoriaMayus;
}
function letraAleatoriasEspeciales(){
	let signos =  [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*',
        '+', ',', '-', '.', '/', ':', ';', '<', '=', '>',
        '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
    ];
    var signosR = Math.floor(Math.random() * signos.length);
    var signosAleatorios = signos[signosR]; 
    return signosAleatorios;
}

function validor(){
if (mayusculas === false && minusculas === false && numeros === false && letrasEspeciales === false && objectDocument.chexboxOtherName.checked === false ) {
pAlert.textContent = "Selecione los terminos que desea en la configuracion";
configID.style.borderLeft = "solid 2px red";
configID.style.opacity = 0.5;
setTimeout(()=> configID.style.opacity = '1', 200)
rango.setAttribute('disabled','true')
o = false;
buttonCopiar.style.cursor = 'not-allowed'; buttonCopiar.style.opacity = 0.5
buttonRegenerar.style.cursor = 'not-allowed'; buttonRegenerar.style.opacity = 0.5
objectDocument.buttonSaveKey.style.cursor = 'not-allowed'; objectDocument.buttonSaveKey.style.opacity = 0.5

} else{
o = true;
if(!objectDocument.chexboxOtherName.checked)rango.disabled = false
buttonCopiar.style.cursor = 'pointer'; buttonCopiar.style.opacity = 1
buttonRegenerar.style.cursor = 'pointer'; buttonRegenerar.style.opacity = 1
objectDocument.buttonSaveKey.style.cursor = 'pointer'; objectDocument.buttonSaveKey.style.opacity = 1
   pAlert.textContent = "";
	configID.style.border = "none";
   contentGenradorItem.style.display = "block";
	resultado.innerHTML= `Espere <i class="fa-solid fa-spinner fa-spin"></i>`;
generator()
}
}
validor()

async function generator(){
	const b = {
		mayusculas_A : {
		   verificador : mayusculas,
		   funcion :  letraAleatoriasMayus
		},
		minusculas_A : {
		verificador : 	minusculas,
		funcion : letraAleatorias
		},
		numeros_A : {
		   verificador : numeros,
		   funcion : numberAleatorio
		},
		signos_A : {
		   verificador : letrasEspeciales,
		   funcion : letraAleatoriasEspeciales
		}
	   }
containerButton.style.opacity = '1'
resultado.textContent = "";
buttonCopiar.style.display = 'block';
const a = [];
const assets = [];
const matriz = Object.keys(b); 
let particion = 0;
for(let i = 0; i < matriz.length; i++)
{
	let verificador = b[matriz[i]].verificador;
	if(verificador) assets.push(b[matriz[i]].funcion)
}
particion = parseInt(rango.value) / assets.length;
for (let j = 0; j < assets.length; j++) 
{

for (let w = 0; w < particion; w++)
{
	let request = await assets[j]();
 a.push(request);
}
}
for(let y = a.length - 1;  y > 0; y--) { 
	let index = Math.floor(Math.random() * (y + 1));
	 [a[y], a[index]] = [a[index], a[y]];
}
let tiempo = 1;
for(let e = 0; e < a.length; e++) {
	let bElement = document.createElement('b');bElement.classList.add('pNew');
	bElement.textContent = a[e];
	bElement.style.opacity = '0';
	resultado.appendChild(bElement);
	tiempo = tiempo + 5
setTimeout(()=> {
	bElement.style.opacity = '1';
	},tiempo)
}
tiempo = 130
if (resultado.childElementCount > rango.value){
	let repeticiondefor = resultado.childElementCount - rango.value;
	for(i=0; i < repeticiondefor; i++){
	 let elementosExedidos = resultado.firstElementChild;
	resultado.removeChild(elementosExedidos)
	}
   }
}

////////////////////////////update >>> 7/1/2024

function actulizaraRango(){
	let valorRango =  rango.value;
let rangoNameInput =  objectDocument.inputOtherName.element.value.length;
	  rangeP.textContent = valorRango;
if(!mayusculas && !minusculas && !letrasEspeciales && !numeros && objectDocument.chexboxOtherName.checked === false) {
	rangeSegurity.style.width = '0.4%';
rangeSegurity.style.background = 'black';
commentSegurity.innerHTML = ' <i id="iconsSegurityId" class="fa-solid fa-sliders"></i>  Configure primero';
resultado.innerHTML = '';
}
  else if(valorRango <= 4 ) {
rangeSegurity.style.width = '5%';
rangeSegurity.style.background = 'red';
commentSegurity.innerHTML = ' <i id="iconsSegurityId" class=" fa-regular fa-face-dizzy"></i> Seguridad Media'

  }
  else if (valorRango  >= 5 && valorRango < 12)
	  {
		  rangeSegurity.style.width = '25%';
		  rangeSegurity.style.background = 'rgb(255, 140, 0)';
		  commentSegurity.innerHTML = '<i id="iconsSegurityId" class="  fa-regular fa-face-flushed"></i> Seguridad Media'
			}
	  else if (valorRango >= 12 && valorRango <= 15){
		  rangeSegurity.style.width = '35%';
		  rangeSegurity.style.background = 'rgb(255, 213, 0)';
		  commentSegurity.innerHTML = '<i id="iconsSegurityId" class="  fa-regular fa-face-grin"></i> Seguridad Alta' 

	  }
	  else if(valorRango >= 16 && valorRango <= 30) {
		  rangeSegurity.style.width = '45%';
		  rangeSegurity.style.background = 'rgb(221, 255, 0)';
		  commentSegurity.innerHTML = '<i id="iconsSegurityId" class="  fa-regular fa-face-grin-beam"></i> Seguridad Super Alta'
	  }
	  else if(valorRango >= 31 && valorRango <= 49) { 
		  rangeSegurity.style.width = '75%';
		  rangeSegurity.style.background = 'rgb(132, 255, 0)';
		  commentSegurity.innerHTML = '<i id="iconsSegurityId" class=" fa-solid fa-ghost"></i> Modo Ghost'

	  }
	  else if(valorRango >= 50){
		  rangeSegurity.style.width = '100%';
		  rangeSegurity.style.background = 'rgb(0, 255, 81)';
		  commentSegurity.innerHTML = ' <i id="iconsSegurityId" class=" fa-solid fa-user-secret"></i> Modo Anonimus'

	  }
	  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  if(objectDocument.chexboxOtherName.checked) {
	if(objectDocument.checkboxBinari.checked){
		rangeP.textContent = resultado.textContent.length;
		rangoNameInput =   resultado.textContent.length
	}
	else{
		rangeP.textContent = rangoNameInput;
		rangoNameInput = objectDocument.inputOtherName.element.value.length
	}
		if(rangoNameInput <= 4 ) {
			rangeSegurity.style.width = '5%';
			rangeSegurity.style.background = 'red';
			commentSegurity.innerHTML = ' <i class=" fa-regular fa-face-dizzy"></i> Seguridad baja'
			
			  }
			  else if (rangoNameInput  >= 5 && rangoNameInput < 12)
				  {
					  rangeSegurity.style.width = '25%';
					  rangeSegurity.style.background = 'rgb(255, 140, 0)';
					  commentSegurity.innerHTML = '<i class="  fa-regular fa-face-flushed"></i> Seguridad Media'
						}
				  else if (rangoNameInput >= 12 && rangoNameInput <= 15){
					  rangeSegurity.style.width = '35%';
					  rangeSegurity.style.background = 'rgb(255, 213, 0)';
					  commentSegurity.innerHTML = '<i class="  fa-regular fa-face-grin"></i> Seguridad Alta' 
			
				  }
				  else if(rangoNameInput >= 16 && rangoNameInput <= 30) {
					  rangeSegurity.style.width = '45%';
					  rangeSegurity.style.background = 'rgb(221, 255, 0)';
					  commentSegurity.innerHTML = '<i class="  fa-regular fa-face-grin-beam"></i> Seguridad Super Alta'
				  }
				  else if(rangoNameInput >= 31 && rangoNameInput <= 49) { 
					  rangeSegurity.style.width = '75%';
					  rangeSegurity.style.background = 'rgb(132, 255, 0)';
					  commentSegurity.innerHTML = '<i class=" fa-solid fa-ghost"></i> Modo Ghost'

				  }
				  else if(rangoNameInput >= 50){
					  rangeSegurity.style.width = '100%';
					  rangeSegurity.style.background = 'rgb(0, 255, 81)';
					  commentSegurity.innerHTML = ' <i class=" fa-solid fa-user-secret"></i> Modo Anonimus'
			
				  }
	  } else  {
		validor()
	  }
	  return valorRango;
}
const openDataBase = nameDataBase => new Promise ((resolve,reject) => { 
	const dataBase = indexedDB.open(nameDataBase); 
	dataBase.onupgradeneeded = () => {
		const result = dataBase.result;
		const requestCreatorTable = result.createObjectStore('memori',{autoIncrement : true})
		requestCreatorTable.createIndex('commit','commit', {unique : false});
		requestCreatorTable.createIndex('password', 'password', {unique : false});
		requestCreatorTable.createIndex('fecha', 'fecha', {unique : false});
		resolve(true)
	}
	dataBase.onsuccess = () => resolve (false);
   dataBase.onerror = () => resolve(20);
	})
openDataBase('memori') // abrir base de datos
const pushDataBase = (password, commit, date) => new Promise ((resolve,reject) => {
	let dt = indexedDB.open('memori');
	dt.onsuccess = () => {
		 let db = dt.result;
		 let trasaction = db.transaction('memori','readwrite');
		 let objectStore = trasaction.objectStore('memori');
		 let dataSend = {commit : commit, password : password, fecha : date};
		 objectStore.add(dataSend);
		 trasaction.oncomplete = () => resolve(true);
		 trasaction.onerror = () => reject(true); 
	}
  })
const requestPasswords = () => new Promise ( async (resolve,reject) => {
	let dtb = await openDataBase('memori')
	let db = indexedDB.open('memori');
	  db.onsuccess = () => {
         let rs = db.result;
		 let trasaction = rs.transaction('memori', 'readwrite');
		 let objectStore = trasaction.objectStore('memori')
		 let response = objectStore.getAll();
		 trasaction.oncomplete = (e) => resolve(response.result)
		 trasaction.onerror = (e) => reject(e)
}
})
const whatMyKeyid = async nameKey => new Promise ( async (resolve, reject)=> {
	const keys = [];
	const commits = [];
	let commitsRequest =  await requestPasswords();
	commitsRequest.forEach(commit => {
		commits.push(commit.commit)
	});
	let dataBase = indexedDB.open('memori');
	dataBase.onsuccess = () => {
	let	dt = dataBase.result;
	let trasaction = dt.transaction('memori', 'readwrite');
	let storage = trasaction.objectStore('memori');
	let request = storage.openCursor()
	request.onsuccess = e => {
		if(request.result) {
			keys.push(request.result.key)
			request.result.continue()
		}else {
			   let index = commits.indexOf(nameKey)
	resolve(keys[index])
		}
	} 
	}
	})
const openContainerKey = async (funcion) => {
	objectDocument.sobrePonerBody.open(false); objectDocument.containerKeys.open(true);
	let openDataBaseRequest = await openDataBase('memori');
   let resquestObjectKeys = await requestPasswords();
   let matrizOne;
if(funcion) matrizOne = resquestObjectKeys 
else if (funcion === false) matrizOne = resquestObjectKeys.filter(e => e.commit.includes(objectDocument.searchInput.value))
if(matrizOne.length === 0) matrizOne = resquestObjectKeys.filter(e => e.password.includes(objectDocument.searchInput.value))

if(resquestObjectKeys.length === 0) { objectDocument.noKeysContainerKey.open(); objectDocument.containerKeys.element.classList.replace('two','one')}
else { objectDocument.noKeysContainerKey.close(); objectDocument.containerKeys.element.classList.replace('one','two')

// ordenamiento
matrizOne.reverse()
if(matrizOne.length === 0) {
	objectDocument.containerNoResults.style.display='block';
	objectDocument.containerNoResultsTxt.innerHTML = `No hay resultados de "${objectDocument.searchInput.value}"`;
}
else{
	objectDocument.containerNoResults.style.display='none';

}
for(let i = 0; i < matrizOne.length; i++){
	let fragmento = document.createDocumentFragment();
    let divContainer = document.createElement('div'); divContainer.classList.add ('push');
	let commit = document.createElement('p'); commit.classList.add ('commitPush'); commit.textContent = matrizOne[i].commit;
	let fecha = document.createElement('p'); fecha.classList.add ('fechaPush'); fecha.textContent =  matrizOne[i].fecha;
let whatKey = await whatMyKeyid(matrizOne[i].commit)
divContainer.onclick = () => openViewData({password : matrizOne[i].password,id : whatKey, content : divContainer})

// divContainer.appendChild(fecha)
divContainer.appendChild(commit); 
fragmento.appendChild(divContainer)
objectDocument.containerPushPassword.add(fragmento)
}
}
}
const closeContainerKey = () => { objectDocument.searchInput.value = '';objectDocument.containerPushPassword.element.innerHTML = '';objectDocument.sobrePonerBody.close(false); objectDocument.containerKeys.close(true);}
const saveFunction = () => { objectDocument.sobrePonerBody.open(true); objectDocument.containerSaveKey.open(false);
   objectDocument.inputPasswordS.value = resultado.textContent;
}
const closeSaveFunction = () => { objectDocument.sobrePonerBody.close(true); objectDocument.containerSaveKey.close(true)
	objectDocument.inputPasswordS.value = ''
}
const validorIdCommit  = async name => {
let password = await requestPasswords()
let validor  = password.some(e => e.commit === name)
if(validor) return false
else if (validor === false) return true
}
const saveKeyFunction = async () => {
let validorCommitId = await validorIdCommit(objectDocument.inputCommitS.value)
	if(objectDocument.inputCommitS.value.length != 0 && objectDocument.inputCommitS.value != ' '  && validorCommitId)
		{
			objectDocument.buttonSave.innerHTML  = 'Guardando <i class="fa-solid fa-database fa-fade"></i>'
			let date = new Date();
			let fecha =  date.getDate() + "-"  + date.getMonth() + 1 + "-" + (date.getDate() < 10 ? "0" : "") + date.getFullYear()
			let validorDataBase = await openDataBase('memori');
			let pushData = await pushDataBase(objectDocument.inputPasswordS.value,objectDocument.inputCommitS.value,fecha)
			if(pushData) {objectDocument.buttonSave.innerHTML  = 'Contraseña guardada <i class="fa-solid fa-check"></i>'; setTimeout(()=> {
				objectDocument.buttonSave.innerHTML = 'Guardar';
			   objectDocument.sobrePonerBody.close(true); objectDocument.containerSaveKey.close(true);
				openContainerKey(true)
			},1000)}
			}else if (validorCommitId) objectDocument.objectFunctionCommitAlert(true, 'Ingrese Un comentario para registralo')
			else objectDocument.objectFunctionCommitAlert(true, `Ups, ya tienes registrado a '${objectDocument.inputCommitS.value}'`)
}
let matrizID;
let content;
const openViewData = (data) => {
	objectDocument.containerKeys.close(false);
  objectDocument.containerView.open();
  objectDocument.passwordView.textContent = data.password;
  matrizID = data.id;
  content = data.content;
}
const closeViewData = () => 
{
	objectDocument.containerKeys.open(false);
	objectDocument.containerView.close();
}
const deleteKeys = () => {
let dataBase = indexedDB.open('memori');
dataBase.onsuccess = () => {
	 let dt = dataBase.result;
	let trasaction = dt.transaction('memori', 'readwrite');
	let object = trasaction.objectStore('memori');
	object.delete(matrizID)
	trasaction.oncomplete = () => {closeViewData();  objectDocument.containerPushPassword.element.removeChild(content)}
}
}
const searchKey = () => {
	objectDocument.containerPushPassword.element.innerHTML = '';
	openContainerKey(false)
}
// nameOther
const generateLetter = a => new Promise ((resolve,reject)=>{
const letters = { "A": "@", "B": "8", "C": "!", "D": "4", "E": "3", "F": "#", "G": "9", "H": "&", "I": "1", "J": "7", "K": "K", "L": "L", "M": "M", "N": "N", "O": "0", "P": "P", "Q": "Q", "R": "R", "S": "$", "T": "T", "U": "U", "V": "V", "W": "W", "X": "X", "Y": "Y", "Z": "2", "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f", "7": "g", "8": "h", "9": "i", "0": "j", "!": "k", "@": "l", "#": "m", "$": "n", "%": "o", "&": "p", "*": "q" };
resolve(letters[a])})
const generateLetterBinari = a => new  Promise((resolve,reject) => {
const binary = {"A":"01000000","B":"01001000","C":"01000001","D":"01000100","E":"00110011","F":"00100011","G":"00111001","H":"00100110","I":"00110001","J":"00110111","K":"01001011","L":"01001100","M":"01001101","N":"01001110","O":"00110000","P":"01010000","Q":"01010001","R":"01010010","S":"00100100","T":"01010100","U":"01010101","V":"01010110","W":"01010111","X":"01011000","Y":"01011001","Z":"00110010","1":"01100001","2":"01100010","3":"01100011","4":"01100100","5":"01100101","6":"01100110","7":"01100111","8":"01101000","9":"01101001","0":"01101010","!":"01101011","@":"01101100","#":"01101101","$":"01101110","%":"01101111","&":"01110000","*":"01110001"," ":"00011011"}
if(typeof a === 'object') {
let matrizKey = Object.keys(binary)
let matriz = Object.values(binary);
let youFined = false;
for(let i = 0;  i < matriz.length; i++) 
{
let bit = [];

for (let x = 0; x < 8; x++)  bit.push(matriz[i][x]); 

let joinBit = bit.join('');
let ubicacion = matriz.indexOf(joinBit);
if(joinBit === a.letter) {youFined = true;resolve(matrizKey[ubicacion]);break}
}
// if(!youFined) resolve(' ')
}
 if(typeof a != 'object')resolve(binary[a])
});
async function e (bitResponse){ 
let bit = bitResponse.trim()
 console.log("Bits " + bit.length)
let saveResponse = [];
let particion = bit.length / 8;
let numBucle = 0;
console.log('Particion de ' + particion)
for(let i = 0; i < particion;  i++)
{ 
	let particitionIndicator  = [];
	for(let y = numBucle; y < numBucle + 8; y++){ if(bit[numBucle + 1] === undefined)particitionIndicator.push(bit[y]); else particitionIndicator.push(bit[y]); }
    numBucle += 8
console.log('particion numero ' + i + " = "+parseInt(particitionIndicator.join('')))
console.log()
let requesting = await generateLetterBinari({letter : particitionIndicator.join('')})
saveResponse.push(requesting)
}
resultado.textContent = saveResponse.join('')
console.log( saveResponse.join(''))
}
const generateName = async funcion => {
if(funcion === undefined) {
	resultado.innerHTML = '';
	let y = objectDocument.inputOtherName.element.value;
for(let a = 0; a < y.length; a++){
	let fragmento = new DocumentFragment();
	let b = document.createElement('b'); b.textContent = y[a]; b.classList.add('pNew');
	fragmento.appendChild(b)
	resultado.appendChild(fragmento) 
}
}else{
	actulizaraRango();
	if(objectDocument.inputOtherName.element.value.length > 0){
		resultado.innerHTML = '';
	const matrizName = [];
	for(let i = 0; i < objectDocument.inputOtherName.element.value.length; i++) {
	let letter = objectDocument.inputOtherName.element.value[i];
	let request;
	if(funcion === 'Encode'){
		request = await generateLetter(letter.toUpperCase())
	}else if(funcion === 'Binari') {
		request = await generateLetterBinari(letter.toUpperCase());
	};

	if(request === undefined && funcion === 'Encode') {
		request = letter;
		let fragmento = new DocumentFragment();
		let b = document.createElement('p'); b.textContent = letter; b.classList.add('pNewP');
		fragmento.appendChild(b)
		resultado.appendChild(fragmento) 
	}
	else {

			let fragmento = new DocumentFragment();
			let b = document.createElement('b'); b.textContent = request; b.classList.add('pNew');
			fragmento.appendChild(b)
			resultado.appendChild(fragmento) 

	}
	}
	}
	else if(objectDocument.inputOtherName.element.value.length < 1) generator()
}
}

const onchangeCheckboxOthername = funcion => {
	validor()

if(objectDocument.inputOtherName.element.style.display === 'none' || funcion) {
	if(funcion) {objectDocument.chexboxOtherName.checked = true}
objectDocument.inputOtherName.open();
if(objectDocument.checkboxBinari.checked) {
generateName('Binari')		
}
else if(objectDocument.checkboxEncode.checked) {
generateName('Encode')	
}
rango.setAttribute('disabled', 'true');objectDocument.containerConfigcustomizations.open()}
else {
objectDocument.containerConfigcustomizations.close()
objectDocument.inputOtherName.close();
resultado.textContent = '';
if(objectDocument.chexboxOtherName.checked === false) {
rango.setAttribute('disabled', 'false')
generator()
}
}
actulizaraRango()
}

const onchangecheckBoxEncode = () => {
	objectDocument.checkboxBinariTraductor.checked = false;

	if(objectDocument.checkboxEncode.checked) {
		objectDocument.checkboxBinari.checked = false
	    generateName('Encode')
	}
else{
	generateName(undefined)
}
}

const copyOfContainerView = () => {
	contentGenradorItemTwo = objectDocument.passwordView; copiar(document.getElementById('passwordView'))}

objectDocument.borrarView.onclick = async () => {
	deleteKeys();
	let requestPasswordsValidor = await requestPasswords()
if(requestPasswordsValidor.length === 0)closeContainerKey()
}

const binaryCheck = () => {
	objectDocument.checkboxBinariTraductor.checked = false;
	if(objectDocument.checkboxBinari.checked) {
		objectDocument.checkboxEncode.checked = false
	generateName('Binari')
setTimeout(()=>{	rangeP.textContent = resultado.textContent.length},200)
	}
	else {
		generateName('Encode')
		objectDocument.checkboxEncode.checked = true
	}
}

const traductorBinary = () => {
	if(objectDocument.checkboxBinariTraductor.checked) {
		resultado.textContent = 'Ingrese un codigo binario';
		objectDocument.checkboxBinari.checked =  false;
		objectDocument.checkboxEncode.checked = false;
	
	}
	else {
		objectDocument.checkboxEncode.checked = true;
	}
}

const  functionsOfCheckbox = checkbox => {
   if(checkbox === 'Minus')
    {
		if (chexboxMinusculas.checked){
			minusculasP.innerHTML = ` <i class="fa-solid fa-arrow-right"></i>  <P style ="color:; display:inline-block; font-size :12px;">  abc</P>`;
			minusculas = true;
	 }else{
         minusculas = false
		 minusculasP.innerHTML = `<i class="fa-solid fa-xmark"></i>  <P style ="color:grey; display:inline-block; font-size :12px;">  abc</P>`;
	 }
	 if(!objectDocument.chexboxOtherName.checked)	validor();
	 actulizaraRango();
   }

   else if (checkbox === 'MAYUS') 
   {
	if (chexboxMayusculas.checked){
		mayusculasP.innerHTML = ` <i class="fa-solid fa-arrow-right"></i>  <P style ="color:; display:inline-block; font-size :12px;">  ABC</P>`;
		mayusculas = true;
}else{
	mayusculasP.innerHTML =` <i class="fa-solid fa-xmark"></i>  <P style ="color:grey; display:inline-block; font-size :12px;">  ABC</P>`;
	mayusculas = false;
}
if(!objectDocument.chexboxOtherName.checked) 	validor();
actulizaraRango();
   }
   else if (checkbox === 'signos') {
	if (chexboxletrasEspeciales.checked){
		letrasExtrasP.innerHTML = ` <i class="fa-solid fa-arrow-right"></i>  <P style ="color:; display:inline-block; font-size :12px;">  $%!</P>`;
		letrasEspeciales = true;
}else{
	letrasExtrasP.innerHTML = `  <i class="fa-solid fa-xmark"></i> <P style ="color:grey; display:inline-block; font-size :12px;">  $%!</P>`;
	letrasEspeciales = false;
}
if(!objectDocument.chexboxOtherName.checked)	validor();
actulizaraRango();
   }
   else if(checkbox === 'Num') {
	if (chexboxNumeros.checked){
		numerosP.innerHTML = ` <i class="fa-solid fa-arrow-right"></i>  <P style ="color:; display:inline-block; font-size :12px;">  1234</P>`;
		numeros = true;
}else{
	numerosP.innerHTML = ` <i class="fa-solid fa-xmark"></i>  <P style ="color:grey; display:inline-block; font-size :12px;">  1234</P>`;
	numeros = false;
}
if(!objectDocument.chexboxOtherName.checked) validor();
actulizaraRango();
   }
}
// --> customizations 
const functionOfCustomizations = desing => { 
if(objectDocument.chexboxOtherName.checked) {
	objectDocument.containerConfigcustomizations.close()
	objectDocument.inputOtherName.close();
	objectDocument.chexboxOtherName.checked = false;
	onchangeCheckboxOthername (false)
}
      if(desing === 'day') 
	  { 
		objectDocument.contentGenratorBody.changeStyle('modeDay'); 
		configID.classList.replace(configID.classList[1],'daymodeConfig');
		iconsSegurityId.classList.replace(iconsSegurityId.classList[0], 'ModeDaySeguriti')
		contentGenradorItem.classList.replace(contentGenradorItem.classList[0], 'modeDayItemPassword')
		a.classList.replace(a.classList[0],'modeDayContainerPersonalizacion');
		// objectDocument.sobrePonerBody.close(); objectDocument.containerCustomizations.close()
		console.log(objectDocument.containerKeys.element.classList[2])
		containerInputsSave.classList.replace(containerInputsSave.classList[1],'daymodeContainerSave')
		objectDocument.buttonCancelSave.classList.replace(objectDocument.buttonCancelSave.classList[1], 'buttonModeDay')
        objectDocument.containerKeys.element.classList.replace(objectDocument.containerKeys.element.classList[2], 'dayModeContainerKey');
		passwordView.style.color = 'black';
        buttonConfig.style.color = 'black'
	}
else if(desing === 'Default') 
{
	objectDocument.contentGenratorBody.changeStyle('defaultMode'); 
	configID.classList.replace(configID.classList[1],'defaultConfig'); 
	iconsSegurityId.classList.replace(iconsSegurityId.classList[0], 'ModeDaySeguriti')
	contentGenradorItem.classList.replace(contentGenradorItem.classList[0], 'defaultModePassword')
	a.classList.replace(a.classList[0],'modeDefaultContainerPersonalizacion');
	// objectDocument.sobrePonerBody.close(); objectDocument.containerCustomizations.close()
	containerInputsSave.classList.replace(containerInputsSave.classList[1],'defaultModeContainerSave')
	objectDocument.buttonCancelSave.classList.replace(objectDocument.buttonCancelSave.classList[1], 'modedefault')
	objectDocument.containerKeys.element.classList.replace(objectDocument.containerKeys.element.classList[2], 'defaultModeContainerKey');
	passwordView.style.color = 'white';
	buttonConfig.style.color = 'white';
}
else if (desing === 'Nigth')
{
	objectDocument.contentGenratorBody.changeStyle('nightModeContentBody'); 
	configID.classList.replace(configID.classList[1],'defaultConfig'); 
	iconsSegurityId.classList.replace(iconsSegurityId.classList[0], 'ModeDaySeguriti')
	contentGenradorItem.classList.replace(contentGenradorItem.classList[0], 'defaultModePassword')
	a.classList.replace(a.classList[0],'modeDefaultContainerPersonalizacion');
	// objectDocument.sobrePonerBody.close(); objectDocument.containerCustomizations.close()
	containerInputsSave.classList.replace(containerInputsSave.classList[1],'defaultModeContainerSave')
	objectDocument.buttonCancelSave.classList.replace(objectDocument.buttonCancelSave.classList[1], 'modedefaultNigth')
	objectDocument.containerKeys.element.classList.replace(objectDocument.containerKeys.element.classList[2], 'defaultModeContainerKey');
	passwordView.style.color = 'white';
	buttonConfig.style.color = 'white';
}
if(chexboxMinusculas.checked) {chexboxMinusculas.checked = false;functionsOfCheckbox('Minus')}else {chexboxMinusculas.checked = true; functionsOfCheckbox ('Minus')}
localStorage.setItem('desing',desing);
}
// ------------> Events

chexboxMinusculas.addEventListener('input',()=>  functionsOfCheckbox('Minus'));

minusculasP.onclick = () => {if(chexboxMinusculas.checked) {chexboxMinusculas.checked = false;functionsOfCheckbox('Minus')}else {chexboxMinusculas.checked = true; functionsOfCheckbox ('Minus')}}

chexboxMayusculas.addEventListener('change', ()=> functionsOfCheckbox('MAYUS'))

mayusculasP.onclick = () => {if(chexboxMayusculas.checked) {chexboxMayusculas.checked = false; functionsOfCheckbox('MAYUS')} else {chexboxMayusculas.checked = true; functionsOfCheckbox('MAYUS')}}

chexboxletrasEspeciales.addEventListener('change', ()=> functionsOfCheckbox('signos'))

letrasExtrasP.onclick = () => {if(chexboxletrasEspeciales.checked) {chexboxletrasEspeciales.checked = false; functionsOfCheckbox('signos')} else {chexboxletrasEspeciales.checked = true; functionsOfCheckbox('signos')}}

chexboxNumeros.addEventListener('change', ()=> functionsOfCheckbox('Num'))

numerosP.onclick = () => {if(chexboxNumeros.checked) {chexboxNumeros.checked = false; functionsOfCheckbox('Num')} else {chexboxNumeros.checked = true; functionsOfCheckbox('Num')}}

buttonCopiar.addEventListener('click', () => copiar(document.getElementById('itemPassword'),false))

rango.addEventListener('input', ()=> {rangeP.textContent = rango.value;actulizaraRango();})


buttonRegenerar.onclick = () => {if (o){buttonRegenerar.innerHTML = `Regenerar <i class="fa-solid fa-rotate fa-spin"></i>`; validor(); setTimeout(()=> {buttonRegenerar.innerHTML = `Regenerar <i class="fa-solid fa-rotate"></i></i>`},100)}}

aplicadordecambios.onclick = () => validor()

buttonOpenContainerKey.onclick = () => openContainerKey(true)

objectDocument.buttoncloseContainerKey.onclick = () => closeContainerKey ()

objectDocument.buttonSaveKey.onclick = () => {if(o) saveFunction ()}

objectDocument.buttonCancelSave.onclick = () => closeSaveFunction ()

objectDocument.inputPasswordS.onchange = () => resultado.textContent = objectDocument.inputPasswordS.value;

objectDocument.buttonSave.onclick = () => saveKeyFunction()

objectDocument.exitContainerView.onclick = () => closeViewData();

objectDocument.searchInput.oninput = () => searchKey();

objectDocument.inputOtherName.element.onkeyup = () => {if(objectDocument.checkboxBinari.checked) generateName('Binari'); else if(objectDocument.checkboxEncode.checked) generateName('Encode');else if(objectDocument.checkboxBinariTraductor.checked) e(objectDocument.inputOtherName.element.value);else generateName(undefined)};

objectDocument.inputCommitS.onkeydown = key => {if(key.key === 'Enter') saveKeyFunction()}

objectDocument.copiarView.onclick = () => copyOfContainerView ()

objectDocument.chexboxOtherName.onchange = () => onchangeCheckboxOthername (false)

objectDocument.checkboxEncode.onclick = () => onchangecheckBoxEncode ()

objectDocument.checkboxBinari.onclick = () => binaryCheck ()

objectDocument.checkboxBinariTraductor.onchange = () => traductorBinary ()

objectDocument.labelOtherName.onclick = () =>  onchangeCheckboxOthername (true)

objectDocument.buttonActiveContainerCustomization.onclick = () => {objectDocument.sobrePonerBody.element.classList.replace('sobreponerReponsive','sobreponerReponsiveActive');objectDocument.sobrePonerBody.open() ;objectDocument.containerCustomizations.open()};

objectDocument.buttonExitContainerCustomization.onclick = () => {objectDocument.sobrePonerBody.element.classList.replace('sobreponerReponsiveActive','sobreponerReponsive');objectDocument.sobrePonerBody.close(); objectDocument.containerCustomizations.close()};

objectDocument.dayModeBox.onclick = () => functionOfCustomizations ('day')

objectDocument.defaultModeBox.onclick = () => functionOfCustomizations ('Default')

objectDocument.NigthModeBox.onclick = () => functionOfCustomizations ('Nigth')

functionOfCustomizations(localStorage.getItem('desing'))