(function() {
    const firstNum = document.getElementById('numField1');
    const secondNum = document.getElementById('numField2');
    const operationSign = document.getElementById('sign');
    const countBtn = document.getElementById('calcBtn');
    const outBox = document.getElementById('output');

    let prevCalc = null;

    countBtn.onclick = function() {
        const val1 = Number(firstNum.value);
        const val2 = Number(secondNum.value);
        const op = operationSign.value;

        if (firstNum.value === '' || secondNum.value === '') {
            outBox.innerHTML = '<div class="current-line">Заполните оба поля!</div>';
            return;
        }

        if (isNaN(val1) || isNaN(val2)) {
            outBox.innerHTML = '<div class="current-line">Введите числа!</div>';
            return;
        }

        let answer;

        switch(op) {
            case '+': answer = val1 + val2; break;
            case '-': answer = val1 - val2; break;
            case '*': answer = val1 * val2; break;
            case '/': 
                if (val2 === 0) {
                    outBox.innerHTML = '<div class="current-line">Делить на 0 нельзя!</div>';
                    return;
                }
                answer = val1 / val2;
                break;
        }

        let sign = op;

        const newLine = `${val1} ${sign} ${val2} = ${answer}`;

        if (prevCalc) {
            outBox.innerHTML = `
                <div class="history-line">${prevCalc}</div>
                <div class="current-line">${newLine}</div>
            `;
        } else {
            outBox.innerHTML = `<div class="current-line">${newLine}</div>`;
        }

        prevCalc = newLine;
    };
})();