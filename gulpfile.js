const gulp = require("gulp");
const browsersync = require("browser-sync").create();

function serveTask() {
  browsersync.init({
    server: "./src"
  });

  gulp.watch("./src/*.css").on("change", browsersync.reload);
  gulp.watch("./src/*.html").on("change", browsersync.reload);
}

exports.default = serveTask;
