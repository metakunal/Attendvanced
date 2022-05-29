# Attendvanced ✋
A faceface recognition based attendance monitoting system.
#### <a href="https://youtu.be/Cy-THduILeU">Demo Video</a> 
# Table of Contents
- <a href="#run">Running the application </a>
- <a href="#user">User Guidelines </a>
- <a href="#credits">Credits</a>
- <a href="#document">Documentation </a>

# <div id="run">✅ Running the Application</div>
## Server
1. Make sure the 10 env variables have been assigned in ".env" file.
2. Install the "nodemon" which can restart the server script automatically if changes are detected.
3. Open CMD, execute command "npm i -g nodemon" to install nodemon globally.
4. Take a look at "server/package.json".
5. Open CMD under directory "server", type "npm run dev".
6. The server is running on http://localhost:4000.
## Client
1. The client script is built using ReactJS, through CRA command.
2. Open CMD under directory "client", type "npm start".
3. The client is running on http://localhost:3000.

# <div id="user">✅ User Guidelines</div>
## Professor
1. Register an account.
2. Create a course.
3. Give the course unique ID to your students.
4. Students need to send the request to enrol, approve the enrolment.
5. You do not need upload student's face photo, which will be done by students.
6. After all student enrolled, select a course and take the attendance.
7. You can see how many face photo of all the enrolled students have uploaded.
8. Ensure that the students upload their face photo, otherwise there is no facial data of that student for reference.
9. Only those enrol in the particular course will be counted into dataset for facial classification.
10. Inside attendance taking form, select the time, date and camera.
11. Wait for all the models being loaded.
12. Set the approriate threshold distance as you wish.
13. Submit the attendance form if finished.
14. Visualize the attendance data in "Attendance History", or you can enter a particular course and click "View Attendance History".
15. You can "Warn" or "Kick" the student out of a course.
16. The face photo of the student who is kicked out will not be counted next time taking the attendance.
## Student
1. Register an account.
2. Enrol a course.
3. Wait for approval from the lecturer.
4. Upload your face photo in "Face Gallery", best to have at least 2 face photo.
5. Wait for all models being loaded.
6. The system will perform face detection, ensuring only a single face exist and rejecting photo with empty face or multiple faces.
7. The photo will be uploaded to the image storage.
8. When your lecturer take the attendance of a particular course, all your uploaded facial data will be counted into the dataset for facial comparison.
9. Visualize the attendance data in "Attendance History", or you can enter a particular course and click "View Attendance History".

# <div id="credits">✅ Credits</div>
<a href="https://github.com/justadudewhohacks/face-api.js/">Face-API</a>

# <div id="document">✅ Documentation</div>
The detailed documentation can be found <a href="https://docs.google.com/document/d/1aD-KHXOkO1BSoSciSrA6aZeCLKcOUktVYyA4rSlrCdg/edit?usp=sharing">here ↗</a>.
## Overview of Tech Stack
<img src="https://i.ibb.co/9w0wZL0/1-YF7-Heg-Anp-Xe-K8-ZNrk2hslw.png">
<br>

## Overview of the System Design
I have made the design for a college. In the attendance system, there are 2 user roles which are professor and student. The professor can add course, view course info, create the attendance, change the attendance system, join the attendance room and view attendance report. The student can enrol course, view course info, upload face image (Face Registration occurs) , join attendance room and view attendance report.
<br>
<br>
<br>
<img src="https://i.ibb.co/L01YC20/usecase.png">
<br>

## System Architecture
The system is a client-server architecture which contains several modules such as face registration module, face matching module, user module, attendance module and course module. Each module is backed by the resolver in the server to handle the respective GraphQL request query.
<br>
<br>
<br>
<img src="https://i.ibb.co/hD6CJ7k/System-Architecture.png">
<br>
# Face Registration Process
The Steps involved in the face registration process are as follow :
- Image Acquisition
- Generate Feature Vectors From Detected Face
- Store the Feature Vectors
<br>
<img src="https://i.ibb.co/0X8QV65/face-matching.png">
<br>

# Face Matching Process
The Steps involved in the face matching process are as follow :
- Fetching Dataset
- Label Dataset
- Image Acquisition
- Generate Feature Vectors
- From Detected Face
- Compute L2 Distance
- Obtain Face IDD
- Save the transaction
<br>
<img src="https://i.ibb.co/dcpcWt1/face-registration.png">
<br>

# Databased Design
There is a total of 5 collections, namely “People”, “Face Photo”, “Course”, “Attendance” and “Trx”.
<table>
<tr>
    <th>Collection</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>People</td>
    <td>Storing the information about user such as name, email, password, rollno/staffID, profile picture and user level.</td>
  </tr> 
   <tr>
    <td>Face Photo</td>
    <td>Storing the datasets including owner ID, URL and feature vectors.</td>
  </tr> 
   <tr>
    <td>Course</td>
    <td>Storing course information such as creator ID, unique ID, course code, course
name, course session and enrolled students.</td>
  </tr> 
   <tr>
    <td>Attendance</td>
    <td>Storing attendance information such as date and time with the setting such as
isOn(currently active) and mode.</td>
  </tr> 
   <tr>
    <td>Trx</td>
    <td>Storing the attendance transactions record which are student ID and attendance ID.</td>
  </tr> 
</table>
<br>
<img src="https://i.ibb.co/b7G0ddr/ERD.png">
<br>

