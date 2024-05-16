function saturdayFun() {
    console.log('This Saturday, I want to roller-skate!');
  }
  saturdayFun();
  
  function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun());
  
  function mondayWork() {
    console.log("This Monday, I will ... .");
  }
  mondayWork();
  
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  console.log(mondayWork());
  
  function wrapAdjective(highlight = '*') {
    return function (adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    };
  }
  