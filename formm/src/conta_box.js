

 function VerificaChecks() {  
        var box = document.getElementsByName("item"); 
        const redes_user = []
    
        for (var i=0;i<box.length;i++){ 
            if (box[i].checked === true){     
                // CheckBox Marcado... 
                redes_user.push(box[i].value) // vetor das redes 
                //alert(box[i].value + " marcado.");
            }
        }
        
        return redes_user;
    } 
    
export default VerificaChecks

    