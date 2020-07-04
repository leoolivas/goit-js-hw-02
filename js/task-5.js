const checkForSpam = function (message) {
  let normalizedMessage = message.toLowerCase();

  return (
    normalizedMessage.includes("spam") || normalizedMessage.includes("sale")
  );
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
