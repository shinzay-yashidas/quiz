# Quiz App Deployment to Microsoft Teams

This document provides comprehensive instructions for deploying the Quiz App to Microsoft Teams, including manifest configuration and tab registration steps.

## Prerequisites
- You need to have a Microsoft 365 Developer account.
- Ensure that you have the Microsoft Teams app installed.
- Basic knowledge of JSON and how to work with it.

## Step 1: Prepare Your Quiz App
1. Clone the quiz repository:
   ```bash
   git clone https://github.com/shinzay-yashidas/quiz.git
   cd quiz
   ```
2. Ensure that your app is functioning correctly locally.

## Step 2: Create the Manifest File
1. Create a manifest file named `manifest.json` in the root of your project.
2. Here’s an example of what your `manifest.json` should look like:
   ```json
   {
     "manifestVersion": "1.8",
     "version": "1.0",
     "id": "<your-app-id>",
     "packageName": "com.example.quizapp",
     "developer": {
       "name": "Your Name",
       "websiteUrl": "https://yourwebsite.com",
       "privacyUrl": "https://yourwebsite.com/privacy",
       "termsOfUseUrl": "https://yourwebsite.com/terms"
     },
     "name": {
       "short": "Quiz App",
       "full": "Interactive Quiz Application"
     },
     "description": {
       "short": "A simple quiz app.",
       "full": "An interactive quiz app built to engage users within Microsoft Teams."
     },
     "icons": {
       "outline": "outline-icon.png",
       "color": "color-icon.png"
     },
     "accentColor": "#FFFFFF",
     "configurableTabs": [
       {
         "configurationUrl": "https://yourwebsite.com/config",
         "canUpdateConfiguration": true,
         "scopes": ["team"]
       }
     ],
     "permissions": ["identity", "messageTeamMembers"],
     "webApplicationInfo": {
       "id": "<your-web-app-id>",
       "resource": "api://<your-api-resource>"
     }
   }
   ```
3. Replace placeholders such as `<your-app-id>`, `<your-web-app-id>`, and URLs with your actual values.

## Step 3: Zip Your Application
1. Once you've created your `manifest.json` file and added the necessary assets (like icons), zip the contents:
   ```bash
   zip -r quiz-app.zip *.png manifest.json
   ```

## Step 4: Upload the App to Teams
1. Open Microsoft Teams.
2. Go to Apps > Upload a custom app > Upload for [Your Team Name].
3. Select the `quiz-app.zip` file that you created earlier.
4. Follow the prompts to complete the app upload.

## Step 5: Registering the Tab in Teams
1. Navigate to the team where you uploaded the app.
2. Click on the `+` icon to add a new tab.
3. Search for your Quiz App and select it to add it as a tab.

## Wrapping Up
You have successfully deployed the Quiz App to Microsoft Teams! Ensure that you test the app properly after deployment to catch any issues.

For further assistance, refer to the [Microsoft Teams documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/) or contact support.

---

Feel free to modify this document as required.