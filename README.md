使用gulp打包文件
本配置文件基于gulp v4
开发环境, npm run dev
线上环境, npm run build
打包压缩部署: npm run release (需要先执行npm run build, release只是将dist文件夹生成压缩包,不做任何打包操作)
发布时增加md5
提供功能:
dev: source map, serve(开发服务器), watch(自动监听文件改变,执行新的打包),es6(babel转码), 支持less
build: md5
release: 发布文件压缩包