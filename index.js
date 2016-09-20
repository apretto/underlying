var canvasOriginal = document.querySelector('#original')
var canvasGenerated = document.querySelector('#generated')

var originalImage = document.querySelector('#original-image')
var generatedImage = document.querySelector('#generated-image')

debugger
var originalContext = canvasOriginal.getContext('2d')
var generatedContext = canvasGenerated.getContext('2d')

console.log(originalImage.width, originalImage.height)
console.log(generatedImage.width, generatedImage.height)

generatedContext.drawImage(generatedImage,
                           0, 0, originalImage.width, originalImage.height,
                           0, 0, 400, 400)
originalContext.drawImage(originalImage,
                          0, 0, generatedImage.width, generatedImage.height,
                          0, 0, 400, 400)

function pixelError (pixel1, pixel2) {
  var errorR = pixel1[0] - pixel2[0]
  var errorG = pixel1[1] - pixel2[1]
  var errorB = pixel1[2] - pixel2[2]

  return [errorR, errorG, errorB]
}

function errorBetweenImages (canvas1, canvas2) {
  var imageData1 = canvas1.getImageData(0, 0, 400, 400)
  var imageData2 = canvas2.getImageData(0, 0, 400, 400)

  return pixelError(imageData1.data, imageData2.data)
}
