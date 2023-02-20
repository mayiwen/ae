



# ABOUT

mayiwen for windows. 

version: 0.0.14



## how to start
npm run start

## how to build
npm run b

## base on 
https://github.com/maximegris/angular-electron.git

## update version number
  1, this page top；2，./package.json； 3，./app/package.json


## base
### alibaba node mirror
npm config set registry=https://registry.npmmirror.com
npm config set disturl=https://registry.npmmirror.com/-/binary/node
 
### alibaba electron mirror
npm config set electron_mirror=https://registry.npmmirror.com/-/binary/electron/




## build error

* 1. 打包时下载electron-v.xxxx.zip文件失败

* 解决办法：直接在淘宝的文件库下载对应版本和打包平台的文件，下载完成后放在 C:\Users\Administrator\AppData\Local\electron\Cache这个目录下

* 2. 打包时下载winCodeSign-v.xxx.7z文件失败

* 下载地址：https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.5.0/winCodeSign-2.5.0.7z

* 下载完解压放到C:\Users\Administrator\AppData\Local\electron-builder\Cache\winCodeSign目录下

* 3. 打包时下载nsis-v.xxx.7z文件失败

* 下载地址：https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.3.2/nsis-3.0.3.2.7z

* 下载完解压放到C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis

* 4. 打包时下载nsis-resources-v.xxx.7z文件失败

* 下载地址：https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z

* 下载完解压放到C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-resources-3.4.1
————————————————
版权声明：本文为CSDN博主「寒墨茗殇」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_40591925/article/details/125619330


