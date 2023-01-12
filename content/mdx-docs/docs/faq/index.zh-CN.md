---
title: 'Frequently Asked Questions'
authors: zdtsw, gdams, tellison
---

在该文件中我们收集了一些常见问题。如果您想与我们讨论这些话题或有其他问题，最好的途径是通过以下链接
[Slack](/slack) 或者在
[渠道支持](https://github.com/adoptium/adoptium-support) 中创建一个新议题

## 如何找到最新发布的 Adoptium&reg; JDK？

Adoptium 的 JDK 称为 Eclipse Temurin，推荐您使用我们的 [最新版本](/temurin/releases/)。

我们还为各大Java 安装管理器提供功能，例如：
[Homebrew](https://formulae.brew.sh/cask/temurin), 
[SDKMAN](https://sdkman.io/),
[winget](https://github.com/microsoft/winget-cli)， 
[Chocolatey](https://chocolatey.org/)，
[official Docker images](https://hub.docker.com/_/eclipse-temurin),
您还可以通过 Github 使用 Temurin ["setup-java"](https://github.com/marketplace/actions/setup-java-jdk#basic) action，
另外它也是云提供商 Java 支持的一部分。

Linux 安装程序包RPM/DEB可在 packages.adoptium.net 中获得。 更多信息见 [指南](/installation/linux)。

## Eclipse Temurin 可以免费使用吗？

是的！ 根据“GNU General Public License, version 2 with the Classpath Exception“，Adoptium 永远免费提供 Eclipse Temurin 二进制文件供您使用。
您可以按照描述自由使用、修改和共享代码。这些都包含在下载的许可证中。

## Eclipse Temurin支持生命周期

[在此](/support) 阅读我们的发布和支持周期声明

## Eclipse Temurin 是否通过 JCK 验证？

当然！ 每个 Temurin 版本都通过了相关的 Oracle Java Compatibility Kit (JCK) 以证明它是与 Java 规范兼容实现的。
此外，Temurin 版本必须通过 [AQAvit 质量验证套件](/aqavit)以确保它们可在生产中使用。

## 是否支持使用容器映像来交付 Temurin？

我们提供一组Temurin官方 [Docker 镜像](https://hub.docker.com/_/eclipse-temurin)

对于那些想要使用但我们不直接提供镜像的用户，请参考 [文档](/blog/2021/08/using-jlink-in-dockerfiles/)

## 自动下载Temurin预编译

Adoptium 提供 [下载 API](https://api.adoptium.net/q/swagger-ui/) 可以自动下载 Eclipse Temurin 预编译
使用API可以获得有关 Temurin 最新版本的信息，并将它们加载到您的应用程序中。

## 为何命名为"Eclipse Temurin"?
Eclipse Temurin 是 Eclipse Foundation 生成的二进制文件的项目和品牌名称

将名称拆分为 Adoptium/Temurin 比 Adoptium 更令人困惑，但其他供应商也使用类似方式。例如，Amazon 有 Corretto，Azul 有 Zulu 等等。
Adoptium 项目和工作组将处理的不仅仅是 Temurin，这就是为什么决定保持不同命名

## AdoptOpenJDK 的去向

原 AdoptOpenJDK 已改名为 “Adoptium 旗下的 Eclipse Temurin” "[博客文章](/blog/2021/08/adoptium-celebrates-first-release/)"
尽管品牌名发生了变化，但它仍然是开放式流程、包含 AQAvit 测试套件，并且由同一个团队进行构建。此外，[更多大公司](/members) 参与到了工作组。

由于用户仍处于过渡阶段，我们保留了旧站点 AdoptOpenJDK 的原样，但是您不应该依赖它，而更新使用 Adoptium API 和网站
部分仅仅在 AdoptOpenJDK 提供下载， 例如 [Upstream builds](https://adoptopenjdk.net/upstream.html) 和 [IcedTea-WEB](https://adoptopenjdk.net/icedtea-web.html)

## 如何找到 Eclipse OpenJ9 构建?

不幸的是，我们无法继续分发 Eclipse OpenJ9 的构建。 
IBM 现在已经接管了 OpenJ9，并且命名为 "[IBM Semeru](https://developer.ibm.com/languages/java/semeru-runtimes/)"。
用户无需担心此项变动 - 它仍然是免费的。

## 为何不发行含有IcedTea-Web的构建?

当迁移到 Eclipse 基金会后，我们的协议是将不再在我们的安装程序中包含 IcedTea-Web
如若您仍然需要IcedTea-Web，可按照 [指南](https://blog.adoptopenjdk.net/2018/10/using-icedtea-web-browser-plug-in-with-adoptopenjdk/)添加其功能。