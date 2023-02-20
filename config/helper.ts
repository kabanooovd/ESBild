import path from "path";

export class Utils {
  static resolveRoot(...segments: string[]) {
    return path.resolve(__dirname, "..", ...segments)
  }
  static preparePaths(outPuts: string[]): (string[])[] {
    return outPuts.reduce<(string[])[]>((acc: (string[])[], path: string) => {
      const [js, css] = acc;
      const splittedFileName = path.split("/").pop();
      if (splittedFileName?.endsWith(".js")) {
        js.push(splittedFileName)
      } 
      if(splittedFileName?.endsWith(".css")) {
        css.push(splittedFileName)
      }
      return acc;
    }, [[], []])
  }
  static renderHTML(options: IHTMLPluginOptions): string {
    return options.template || `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${options.title}</title>
        ${options?.cssPath?.map((path: string) => `<link rek="stylesheet" href=${path}>`).join(" ")}
      </head>
      <body>
        <div id="root"></div>
        ${options?.jsPath?.map((path: string) => `<script src=${path}></script>`).join(" ")}
      </body>
    </html>
    `
  }
}

export interface IHTMLPluginOptions {
  template?: string;
  title?: string;
  jsPath?: string[];
  cssPath?: string[];
}