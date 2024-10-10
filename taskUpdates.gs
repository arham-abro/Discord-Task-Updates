const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace with your Discord webhook URL

function sendTaskUpdates() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); // Get the active sheet
  const data = sheet.getDataRange().getValues(); // Get all data from the sheet

  // Loop through each row of data starting from row 2 (assuming row 1 is headers)
  for (let i = 1; i < data.length; i++) {
    const taskName = data[i][0]; // Task Name in Column A
    const assignedTo = data[i][1]; // Assigned To in Column B
    const currentStatus = data[i][3]; // Current Status in Column D
    const lastSentStatus = data[i][4]; // Last Sent Status in Column E

    // Check if the status has changed
    if (currentStatus !== lastSentStatus) {
      // Create message to send to Discord
      const message = {
        content: `📝 **Task Update**\n\n**Task:** ${taskName}\n**Assigned To:** ${assignedTo}\n**Status:** ${currentStatus}`
      };

      // Send message to Discord
      sendDiscordMessage(message);

      // Update the Last Sent Status in Column E
      sheet.getRange(i + 1, 5).setValue(currentStatus); // Update the last sent status (Column E)
    }
  }
}

function sendDiscordMessage(message) {
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(message)
  };

  UrlFetchApp.fetch(DISCORD_WEBHOOK_URL, options); // Send the message to Discord
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Task Management')
    .addItem('Send Task Updates to Discord', 'sendTaskUpdates')
    .addToUi();
}

