// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function encoder(input, subObj) {
    
    let encodedMsg = "";
    // goes through input and encodes it
    for (let i = 0; i < input.length; i++) {
      //tests if character is a space if not encodes it
      if (input.charAt(i) === " ") {
        encodedMsg += " ";
      } else {
        encodedMsg += subObj[input.charAt(i)];
      }
    }
    return encodedMsg;
  }

  function decoder(input, subObj) {

    //object to use to decode message
    
    let decodedMsg = "";
    //goes through input and decodes it
    for (let i = 0; i < input.length; i++) {
      //tests if character is a space, if not decodes it
      if (input.charAt(i) === " ") {
        decodedMsg += " ";
      } else {
        decodedMsg += Object.keys(subObj).find(
          (key) => subObj[key] === input.charAt(i)
        );
      }
    }
    return decodedMsg;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (alphabet === undefined) {
      return false;
    }
    if (alphabet.length !== 26) {
      return false;
    }
    input.toLowerCase();
    alphabet.toLowerCase();
    //check that all alphabet characters are unique alphabet characters    
    for (let i = 0; i < 26; i++) {
      let max = 0;
      for (let j = 0; j < 26 ; j++) {
        if(alphabet[i] === alphabet[j]){
          max++;
        }        
      }
      if(max > 1){
        return false;
      }
    }

    let subObj = {
      a: alphabet.charAt(0),
      b: alphabet.charAt(1),
      c: alphabet.charAt(2),
      d: alphabet.charAt(3),
      e: alphabet.charAt(4),
      f: alphabet.charAt(5),
      g: alphabet.charAt(6),
      h: alphabet.charAt(7),
      i: alphabet.charAt(8),
      j: alphabet.charAt(9),
      k: alphabet.charAt(10),
      l: alphabet.charAt(11),
      m: alphabet.charAt(12),
      n: alphabet.charAt(13),
      o: alphabet.charAt(14),
      p: alphabet.charAt(15),
      q: alphabet.charAt(16),
      r: alphabet.charAt(17),
      s: alphabet.charAt(18),
      t: alphabet.charAt(19),
      u: alphabet.charAt(20),
      v: alphabet.charAt(21),
      w: alphabet.charAt(22),
      x: alphabet.charAt(23),
      y: alphabet.charAt(24),
      z: alphabet.charAt(25),
    };

    if (encode) {
      return encoder(input, subObj);
    } else if (!encode) {
      return decoder(input, subObj);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
