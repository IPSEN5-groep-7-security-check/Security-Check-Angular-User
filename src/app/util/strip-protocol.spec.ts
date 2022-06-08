import stripProtocol from './strip-protocol';
describe('stripProtocol', () => {
  it('should remove https:// from string', () => {
    const text = 'https://google.com';
    expect(stripProtocol(text)).toEqual('google.com');
  });
  it('should remove http:// from string', () => {
    const text = 'http://google.com';
    expect(stripProtocol(text)).toEqual('google.com');
  });
  it('a string with only https:// should return empty string', () => {
    const text = 'https://';
    expect(stripProtocol(text)).toEqual('');
  });
  it('a string with only http:// should return empty string', () => {
    const text = 'http://';
    expect(stripProtocol(text)).toEqual('');
  });
  it('should not affect valid domain names', () => {
    const text = 'google.com';
    expect(stripProtocol(text)).toEqual(text);
  });
  it('should remove trailing slash', () => {
    const text = 'google.com/';
    expect(stripProtocol(text)).toEqual('google.com');
  });
  it('should remove trailing slashes', () => {
    const text = 'google.com///////';
    expect(stripProtocol(text)).toEqual('google.com');
  });
});
