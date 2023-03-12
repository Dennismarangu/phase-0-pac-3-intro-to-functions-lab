function shout(string) {
    return string.toUpperCase('Hello!');
  }
  "Hello!".toUpperCase(); // 'HELLO!'

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else {
      return `Hi ${string}!`;
    }
  }

  function sayHiToHeadphonedRoommate(string) {
    if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else {
      return `Hi ${HELLO}`;
    } 
  }
  

  function sayHiToHeadphonedRoommate(string) {
    if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }else {
      return `Hi ${string}!`;
    }
  }
