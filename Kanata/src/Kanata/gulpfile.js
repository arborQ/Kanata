/// <binding AfterBuild='views' />
var gulp = require("gulp");
var pug = require("gulp-pug");

gulp.task("views", function() {
    return gulp.src("./Content/**/*.pug")
        .pipe(pug({
            // Your options in here. 
  
        })).pipe(gulp.dest("./wwwroot"));
});

gulp.task("default", function () {
    // place code for your default task here
});