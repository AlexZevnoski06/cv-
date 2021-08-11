// Can, Chi calculation

let Can = {0: 'Canh', 1: 'Tan', 2: 'Nham', 3: 'Quy', 4: 'Giap', 5: 'At', 6:'Binh', 7: 'Dinh', 8: 'Mau', 9: 'Ky'};
let Chi = {0: 'Than', 1: 'Dau', 2: 'Tuat', 3: 'Hoi', 4: 'Ty', 5: 'Suu', 6: 'Dan', 7: 'Mao', 8: 'Thin', 9: 'Ty', 10: 'Ngo', 11: 'Mui'};

console.log("Enter your birthday year: ");
var age0 = window.prompt();
var CAN_number = age0 % 10;
var CHI_number = age0 % 12;

if (CAN_number in Can) {
  console.log("Your CAN is: " + Can[CAN_number] + "\n");
} 

if (CHI_number in Chi) {
  console.log("Your CHI is: " + Chi[CHI_number]);
}
