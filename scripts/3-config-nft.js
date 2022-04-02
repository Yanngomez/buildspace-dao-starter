import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x38095169d33FceF48121b88fb48b767f04E8e97d");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Nayn2",
        description: "This NFT will give you access to Nay'nDAO!",
        image: readFileSync("scripts/assets/Nayn2.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();