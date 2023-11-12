<img src="https://public-link.oss-cn-shenzhen.aliyuncs.com/mcsm_picture/logo.png" alt="MCSManager icon.png" width="500px" />

<br />

[![Status](https://img.shields.io/badge/npm-v6.14.15-blue.svg)](https://www.npmjs.com/)
[![Status](https://img.shields.io/badge/node-v14.19.1-blue.svg)](https://nodejs.org/en/download/)
[![Status](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://github.com/MCSManager)

Original Code Locations:
[Official Website](http://mcsmanager.com/) | [Team Homepage](https://github.com/MCSManager) | [Panel Project](https://github.com/MCSManager/MCSManager) | [UI Project](https://github.com/MCSManager/UI) | [Daemon project](https://github.com/MCSManager/Daemon)


Custom Modifications for Quantumly Confused Gaming: [https://github.com/padraignix/MCSManager-UI](https://github.com/padraignix/MCSManager-UI)

<br />

## Build the development environment

```bash
git clone https://github.com/padraignix/MCSManager-UI.git
cd UI
npm install
npm run serve
# Visit http://localhost:8080/
````

For previously existing installation where original installer was used:

```bash
git clone https://github.com/padraignix/MCSManager-UI.git
cd UI
/opt/node-v14.19.1-linux-x64/bin/node /opt/node-v14.19.1-linux-x64/bin/npm install
/opt/node-v14.19.1-linux-x64/bin/node /opt/node-v14.19.1-linux-x64/bin/npm run serve
# Visit http://localhost:8080/
````

> The panel-side projects need to run at the same time to provide back-end interface capabilities. By default, all requests are forwarded to port 23333.

<br />

## Bug Report

Feedback on any problems found is welcome and must be fixed in time.

If you find a serious security vulnerability and it is inconvenient to publish it publicly, please send an email to: padraignix [at] gmail [dot] com. After the security issue is fixed, the name of the vulnerability discoverer will be added to the code.

<br />


## License

Original Code:
Copyright 2022 [MCSManager Dev](https://github.com/mcsmanager), Apache-2.0 license.

Modified/New Code:
Copyright 2023 [padraignix](https://github.com/padraignix), Apache-2.0 license.
