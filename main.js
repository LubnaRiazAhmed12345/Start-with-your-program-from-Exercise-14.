//let Guest_List : string[] = ["Lubna","Fatima","Shahina","aqsa"];
//for (let i=0;i< Guest_List.length;i++){
//console.log(`dear ${Guest_List[i]} : \n you are invited to dinner! \n`);
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
var Guest_List = ["Lubna", "Fatima", "Shahina", "aqsa"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("dear ".concat(Guest_List[i], " : \n you are invited to dinner! \n"));
}
console.log("\"Unfortunately ".concat(Guest_List[1], ", can't come to dinner.\""));
Guest_List[1] = "Fatima";
console.log("\nNew List Of INVITATION :\n");
for (var m = 0; m < Guest_List.length; m++) {
    console.log("Dear ".concat(Guest_List[m], " : \n you are invited to dinner! \n"));
}
