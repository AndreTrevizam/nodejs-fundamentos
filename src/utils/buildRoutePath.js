export function buildRoutepath(path) {
  const routeParamsRegex = /:([a-zA-Z]+)/g;

  console.log(Array.from(path.matchAll(routeParamsRegex)));
  // return new RegExp()
}
