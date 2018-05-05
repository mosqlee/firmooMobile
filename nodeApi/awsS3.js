const crypto = require('crypto');

const secret = 'i1kTH2JZ63dAzhxxwcBppyRAodkzBOqFSCf3NOml';

let POLICY_JSON = {
  "expiration": "2022-12-01T12:00:00.000Z",
  "conditions": [
    { "bucket": "moztest" },
    ["starts-with", "$key"],
    { "acl": "public-read" },
    ["starts-with", "$Content-Type", ""],
    ["content-length-range", 0, 524288000]
  ]
};
function getSign(policy, secret) {
  const policyBase64 = Buffer.from(JSON.stringify(policy)).toString('base64');
  const signature = crypto.createHmac('sha1', secret).update(policyBase64).digest().toString('base64');
  return { signature, policyBase64 };
}
export default function apiToken(req, res) {
  let { folder, filer, contentType } = req.data;
  const key = folder + filer;
  POLICY_JSON["conditions"][1].push(key);
  POLICY_JSON["conditions"][3].push(contentType);
  return res.json('200', getSign(POLICY_JSON, secret));
}