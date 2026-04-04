export async function sum(a: number, b: number): Promise<number> {
  await doAsyncWork();
  return a + b;
}

async function doAsyncWork() {
  return await new Promise((resolve) => setTimeout(resolve, 100));
}
