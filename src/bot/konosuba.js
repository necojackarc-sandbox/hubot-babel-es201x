export default function(robot) {
  robot.hear(/アクア/, (res) => {
    res.reply('駄女神');
  });
}
