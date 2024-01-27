console.log(`=============Applying CSS=========`);
const myprofile=document.querySelector("#myProfile");
console.log(myprofile.innerHTML);
myprofile.style.color="Blue";

console.log(`============= Replacing content unig Jvascript =========`);
const projectInfo=document.querySelector(".projectInfo");
console.log(projectInfo.innerHTML);
projectInfo.innerHTML="Project management focuses on planning and organizing a project and its resources. This includes identifying and managing the lifecycle to be used, applying it to the user-centered design process, formulating the project team, and efficiently guiding the team through all phases until project completion.";

console.log(`==============Removing Child element====================`);
const parent=document.querySelector("#list");
const child=document.querySelector("#removeLi");
console.log(child.innerHTML);
parent.removeChild(child);

