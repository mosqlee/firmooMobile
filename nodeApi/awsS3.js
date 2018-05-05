const crypto = require('crypto');

const secret = 'i1kTH2JZ63dAzhxxwcBppyRAodkzBOqFSCf3NOml';

const POLICY_JSON = {
  "expiration": "2020-12-01T12:00:00.000Z",
  "conditions": [
    { "bucket": this.get('bucket') },
    ["starts-with", "$key", ""],
    { "acl": this.get('acl') },
    ["starts-with", "$Content-Type", ""],
    ["content-length-range", 0, 524288000]
  ]
};