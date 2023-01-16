import fs from "fs";

export function createFile(
  outPath: string,
  filename: string,
  data: string,
  callback: () => any
) {
  const filePath = outPath + filename;
  console.log(filename);

  fs.writeFile(filePath, data, (err) => {
    if (err && err.code === "ENOENT") {
      const dir = filePath.substring(0, filePath.lastIndexOf("/"));

      fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) throw err;
        createFile(outPath, filename, data, callback);
      });
      return;
    }
    callback();
  });
}
