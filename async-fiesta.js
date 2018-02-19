$(() => {
  const $bucket = $(".photo-bucket");
  const draw = img => $bucket.append(img);

  // NOTE: The height and width variables can be changed to fetch different sized images.
  const getImageUrl = id =>
    `https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/rotate=deg:0/resize=width:200,height:200,fit:crop/output=format:jpg,quality:95/compress/${id}`;

  var isPaused;
  var batchStart = 0;

  function resolveAfterOneSecond(x) {
    return new Promise(resolve => {
      if (isPaused === false) {
        setTimeout(() => {
          resolve(x);
        }, 1000);
      }
    });
  }

  const startLoading = async () => {
    isPaused = false;
    while (batchStart < IMAGE_IDS.length) {
      load(batchStart);
      await resolveAfterOneSecond();
      batchStart += 5;
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
    isPaused = true;
    console.log("Stop!");
  };

  $("button.start").on("click", startLoading);
  $("button.stop").on("click", stopLoading);
});
