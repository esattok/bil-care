import * as bcrypt from 'bcrypt';

export async function getHashed(input: string): Promise<string> {
  return await bcrypt.hash(input, 10);
}

export async function isEqualToHashed(
  input: string,
  hash: string,
): Promise<boolean> {
  return await bcrypt.compare(input, hash);
}
