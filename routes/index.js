require('dotenv').config();
const express = require('express');
const router = express.Router();
const twilioClient = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);



router.post('/callback', function(req, res, next) {
  let event = req.body;
  twilioClient
  .taskrouter.workspaces(process.env.WORKSPACE_SID)
  .tasks
  .create(
    {
      attributes: JSON.stringify(
        {
          to: event.To,
          direction: 'outbound',
          name: 'Click to dial',
          from: process.env.FROM_NUMBER,
          targetWorker: event.Worker,
          flexOutboundDialerTargetWorker: event.Worker,
          autoAnswer: 'true',
          internal: 'false'
        }),
      workflowSid: process.env.WORKFLOW_SID,
      taskChannel: 'custom1',
      timeout: 30
    })
  .then(task => {
    console.log( task.sid );
  })
  .catch((error) => {
    console.log(error);
  });
  res.render('success');
});


router.get('/', function(req, res, next) {
  twilioClient.taskrouter.workspaces(process.env.WORKSPACE_SID)
  .workers
  .list()
  .then(
    workers =>  { console.log(workers); res.render('index', { title: 'Outbound call' , workers: workers.map(v => JSON.parse(v.attributes).contact_uri)}) }
  )
});

module.exports = router;



