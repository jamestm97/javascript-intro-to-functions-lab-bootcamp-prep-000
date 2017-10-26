function shout(string) {
   return string.toUpperCase();
 }

 function whisper(string) {
   return string.toLowerCase();
 }

 function logShout(string) {
   console.log(string.toUpperCase());
 }

 function logWhisper(string) {
   console.log(string.toLowerCase());
 }

 function sayHiToGrandma(string) {

   if (string === string.toLowerCase()) {
     return("I can't hear you!");
   }
<<<<<<< HEAD

   else if (string === string.toUpperCase()) {
     return("YES INDEED!");
   }

=======
  
   else if (string === string.toUpperCase()) {
     return("YES INDEED!");
   }
  
>>>>>>> a787a279129e3548e7c5517d9730155adc08f9ba
   else if (string === string) {
     return("I love you, too.");
   }
 }
