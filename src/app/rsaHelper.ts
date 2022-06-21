import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';

@Injectable({
  providedIn: 'root',
})
export class RSAHelper {
  publicKey: string = `-----BEGIN PUBLIC KEY----- 
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAg3z2iE4IKHXxCfD+L9jM 
c2AHdutmSItT3DS/2mNUMXwBMYQXKWmv+pNnDv5/h3WdExAi/43hVHKd+JnIe6AX 
N3Dg3N/9m2PRt0niXclLoQoll5ZABt3S6NpYNSvppP9fn3KXPvcoDLTeOURAzXN/ 
oqhbGRXOXVAu/KsJT5tKVFabKZAIaC0e62/TZw5KGVE257ApHpQP1+fCRsrNnaqg 
/2yyGY+i0sLulLQt14fMPu4G+Ml/A/Wzb3TazMkGi7S5kApJiQ0GSHGApizL9O94 
cMsr6Nl+m+wmZlvT1Ds8zKt3YFa8jzDBnph13M6YZQ5KjK1HZPFd2tfMM5vzLiH1 
pSrm68wgXtLKUZLlmsoIhIHGugHLWvhyDlq9sgduVnL8vgba+VgV4i1DXjDQ1dYb 
F3vBNoJaXeHBJE/76mdWEgJnPBZnf//m5IzR+aKpnHWhWK9AqX7T//jTxMTpf7/z 
APBLkea3iDgdEELuHpmxtlb4Jq4N40AJ8tXj65gMlAzPzTckXSp820Ylq7IaaLpn 
l+bzwaix5JI/YdgjVNLrygeZxmTZ/glCxox5fXjUkgdFPgrAtWx3keJkFU8ywWrV 
9pT/ZjL3Lyd2QNpnlGrufKBI5BTsrLg3fbv4HCLpQxT8k7o8kEdZbTOJXqML1eqp 
nONTSHJqdjUnj6gDYsQjX8MCAwEAAQ==
-----END PUBLIC KEY-----`;

  constructor() {}

  encryptWithPublicKey(valueToEncrypt: string): string {
    const rsa = Forge.pki.publicKeyFromPem(this.publicKey);
    return rsa.encrypt(valueToEncrypt.toString());
  }
}
