// Таймер обратного отсчета

// Время оконачания таймер
let deadline = '2019-6-1';

// Осталось времени до окончания
function timeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()) - 32400000,
        days = Math.floor(t / 1000 / 60 / 60 / 24),
        hours = Math.floor(t / 1000 / 60 / 60 % 24),
        minutes = Math.floor(t / 1000 / 60 % 60),
        seconds = Math.floor(t / 1000 % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
// Подставка таймера в элемент
function setClock(class1, endtime) {
    let summerTimer = document.querySelector(class1),
        days = summerTimer.querySelector('.days'),
        hours = summerTimer.querySelector('.hours'),
        minutes = summerTimer.querySelector('.minutes'),
        seconds = summerTimer.querySelector('.seconds'),
        timeUpdate = setInterval(updateClock, 1000);
    // Обновление значений
    function updateClock() {
        let t = timeRemaining(endtime);
        days.textContent = t.days +  'дн';
        hours.textContent = t.hours +  'ч';
        minutes.textContent = t.minutes +  'мин';
        seconds.textContent = t.seconds + 'сек';

        if(t.days < 10) {
            days.textContent = '0' + t.days +  'дн';
        }
        if(t.hours < 10) {
            hours.textContent = '0' + t.hours +  'ч';
        }
        if(t.minutes < 10) {
            minutes.textContent = '0' + t.hours +  'мин';
        }
        if(t.seconds < 10) {
            seconds.textContent = '0' + t.seconds +  'сек';
        }

        if (t.total <= 0) {
            clearInterval(timeUpdate);
            days.textContent = 0 +  'дн' + ':';
            hours.textContent = 0 +  'ч' + ':';
            minutes.textContent = 0 +  'мин' + ':';
            seconds.textContent = 0 + 'сек';
        }
    }
}

setClock('.summer-timer', deadline);