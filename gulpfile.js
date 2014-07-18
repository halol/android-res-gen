var gulp = require("gulp"),
	imageResize = require('gulp-image-resize');


// 1080x1920 Nexus 5
// 100%

var paths = {
	input: 'input/*.{png,jpg}',
	xxhdpi: {
		scale: '100%',
		dest: 'output/drawable-xxhdpi'
	},
	xhdpi: {
		scale: '66.66%',
		dest: 'output/drawable-xhdpi'
	},
	hdpi: {
		scale: '50%',
		dest: 'output/drawable-hdpi'
	},
	mdpi: {
		scale: '33.33%',
		dest: 'output/drawable-mdpi'
	}
}

gulp.task("xxhdpi", function() {
	return gulp.src(paths.input)
		.pipe(imageResize({
			width: paths.xxhdpi.scale,
			height: paths.xxhdpi.scale
		}))
		.pipe(gulp.dest(paths.xxhdpi.dest))
});
// 720x1280
// 66,66%
gulp.task("xhdpi", function() {
	return gulp.src(paths.input)
		.pipe(imageResize({
			width: paths.xhdpi.scale,
			height: paths.xhdpi.scale
		}))
		.pipe(gulp.dest(paths.xhdpi.dest))
});


// 540x960
// 50%
gulp.task("hdpi", function() {
	return gulp.src(paths.input)
		.pipe(imageResize({
			width: paths.hdpi.scale,
			height: paths.hdpi.scale
		}))
		.pipe(gulp.dest(paths.hdpi.dest))
});


// 360x640
// 33.33%
gulp.task("mdpi", function() {
	return gulp.src(paths.input)
		.pipe(imageResize({
			width: paths.mdpi.scale,
			height: paths.mdpi.scale
		}))
		.pipe(gulp.dest(paths.mdpi.dest))
});




// Watch me!
gulp.task("watch", function(){
	gulp.watch(paths.input, ['xxhdpi'])
	gulp.watch(paths.input, ['xhdpi'])
	gulp.watch(paths.input, ['hdpi'])
	gulp.watch(paths.input, ['mdpi'])
});


gulp.task("default",['xxhdpi', 'xhdpi', 'hdpi', 'mdpi', 'watch'])


