module.exports = function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    port: 3002,
  })

  eleventyConfig.addPassthroughCopy("css/fonts");
}