export const generatePassword =()=> {
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specials = "!,*";

  function makeIt(length, characters) {
    var result = "";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    makeIt(2, capitals) +
    makeIt(2, lowers) +
    makeIt(2, numbers) +
    makeIt(1, specials)
  );
}