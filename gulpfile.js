const html = () => {
  const {src, dest} = require("gulp");
  const paths = require("./paths.config");
  const fileInclude = require("gulp-file-include");

  return src(paths.src.html)
    .pipe(fileInclude({
      prefix: "@@",
      basepath: "@file",
      indent: true
    }))
    .pipe(dest(paths.build.html));
};

const styles = () => {
  const {src, dest} = require("gulp");
  const paths = require("./paths.config");
  const sourcemaps = require("gulp-sourcemaps");
  const postcss = require("gulp-postcss");

  return src(paths.src.styles)
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write())
    .pipe(dest(paths.build.styles));
};

const scripts = () => {
  const {src, dest} = require("gulp");
  const paths = require("./paths.config");
  const sourcemaps = require("gulp-sourcemaps");
  const concat = require("gulp-concat");
  const babel = require("gulp-babel");
  // const uglify = require("gulp-uglify");

  return src(paths.src.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.build.scripts));
};

const images = () => {
  const {src, dest} = require("gulp");
  const paths = require("./paths.config");

  return src(paths.src.images).pipe(dest(paths.build.images));
};

const fonts = () => {
  const {src, dest} = require("gulp");
  const paths = require("./paths.config");

  return src(paths.src.fonts).pipe(dest(paths.build.fonts));
};

const videos = () => {
  const {src, dest} = require("gulp");
  const paths = require("./paths.config");

  return src(paths.src.videos).pipe(dest(paths.build.videos));
};

const clean = done => {
  const del = require("del");

  del.sync("./build/");
  done();
};

const browsersync = require("browser-sync");

const browserSyncStart = done => {
  browsersync.init({
    server: {
      baseDir: "./build/"
    },
    port: 3000
  });

  done();
};

const browserSyncReload = done => {
  browsersync.reload();
  done();
};

const {parallel, series} = require("gulp");

const build = series(clean, parallel(html, styles, scripts, images, fonts, videos))

const watchFiles = () => {
  const {watch, series} = require("gulp");

  watch("./src/**/*", series(build, browserSyncReload));
};

const watch = parallel(browserSyncStart, watchFiles);

module.exports.html = html;
module.exports.styles = styles;
module.exports.scripts = scripts;
module.exports.images = images;
module.exports.fonts = fonts;
module.exports.videos = videos;
module.exports.build = build;
module.exports.watch = watch;
