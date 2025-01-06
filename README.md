# certificate-generator

### Front-end

- cert-generator: vite + (vue + element ui) -> (vue3 + element plus)

### Back-end

- service: node + express + (mogoose) -> (lowdb)

### DB

- [Express数据库集成](https://nodejs.cn/express/guide/database-integration/#sqlite)

- 1. mongodb
  ```
  docker run -itd --name mongodb -p 27017:27017 -v /mnt/dtt/data/mongodb:/data/db mongo:4.4
  ```
- 2. sqlite3
  - [在 Express.js 中使用 SQLite：一份完整的教程](https://www.javascriptcn.com/post/65c8b71badd4f0e0ff27b708)

- 3. lowdb
  - [学习Lowdb小型本地JSON数据库](https://www.cnblogs.com/tugenhua0707/p/11403202.html)
  - [探索轻量级JSON数据库：LowDB详解与实战](https://www.showapi.com/news/article/66ec3f9e4ddd79f11a0fe243)

### nodejs

- 1. node-forge
  - [给localhost颁发一份证书](https://blog.sww.moe/post/certificate/)
  - [笔记记录：NodeJS生成本地证书](https://juejin.cn/post/7212940154381484087)

- 2. element plus
  - [element组件](https://element.eleme.cn/#/zh-CN/component/installation)
  - [element plus组件](https://element-plus.org/zh-CN/component/overview.html)

### 证书签发

- [国密证书实验室](https://www.gmcrt.cn/gmcrt/index.jsp)

- 证书签发(仅供测试)
  - 证书类型：SM2/RSA/ECC
  - 签发方式： 直接生成PFX/提交P10文件(文本)
  - 证书类型： 服务器/个人/代码签名/时间戳
  - 有效期：   12月
  - 国家： 中国           (代号: C    -- 国家)
  - 省市： XX             (代号: ST   -- 省份)
  - 地址： XX             (代号: L    -- 城市)
  - 单位： XX             (代号: O    -- 公司)
  - 部门： XX             (代号: OU   -- 部门)
  - 名字： 必填项目       (代号: CN   -- 使用者)
  - 邮箱： XX
  - 注释： XX

- 注意：
  - PFX口令为字符串12345678
  - 提示：ECC使用的是RSA的根。

- 证书属性示例
```json
{
  { name: "commonName", value: "localhost" },
  { name: "countryName", value: "CN" },
  { shortName: "ST", value: "Zhejiang" },
  { name: "localityName", value: "Shaoxing" },
  { name: "organizationName", value: "Myself" },
  { shortName: "OU", value: "https://blog.swwind.me" }
}
```

### 证书链下载

=====SM2证书链=====
RCA[根]	下载
OCA[中间]	下载
PEM[根+中间]	下载
PKCS#7[根+中间]	下载
=====RSA证书链=====
RCA[根]	下载
OCA[中间]	下载
PEM[根+中间]	下载
PKCS#7[根+中间]	下载
=====ECC证书链=====
RCA[根]	下载
OCA[中间]	下载
PEM[根+中间]	下载
PKCS#7[根+中间]	下载
