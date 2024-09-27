let counter = 0;
      const counterDisplay = document.getElementById("counterDisplay");
      document.getElementById("increase-button").addEventListener("click", () => {
        counter = counter + 1; 
        counterDisplay.textContent = counter;
      });

      document.getElementById("decrease-button").addEventListener("click", () => {
        counter--;
        counterDisplay.textContent = counter;
      });

      document.getElementById("resetbtn").addEventListener("click", () => {
        counter = 0;
        counterDisplay.textContent = counter;
      });

      // countdown
      let countDown = 10;
      let countDownIntervel;
      const countdownDisplay = document.getElementById("countdownDisplay");
      const customInput = document.getElementById("countdownInput");

      function startCounter() {
        if (countDownIntervel) clearInterval(countDownIntervel);
        countdownDisplay.textContent = countDown;
        countDownIntervel = setInterval(() => {
          countDown--;
          countdownDisplay.textContent = countDown;
          changeBackground();
          if (countDown <= 0) {
            clearInterval(countDownIntervel);
            countdownDisplay.textContent = "Time's Up";
            document.body.style.backgroundColor = "#495057"; 
          }
        }, 1000);
      }

      function changeBackground() {
        const intensity = Math.floor((countDown / 10) * 255);
        document.body.style.backgroundColor = `rbg(255, ${intensity},${intensity})`; // dom
      }

      document.getElementById("startbtn").addEventListener("click", () => {
        const customValue = parseInt(customInput.value);
        countDown = customValue > 0 ? customValue : countDown;
        startCounter();
      });

      document.getElementById("stopbtn").addEventListener("click", () => {
        clearInterval(countDownIntervel);
      });

      document
        .getElementById("resetCountdownbtn")
        .addEventListener("click", () => {
          clearInterval(countDownIntervel);
          countDown = 10;
          countdownDisplay.textContent = countDown;
          document.body.style.backgroundColor = "#f7f7f7";
        });