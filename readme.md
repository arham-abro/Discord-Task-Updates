# Discord Task Updates

## Overview
This Google Apps Script automates task updates to a Discord channel when the status of tasks is changed in a Google Sheet. It sends notifications only for tasks that have recently been updated.

## Features
- Sends real-time task updates to a specified Discord channel.
- Tracks the last sent status to avoid duplicate notifications.
- Easy integration with Google Sheets.

## Setup Instructions
1. **Open Google Sheets** and create a new or use an existing sheet with the following columns:
   - A: Task Name
   - B: Assigned To
   - C: Due Date
   - D: Status (Current Status)
   - E: Last Sent Status

2. **Create a Discord Webhook**:
   - In your Discord channel settings, navigate to "Integrations" > "Webhooks" and create a new webhook. Copy the webhook URL.

3. **Open Google Apps Script**:
   - In your Google Sheet, click on `Extensions` > `Apps Script`.

4. **Copy the Script**:
   - Replace the default code in the Apps Script editor with the code from `taskUpdates.gs`, ensuring you replace `YOUR_DISCORD_WEBHOOK_URL` with your actual Discord webhook URL.

5. **Save and Authorize**:
   - Save your script and authorize it to access your Google Sheets and external services.

6. **Run the Script**:
   - Use the custom menu "Task Management" to send task updates to Discord.

## Example Output
When the status changes, you will see messages like this in Discord:

