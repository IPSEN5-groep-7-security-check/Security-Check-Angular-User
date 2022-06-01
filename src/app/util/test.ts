// https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md#tests

export interface Test {
  'content-security-policy': ContentSecurityPolicy;
  contribute: Contribute;
  cookies: Cookies;
  'cross-origin-resource-sharing': CrossOriginResourceSharing;
  'public-key-pinning': PublicKeyPinning;
  redirection: Redirection;
  'strict-transport-security': PublicKeyPinning;
  'subresource-integrity': SubresourceIntegrity;
  'x-content-type-options': XContentTypeOptions;
  'x-frame-options': XContentTypeOptions;
  'x-xss-protection': XContentTypeOptions;
}

export interface ContentSecurityPolicy {
  expectation: string;
  name: string;
  output: ContentSecurityPolicyOutput;
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
}

export interface ContentSecurityPolicyOutput {
  data: { [key: string]: string[] };
}

export interface Contribute {
  expectation: string;
  name: string;
  output: ContributeOutput;
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
}

export interface ContributeOutput {
  data: PurpleData;
}

export interface PurpleData {
  bugs: Bugs;
  description: string;
  name: string;
  participate: Participate;
  urls: Urls;
}

export interface Bugs {
  list: string;
  report: string;
}

export interface Participate {
  docs: string;
  home: string;
  irc: string;
  'irc-contacts': string[];
}

export interface Urls {
  dev: string;
  prod: string;
  stage: string;
}

export interface Cookies {
  expectation: string;
  name: string;
  output: CookiesOutput;
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
}

export interface CookiesOutput {
  data: FluffyData;
}

export interface FluffyData {
  sessionid: Sessionid;
}

export interface Sessionid {
  domain: string;
  expires: null;
  httponly: boolean;
  'max-age': null;
  path: string;
  port: null;
  secure: boolean;
}

export interface CrossOriginResourceSharing {
  expectation: string;
  name: string;
  output: CrossOriginResourceSharingOutput;
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
}

export interface CrossOriginResourceSharingOutput {
  data: TentacledData;
}

export interface TentacledData {
  acao: null;
  clientaccesspolicy: null;
  crossdomain: null;
}

export interface PublicKeyPinning {
  expectation: string;
  name: string;
  output: PublicKeyPinningOutput;
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
}

export interface PublicKeyPinningOutput {
  data: null | string;
  includeSubDomains: boolean;
  'max-age': number | null;
  numPins?: null;
  preloaded: boolean;
  preload?: boolean;
}

export interface Redirection {
  expectation: string;
  name: string;
  output: RedirectionOutput;
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
}

export interface RedirectionOutput {
  destination: string;
  redirects: boolean;
  route: string[];
  status_code: number;
}

export interface SubresourceIntegrity {
  expectation: string;
  name: string;
  output: SubresourceIntegrityOutput;
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
}

export interface SubresourceIntegrityOutput {
  data: { [key: string]: Datum };
}

export interface Datum {
  crossorigin: null;
  integrity: null;
}

export interface XContentTypeOptions {
  expectation: string;
  name: string;
  output: XContentTypeOptionsOutput;
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
}

export interface XContentTypeOptionsOutput {
  data: string;
}
