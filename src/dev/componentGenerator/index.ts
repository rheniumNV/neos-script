import _ from "lodash";
import { createFile } from "../util";
import { generateComponent } from "./Generator";
const Components = require("./Components.json");

const targetComponents = _(Components);
// .filter(
//   ({ name, pathName }) =>
//     _.includes(
//       [
//         "BoxCollider",
//         "Grabbable",
//         "ObjectRoot",
//         "UI_UnlitMaterial",
//         "SpriteProvider",
//         "StaticTexture2D",
//         "ValueCopy<T>",
//         "BoxMesh",
//         "MeshRenderer",
//         "PBS_Metallic",
//       ],
//       name
//     ) ||
//     _.includes(pathName, "/Assets/") ||
//     _.includes(pathName, "/Data") ||
//     _.includes(pathName, "/UIX/") ||
//     _.includes(pathName, "/Common UI/") ||
//     _.includes(pathName, "/Utility/") ||
//     _.includes(pathName, "/Cloud") ||
//     _.includes(pathName, "/Transform/Drivers/")
// );

targetComponents.forEach(
  ({
    name,
    fullName,
    pathName,
    syncmembers,
    typeVersion,
  }: {
    name: string;
    fullName: string;
    pathName: string;
    syncmembers: { name: string }[];
    typeVersion: number;
  }) => {
    const members = _(syncmembers)
      .reject(({ name }) => name === "persistent" || name === "UpdateOrder")
      .value() as {
      name: string;
      type: string;
      default: any;
      readonly: boolean;
    }[];

    const types = _.filter(
      _.split(
        //@ts-ignore
        _.map(_.get(_.split(name, "<"), 1, ""), (str) =>
          _.replace(str, ">", "")
        ),
        ","
      ),
      (str) => str
    ) as string[];

    const fixedName = _.replace(
      _.replace(_.replace(name, "<", "_"), ">", ""),
      ",",
      "_"
    );
    console.log(types);

    const depth = _.split(pathName, "/").length - 1;

    const componentString = generateComponent({
      fixedName,
      fullName,
      members,
      types,
      depth,
      typeVersion,
    });

    console.log(fixedName);
    const outPath =
      "src/neos/components" +
      _(_.split(pathName, "/")).slice(0, -1).join("/") +
      "/";
    createFile(outPath, fixedName + ".tsx", componentString, () => {
      console.log("create", pathName);
    });
  }
);
