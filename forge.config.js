/*
Copyright 2023 Firmin B.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

module.exports = {
  packagerConfig: {
    icon: "./src/assets/imgs/icon.ico",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin", "linux"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          name: "bdsm-client",
          productName: "BDSM Client",
          genericName: "Basic Data Server Monitor Client",
          description: "Basic server monitoring system",
          maintainer: "Firmin_",
          categories: ["Utility"],
          icon: "./src/assets/imgs/icon.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        setupIcon: "./src/assets/imgs/icon.ico",
        loadingGif: "./src/assets/imgs/install.gif",
        iconUrl:
          "https://raw.githubusercontent.com/firminsurgithub/bdsm-client/master/src/assets/icon.ico",
      },
    },
  ],
};
