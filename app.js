function execXmd(command){
document.execCommand(command, false, null);
}
function execCmdWithArg(command, arg) {
    document.execCommand(command, false, arg);
}



function f1(e){
     let value = e.value;
   textarea.style.color = value;
 }

// function execCmdWithArt(command, ) {
//     document.execCommand(command, false, arg);
// }
