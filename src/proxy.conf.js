const PROXY_HOST = 'http://localhost:5083';
const PROXY_CONFIG =[{
    context:['/api/Pump/slim'],
    target: PROXY_HOST,
    secure: false,
},];
module.exports = PROXY_CONFIG;
