export default function stripProtocol(value: string): string {
  return value.replace(/^https?:\/\//i, '');
}
