import path from "path";

class Utils {
  static resolveRoot(...segments: string[]) {
    return path.resolve(__dirname, "..", ...segments)
  }
}


export default Utils