export class Functions {
  public static arrayToMap(ar) {
    const map = new Map();
    ar.forEach((ar) => {
      map.set(ar.id, ar);
    });
    return map;
  }
}
