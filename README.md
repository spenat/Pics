# Pics

This is a vue frontend to use in conjunction with [PicCollector](https://github.com/spenat/PicCollector)

You need to start the falcon api with `run_api.sh` in PicCollector and serve images with for example nginx

Or you can use SimpleHTTPServer to serve images in development


### Serve images on port 7777
```
cd <your image directory>
python2 -m SimpleHTTPServer 7777
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
