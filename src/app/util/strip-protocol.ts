export default function stripProtocol(value: string): string {
  const withoutProtocol = value.replace(/^https?:\/\//i, '');
  return withoutProtocol.replace(/\/+$/, '');
}
