const userScore = document.getElementById('user-score');
        const compScore = document.getElementById('comp-score');
        const result = document.getElementById('result');
        let scoreUser = 0;
        let scoreComp = 0;
        const rock = document.getElementById("r");
        const paper = document.getElementById("p");
        const scissor = document.getElementById("s");
        rock.addEventListener('click',function(){
            game('r');
        });
        paper.addEventListener('click',function(){
            game('p');
        });
        scissor.addEventListener('click',function(){
            game('s');
        });
        function getCompScore(){
            const choices = ['r','p','s'];
            const num = Math.floor(Math.random() * 3);
            return choices[num];
        }
        function convertToWord(letter){
            if(letter === 'r') return 'Rock';
            if(letter === 'p') return 'Paper';
            return 'Scissor';
        }
        function Win(userChoice, compChoice){
            scoreUser++;
            userScore.innerHTML = scoreUser;
            compScore.innerHTML = scoreComp;
            result.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(compChoice)}(comp) .you Win!`;

        }
        function Lose(userChoice, compChoice){
            scoreComp++;
            userScore.innerHTML = scoreUser;
            compScore.innerHTML = scoreComp;
            result.innerHTML =  `${convertToWord(userChoice)}(user) loses to ${convertToWord(compChoice)}(comp) .you Lose!`;

        }
        function Draw(userChoice, compChoice){
            userScore.innerHTML = scoreUser;
            compScore.innerHTML = scoreComp;
            result.innerHTML = `${convertToWord(userChoice)}(user) equals to ${convertToWord(compChoice)}(comp) .It's a Draw`;

        }
        function game(userChoice){
            const compChoice= getCompScore();
            switch(userChoice+compChoice){
                case 'rp':
                case 'pr':
                case 'sp':
                    return Win();
                    break;
                case 'rp':
                case 'ps':
                case 'sr':
                    return Lose();
                break;
                case 'rr':
                case 'pp':
                case 'ss':
                    return Draw();
                    break;
            }

        }
