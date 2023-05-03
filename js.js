function Quest1()
{
    let num = document.getElementById("quest1-num").value;
    let paragraph = document.getElementById("l-txt1");
    let answ;
    console.log(num);

    if (num <= 1)
    {
        answ = "Щенки";
    }
    else if (num > 1 && num <= 3)
    {
        answ = "Молодые собаки";
    }
    else if (num > 3 && num <= 7)
    {
        answ = "Собаки средних лет";
    }
    else
    {
        answ = "Почтенные таксоны";
    }

    paragraph.textContent = answ;
}

function Quest2_1()
{
    let num = document.getElementById("quest2-1-num").value;
    let isRaining = document.getElementById('quest2-1-bool').checked
    let paragraph = document.getElementById("l-txt2-1");
    let answ;

    if(!isRaining)
    {
        if(num >= 10 && num < 15)
        {
            answ = 30;
        }
        else if (num >= 15 && num < 25)
        {
            answ = 40;
        }
        else if (num >= 25 && num < 35)
        {
            answ = 20;
        }
        else
        {
            answ = 0;
        }
    }
    else {
        answ = 0;
    }

    paragraph.textContent = answ + " минут";
}

function Quest2_2()
{
    let num = document.getElementById("quest2-2-num").value;
    let isRaining = document.getElementById('quest2-2-bool').checked
    let paragraph = document.getElementById("l-txt2-2");
    let answ;

    if(!isRaining && num >= 0 && num <= 35)
    {
        answ = 20 - Math.abs(20 - num)
    }
    else {
        answ = 0;
    }

    paragraph.textContent = answ + " минут";
}

function Quest3()
{
    let time = document.getElementById("quest3-num").value;
    let paragraph = document.getElementById("l-txt3");
    let answ;

    if (time >= 8 && time < 13 || time >= 14 && time <= 19) {
        answ = "Сходи на фабрику за чипсам"
    }
    else if (time >= 9 && time < 14 || time >= 15 && time <= 17) {
        answ = "Сходи в магазин за чипсами"
    }
    else if (time >= 7 && time <= 20) {
        answ = "Сходи на рынок за чипсами"
    }
    else
    {
        answ = "Сейчас нигде не работают, лучше остаться дома"
    }

    paragraph.textContent = answ;
}

function Quest4()
{
    let num = document.getElementById("quest4-num").value;
    let paragraph = document.getElementById("l-txt4");
    let answ = 1;

    for (let i = 1; i <= num; i++)
    {
        if (i % 2 === 0)
        {
            answ *= i;
        }
    }

    paragraph.textContent = answ
}

function Quest5()
{
    let num = String(document.getElementById("quest5-num").value);
    let paragraph = document.getElementById("l-txt5");
    let answ = num.length;

    paragraph.textContent = "Количество цифр " + answ;
}

function Quest6()
{
    let num = String(document.getElementById("quest6-num").value);
    let paragraph = document.getElementById("l-txt6");
    let numCheck = "";
    let answ;

    for(let i = num.length - 1; i >= 0; i--)
    {
        numCheck += num[i];
    }

    if (num === numCheck)
    {
        answ = "Палиндром";
    }
    else
    {
        answ = "Не палиндром"
    }

    paragraph.textContent = answ;
}