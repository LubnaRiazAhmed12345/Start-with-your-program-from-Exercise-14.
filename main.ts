 
    //Changing Guest List: You just heard that one of your guests can’t make the dinner, 
    //so you need to send out a new set of invitations. 
    //You’ll have to think of someone else to invite.

    let Guest_List : string[] = ["Lubna","Fatima","Shahina","aqsa"];
    for (let i=0;i< Guest_List.length;i++){
    console.log(`dear ${Guest_List[i]} : \n you are invited to dinner! \n`);
    }

console.log(`"Unfortunately ${Guest_List[1]}, can't come to dinner."`);

Guest_List[1] = "Fatima";

console.log("\nNew List Of INVITATION :\n");

for (let m=0 ;m < Guest_List.length; m++){
    console.log(`Dear ${Guest_List[m]} : \n you are invited to dinner! \n`);
}