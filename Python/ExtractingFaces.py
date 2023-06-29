import cv2
import os

imagesPath = "D:/Users/Syro/Documents/Repos/SmartFRA/Python/Images"
faceImagesPath = "D:/Users/Syro/Documents/Repos/SmartFRA/Python/Images/Faces"

# upsert 
if not os.path.exists(faceImagesPath):
     os.makedirs(faceImagesPath)
     print("Nueva carpeta: Faces")

# face detection
faceClassif = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
for imageName in os.listdir(imagesPath):
     print(imageName)
     image = cv2.imread(imagesPath + "/" + imageName)
     faces = faceClassif.detectMultiScale(image, 1.1, 5)
     for (x, y, w, h) in faces:
          face = image[y:y + h, x:x + w]
          face = cv2.resize(face, (150, 150))
          cv2.imwrite(faceImagesPath + "/" + imageName + ".jpg", face)