$(() => {
  const $bucket = $(".photo-bucket");
  const draw = img => $bucket.append(img);

  // NOTE: The height and width variables can be changed to fetch different sized images.
  const getImageUrl = id =>
    `https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/rotate=deg:0/resize=width:20,height:20,fit:crop/output=format:jpg,quality:95/compress/${id}`;

  const startLoading = () => {
    let batchStart = 0;
    let timeout = 1000;
    while (batchStart < IMAGE_IDS.length) {
      setTimeout(function() {
        console.log(batchStart);
        load(batchStart);
        batchStart += 5;
      }, timeout);
      timeout += 1000;
    }
    console.log("Start!");
  };

  const load = batchStart => {
    let imgNum = batchStart;
    while (imgNum < batchStart + 5) {
      const img = new Image();
      img.src = getImageUrl(IMAGE_IDS[imgNum]);
      draw(img);
      imgNum++;
    }
  };

  const stopLoading = () => {
    // TODO: Implement me.
    console.log("Stop!");
  };

  $("button.start").on("click", startLoading);
  $("button.stop").on("click", stopLoading);
});
