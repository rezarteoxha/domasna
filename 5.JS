function countdown(seconds) {
    let remainingSeconds = seconds;
  
    const intervalId = setInterval(() => {
      if (remainingSeconds === 0) {
        clearInterval(intervalId);
        console.log("Countdown complete!");
      } else {
        console.log(remainingSeconds);
        remainingSeconds--;
      }
    }, 1000);
}
countdown(5);
  