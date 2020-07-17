const parser = new UAParser();
const USER_AGENT = parser.getResult();

console.log(USER_AGENT);

const client = {
  browser: `${USER_AGENT.browser.name} ${USER_AGENT.browser.major}`,
  os: `${USER_AGENT.os.name} ${USER_AGENT.os.version}`,
};

// FICTITIOUS CLIENT IDENTIFIER AND LOGGER
async function convolutedBrowserIdentifier() {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });
  return response.json();
}

// DISPLAY CURRENT WEB BROWSER DETAILS
let infoWrapper = document.getElementById("info");
let clientInfo = `<h2>${client.browser}<br/><small>on ${client.os}</small></h2>`;

infoWrapper.innerHTML = clientInfo;

// The main package here is UAParser
// Found here: https://www.npmjs.com/package/ua-parser-js
