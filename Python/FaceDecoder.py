import cv2
import os
import face_recognition
import sys

# Codificar los rostros extraidos
imageFacesPath = "/home/syro/Repos/SmartFRA/Python/Images/Faces"
facesEncodings = []
facesNames = []

timesTrue = 0
timesFalse = 0
threshold = 15

class ErrorCode:
    SUCCESS = 0
    FAILURE = 1
    CAMERA_ERROR = 2

for file_name in os.listdir(imageFacesPath):
     image = cv2.imread(imageFacesPath + "/" + file_name)
     image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
     f_coding = face_recognition.face_encodings(image, known_face_locations=[(0, 150, 150, 0)])[0]
     facesEncodings.append(f_coding)
     facesNames.append(file_name.split(".")[0])

# Get video capture
cap = cv2.VideoCapture(0)

# Detector facial
faceClassif = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
while True:
     ret, frame = cap.read()
     if ret == False:
          sys.exit(ErrorCode.CAMERA_ERROR)

     frame = cv2.flip(frame, 1)
     orig = frame.copy()
     faces = faceClassif.detectMultiScale(frame, 1.1, 5)

     for (x, y, w, h) in faces:
          face = orig[y:y + h, x:x + w]
          face = cv2.cvtColor(face, cv2.COLOR_BGR2RGB)
          actual_face_encoding = face_recognition.face_encodings(face, known_face_locations=[(0, w, h, 0)])[0]
          result = face_recognition.compare_faces(facesEncodings, actual_face_encoding)

          if True in result:
               index = result.index(True)
               name = facesNames[index]
               color = (125, 220, 0)
               timesTrue = timesTrue + 1
               if(timesTrue == threshold):
                  print(facesNames[index])
                  sys.exit(ErrorCode.SUCCESS)
          else:
               name = "Desconocido"
               color = (50, 50, 255)
               timesFalse = timesFalse + 1
               if(timesFalse == threshold):
                  print("Face not detected")
                  sys.exit(ErrorCode.FAILURE)

          cv2.rectangle(frame, (x, y + h), (x + w, y + h + 30), color, -1)
          cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
          cv2.putText(frame, name, (x, y + h + 25), 2, 1, (255, 255, 255), 2, cv2.LINE_AA)
          
     cv2.imshow("Frame", frame)
     k = cv2.waitKey(1) & 0xFF

     if k == 27:
          break

cap.release()
cv2.destroyAllWindows()
