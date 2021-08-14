const {src, dest, parallel, series, watch} = require("gulp");
const fileInclude = require("gulp-file-include");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const browsersync = require("browser-sync");
const paths = require("./paths.config");

const html = () => src(paths.src.html)
  .pipe(fileInclude({
    prefix: "@@",
    basepath: "@file",
    indent: true
  }))
  .pipe(dest(paths.build.html))
  .pipe(browsersync.stream());

const styles = () => src(paths.src.styles)
  .pipe(postcss())
  .pipe(dest(paths.build.styles))
  .pipe(browsersync.stream());

const samoStyles = () => src(paths.src.samoStyles)
  .pipe(postcss())
  .pipe(dest(paths.build.samoStyles))
  .pipe(browsersync.stream());

const scripts = () => src(paths.src.scripts)
  .pipe(concat("customer.js"))
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(uglify())
  .pipe(dest(paths.build.scripts))
  .pipe(browsersync.stream());

const images = () => src(paths.src.images).pipe(dest(paths.build.images)).pipe(browsersync.stream());

const fonts = () => src(paths.src.fonts).pipe(dest(paths.build.fonts)).pipe(browsersync.stream());

const videos = () => src(paths.src.videos).pipe(dest(paths.build.videos)).pipe(browsersync.stream());

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

const build = parallel(html, styles, samoStyles, scripts, images, fonts, videos);

const watchFiles = () => watch("./src/**/*", series(build, browserSyncReload));

const watchNoStaticFiles = parallel(browserSyncStart, () => watch("./src/**/*", series(parallel(html, styles, samoStyles, scripts), browserSyncReload)));

const watchSrc = parallel(browserSyncStart, watchFiles);

module.exports.html = html;
module.exports.styles = styles;
module.exports.samoStyles = styles;
module.exports.scripts = scripts;
module.exports.images = images;
module.exports.fonts = fonts;
module.exports.videos = videos;
module.exports.build = build;
module.exports.watch = watchSrc;
module.exports.watchnostat = watchNoStaticFiles;
