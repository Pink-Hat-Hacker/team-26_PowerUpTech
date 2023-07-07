# How to Clone
- To clone the repository using HTTPS, under "HTTPS", copy the URL
- To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then copy the URL
- To clone a repository using GitHub CLI, click GitHub CLI
- Open Git Bash.
- Change the current working directory to the location where you want the cloned directory
- Type git clone, and then paste the URL you copied earlier and run it
  ```
  git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
  ```
# Note: You may need to download Flask and Flask-cors
# How the Code Works - Basic Overview
- Start by generating the standard test with an equal amount of questions on each topic using a Python Script
  - Questions are pulled from a Question Database (Python Script)
- Once the student finishes the first test, they can see their answers and ask the AI any questions relating to the question they got wrong
- In the background:
  - The answers are sent to a python script where a percentage is generated for the different topics and based of that a new personalized test with new questions is sent to the student
  - This new quiz is created keeping in mind the topics the student struggled on - giving them more questions on that topic
- This loop of personalized tests continue as long as the generate new test button is clicked

