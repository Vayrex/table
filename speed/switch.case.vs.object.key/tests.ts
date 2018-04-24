export function run(name: string, func: Function, args: any[] = [], iterations = 10000000) {
  let start = new Date();

  for (let i = 0; i < iterations; i++) {
    func.apply(null, args);
  }
  console.log("done in:", (new Date().getTime() - start.getTime()) / 1000);
}
