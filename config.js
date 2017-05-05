module.exports = {
  env : 'development',
  url: process.env.VIRTUAL_HOST || "http://localhost:3000", //enter flux auth callback url here.
  port: 3000,
  flux: {
    url: 'https://flux.io',
    id: 'dcee8345-9fe3-407e-82fb-18017e743743',
    secret: 'ebe18fa0-9da2-4de2-b951-c4210364260a',
  },
  session: {
    secret: 'topSecret'
  },
  NBS_clientId: "c7c6dbf5-4df9-4a13-ab89-3b1970af7a2c",
  NBS_clientSecret: "e54ed1d1-fdbe-488a-9ae5-fc95a2027a68"
}
