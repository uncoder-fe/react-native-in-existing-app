# 仓库地址

```
it
```

## 准备工作

安装依赖库

```bash
yarn install
// ios第三方包引入工具
brew install cocoapods
```

## android

版本：  
0. android studio ide: 3.0.0
1. gradle version: 4.1  
2. android plugin version: 3.0.0
3. android sdk version: 26

备注：若提示import的问题，可尝试gradle重新刷新

### 运行

1. npm start
2. android studio 运行 模拟器

## ios

版本：  
1. xcode: Version 9.1 (9B55)
2. simulator: iphone X
3. sdk version: 11.1

```bash
cd /ios
pod install
```

### 运行

1. npm start
2. xcode 运行 模拟器

备注：
1. 运行时报错 'fishhook/fishhook.h' file not found  
`#import <fishhook/fishhook.h>`修改为`#import "fishhook.h"`
2. 提示 no such module react

```bash
Build Settings 搜索 User Header Search Paths
在Paths目录添加一条前边写${SRCROOT},后边选择recursive
```
