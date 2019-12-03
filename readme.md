# Twilio Flex Click to Dial

This repository is meant as an example on how one can create a click to dial functionality for internal agents. **This code is not meant to be deployed to production as it might contain security vulnerabilities.**

# Prerequisites

1. Active instance of [Twilio Flex](http://twilio.com/flex)
2. Dialpad activated, currently a [Pre-Release Feature](https://flex.twilio.com/admin/features)

# How to use

1. `git clone https://github.com/andrej-s/twlo-clicktodial`
2.  `cd twlo-clicktodial`
3. `npm install`
4. `cp .env.example .env`
5.  Add credentials and configuration in `.env`
6. `npm start`
7. Head over to [http://localhost:3000/](http://localhost:3000/)
8. Select active user and enter a phone number to dial in [E164 format](https://www.twilio.com/docs/glossary/what-e164) - if you are on a trial, you can only call verified phone numbers
9. A task will be accepted in Twilio Flex and a call is initiated