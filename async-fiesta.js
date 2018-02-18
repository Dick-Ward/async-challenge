$(() => {
  const $bucket = $(".photo-bucket");
  const draw = img => $bucket.append(img);

  // NOTE: The height and width variables can be changed to fetch different sized images.
  const getImageUrl = id =>
    `https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/rotate=deg:0/resize=width:100,height:100,fit:crop/output=format:jpg,quality:95/compress/${id}`;

  const startLoading = () => {
    let batchStart = 0;
    while (batchStart < IMAGE_IDS.length) {
      load(batchStart);

      batchStart += 5;
    }

    // get first five in images.js array
    //  iterate through and create those image objects
    // then draw them
    // TODO: Implement me.
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
