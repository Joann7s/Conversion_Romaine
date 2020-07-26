//script de conversion en chiffres Romains depuis une saisie.
//Exercice réalisé dans le cadre de ma formation de développeur web.
//joannesperret@hotmail.fr
//
//déclaration des variables
let saisieArray;
let unitRom;
let tenRom;
let centRom;
let koRom;
let unit;
let ten;
let cent;
let mille;
//intégration d'une invite de saisie
let readline = require("readline-sync");
let numberToRom = readline.question("Saisissez un nombre entre 1 et 9 999: ");
let donneeSaisie;
//mise en mémoire de la donnée saisie
donneeSaisie=numberToRom;
//conversion en chiffres
donneeSaisie=parseInt(donneeSaisie);
//mise en place des contrôles
if(donneeSaisie>9999){
     console.log("Le nombre saisi est supérieur à 9 999!");
}else if(donneeSaisie<0){console.log("Le nombre saisi est négatif!")}
else if(donneeSaisie===0){console.log("Vous avez saisi 0!")}
else{
//conversion de la saisie en string
numberToRom=numberToRom.toString();
//conversion de la string en array
saisieArray=numberToRom.split('');
//inversion des chiffres afin de traiter unités, centaines...
saisieArray=saisieArray.reverse();
//association des variables au tableau
unit= saisieArray[0];
ten= saisieArray[1];
cent= saisieArray[2];
mille = saisieArray[3];
//transription de l'unité en chiffre Romain
        switch(unit){case '1': unitRom= "I";
            break;
        case '2':unitRom="II";
            break;
        case '3':unitRom="III";
            break;
        case '4':unitRom="IV";
            break;
        case '5':unitRom="V";
            break;
        case '6':unitRom="VI";
            break;
        case '7':unitRom="VII";
            break;
        case '8':unitRom="VIII";
            break;
        case '9':unitRom="IX";
            break;
        };
//transription de la dizaine en chiffre Romain
switch(ten){case '1': tenRom= "X";
break;
case '2':tenRom="XX";
break;
case '3':tenRom="XXX";
break;
case '4':tenRom="XL";
break;
case '5':tenRom="L";
break;
case '6':tenRom="LX";
break;
case '7':tenRom="LXX";
break;
case '8':tenRom="LXXX";
break;
case '9':tenRom="XC";
break;
};
//transription de la centaine en chiffre Romain
switch(cent){case '1': centRom= "C";
break;
case '2':centRom="CC";
break;
case '3':centRom="CCC";
break;
case '4':centRom="CD";
break;
case '5':centRom="D";
break;
case '6':centRom="DC";
break;
case '7':centRom="DCC";
break;
case '8':centRom="DCCC";
break;
case '9':centRom="CM";
break;
};
//transription du millier en chiffre Romain
switch(mille){case '1': koRom= "M";
break;
case '2':koRom="II.M";
break;
case '3':koRom="III.M";
break;
case '4':koRom="IV.M";
break;
case '5':koRom="V.M";
break;
case '6':koRom="VI.M";
break;
case '7':koRom="VII.M";
break;
case '8':koRom="VIII.M";
break;
case '9':koRom="IX.M";
break;
};
// Contrôle des conditions pour affichage des résultats:
if(unitRom===undefined&&tenRom===undefined&&centRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+koRom+" en chiffres Romains");}             
        else if(unitRom===undefined&&centRom===undefined&&koRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+tenRom+" en chiffres Romains");}  
        else if(tenRom===undefined&&centRom===undefined&&koRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+unitRom+" en chiffres Romains");} 
        else if(unitRom===undefined&&tenRom===undefined&&koRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+centRom+" en chiffres Romains");}  
        else if(tenRom===undefined&&koRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+centRom+unitRom+" en chiffres Romains");}    
        else if(centRom===undefined&&tenRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+koRom+unitRom+" en chiffres Romains");}      
        else if(koRom===undefined&&unitRom===undefined){
               console.log(donneeSaisie+" s'écrit: "+centRom+tenRom+" en chiffres Romains");}  
        else if(centRom===undefined&&unitRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+tenRom+unitRom+" en chiffres Romains");} 
        else if(unitRom===undefined&&tenRom===undefined&&koRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+centRom+" en chiffres Romains");}
        else if(centRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+koRom+tenRom+unitRom+" en chiffres Romains");}
        else if(koRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+centRom+tenRom+unitRom+" en chiffres Romains");}
        else if(unitRom===undefined){
             console.log(donneeSaisie+" s'écrit: "+tenRom+" en chiffres Romains");}
        else{
            console.log(donneeSaisie+" s'écrit: "+koRom+centRom+tenRom+unitRom+" en chiffres Romains");
       }};

    