// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

export default function(robot) {

  // robot.hear(/badger/i, res => res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS"));

  // robot.respond(/open the (.*) doors/i, function(res) {
  //   let doorType = res.match[1];
  //   if (doorType === "pod bay") {
  //     return res.reply("I'm afraid I can't let you do that.");
  //   } else {
  //     return res.reply(`Opening ${doorType} doors`);
  //   }
  // });

  // robot.hear(/I like pie/i, res => res.emote("makes a freshly baked pie"));

  // let lulz = ['lol', 'rofl', 'lmao'];

  // robot.respond(/lulz/i, res => res.send(res.random(lulz)));

  // robot.topic(res => res.send(`${res.message.text}? That's a Paddlin'`));


  // let enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you'];
  // let leaveReplies = ['Are you still there?', 'Target lost', 'Searching'];

  // robot.enter(res => res.send(res.random(enterReplies)));
  // robot.leave(res => res.send(res.random(leaveReplies)));

  // let answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING;

  // robot.respond(/what is the answer to the ultimate question of life/, function(res) {
  //   if (answer == null) {
  //     res.send("Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again");
  //     return;
  //   }
  //   return res.send(`${answer}, but what is the question?`);
  // });

  // robot.respond(/you are a little slow/, res =>
  //   setTimeout(() => res.send("Who you calling 'slow'?")
  //   , 60 * 1000)
  // );

  // let annoyIntervalId = null;

  // robot.respond(/annoy me/, function(res) {
  //   if (annoyIntervalId) {
  //     res.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
  //     return;
  //   }

  //   res.send("Hey, want to hear the most annoying sound in the world?");
  //   return annoyIntervalId = setInterval(() => res.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH")
  //   , 1000);
  // });

  // robot.respond(/unannoy me/, function(res) {
  //   if (annoyIntervalId) {
  //     res.send("GUYS, GUYS, GUYS!");
  //     clearInterval(annoyIntervalId);
  //     return annoyIntervalId = null;
  //   } else {
  //     return res.send("Not annoying you right now, am I?");
  //   }
  // });


  // robot.router.post('/hubot/chatsecrets/:room', function(req, res) {
  //   let { room }   = req.params;
  //   let data   = JSON.parse(req.body.payload);
  //   let { secret } = data;

  //   robot.messageRoom(room, `I have a secret: ${secret}`);

  //   return res.send('OK');
  // });

  // robot.error(function(err, res) {
  //   robot.logger.error("DOES NOT COMPUTE");

  //   if (res != null) {
  //     return res.reply("DOES NOT COMPUTE");
  //   }
  // });

  // robot.respond(/have a soda/i, function(res) {
  //   // Get number of sodas had (coerced to a number).
  //   let sodasHad = (robot.brain.get('totalSodas') * 1) || 0;

  //   if (sodasHad > 4) {
  //     return res.reply("I'm too fizzy..");

  //   } else {
  //     res.reply('Sure!');

  //     return robot.brain.set('totalSodas', sodasHad+1);
  //   }
  // });

  // return robot.respond(/sleep it off/i, function(res) {
  //   robot.brain.set('totalSodas', 0);
  //   return res.reply('zzzzz');
  // });
};
