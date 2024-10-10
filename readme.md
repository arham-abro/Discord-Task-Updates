# Discord Task Updates Using Google Sheet

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
   - D: Status 
   - E: Last Sent Status  (Automatically Created)

<a href='https://imgchest.com/p/md7oxvowr7p' title=''><img src='https://cdn.imgchest.com/files/w7w6c8998ky.png'></a>

2. **Create a Discord Webhook**:
   - In your Discord channel settings, navigate to "Integrations" > "Webhooks" and create a new webhook. Copy the webhook URL.

3. **Open Google Apps Script**:
   - In your Google Sheet, click on `Extensions` > `Apps Script`.

4. **Copy the Script**:
   - Replace the default code in the Apps Script editor with the code from `taskUpdates.gs`, ensuring you replace `YOUR_DISCORD_WEBHOOK_URL` with your actual Discord webhook URL.

5. **Save and Authorize**:
   - Save your script and authorize it to access your Google Sheets and external services.

6. **Set an Event**:
   - In the Apps Script, click on `Triggers` > `Add Trigger` and select the following to send real-time updates to Discord:
    - **Choose which function to run:** sendTaskUpdates
	- **Choose which deployment should run:**  Head
	- **Select event source:**  From spreadsheet
	- **Select event type:**  On edit

## Example Output
When the status changes, you will see messages like this in Discord:

<a href='https://imgchest.com/p/ljyqz6oxny2' title=''><img src='https://cdn.imgchest.com/files/p7bwcr66qv7.png'></a>
