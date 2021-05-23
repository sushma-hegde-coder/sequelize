// no validation required
// register,login
const skipUrls = [
  { method: ["post"], url: "/listener/add" },
  { method: ["post"], url: "/listener/login" },
  { method: ["post"], url: "/sushma/addmyrecordings" },
];

const checkIfToBeSkipped = (request) => {
  //check if url is listed
  const filtered = skipUrls.find((s) => request.url.includes(s.url)); //whether request.url has any urls of url in skipUrls
  // filtered = null, undefined or whole one array element { method: [ 'post' ], url: '/listener/login' }
  console.log("filtered var", filtered);
  if (filtered) {
    //check if method is listed
    console.log("return true");
    return true;
  }
  return false; //not public go through authentication
};

module.exports = checkIfToBeSkipped;
