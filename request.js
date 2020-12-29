const preview = require("./.next/serverless/pages/api/preview");
const Stream = require("stream");

// Create mock request object
const request = new Stream.Readable();
request.headers = {};
request.url = "/";
request.push(null);

// Create mock response object
const response = {
  end: (string) => console.log(string),
  getHeader: () => {},
  setHeader: () => {},
};

// Run the default() function for the API route
// If successful, will log the JSON response ({"success":true}) to the console
preview.default(request, response);
