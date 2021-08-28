var bill_input = document.getElementById('bill'),
percent_5 = document.getElementById('5_percent'),
percent_10 = document.getElementById('10_percent'),
percent_15 = document.getElementById('15_percent'),
percent_25 = document.getElementById('25_percent'),
percent_50 = document.getElementById('50_percent'),
custom_percent = document.getElementById('custom_percent'),
number_people = document.getElementById('number_people'),
tip_amount = document.getElementById('tip_amount'),
total_person = document.getElementById('total_total'),
reset = document.getElementById('reset');

var percent, error = document.getElementById('error');

percent_5.addEventListener('click', event => {
    percent = 5/100;
    percent_5.style.color = 'hsl(183, 100%, 15%)';
    percent_5.style.backgroundColor =  'hsl(172, 67%, 45%)';
    percent_10.style.color = '';
    percent_10.style.backgroundColor =  '';
    percent_15.style.color = '';
    percent_15.style.backgroundColor =  '';
    percent_25.style.color = '';
    percent_25.style.backgroundColor =  '';
    percent_50.style.color = '';
    percent_50.style.backgroundColor =  '';
});
percent_10.addEventListener('click', event => {
    percent = 10/100;
    percent_5.style.color = '';
    percent_5.style.backgroundColor =  '';
    percent_10.style.color = 'hsl(183, 100%, 15%)';
    percent_10.style.backgroundColor =  'hsl(172, 67%, 45%)';
    percent_15.style.color = '';
    percent_15.style.backgroundColor =  '';
    percent_25.style.color = '';
    percent_25.style.backgroundColor =  '';
    percent_50.style.color = '';
    percent_50.style.backgroundColor =  '';
});
percent_15.addEventListener('click', event => {
    percent = 15/100;
    percent_5.style.color = '';
    percent_5.style.backgroundColor =  '';
    percent_10.style.color = '';
    percent_10.style.backgroundColor =  '';
    percent_15.style.color = 'hsl(183, 100%, 15%)';
    percent_15.style.backgroundColor =  'hsl(172, 67%, 45%)';
    percent_25.style.color = '';
    percent_25.style.backgroundColor =  '';
    percent_50.style.color = '';
    percent_50.style.backgroundColor =  '';
});
percent_25.addEventListener('click', event => {
    percent = 25/100;
    percent_5.style.color = '';
    percent_5.style.backgroundColor =  '';
    percent_10.style.color = '';
    percent_10.style.backgroundColor =  '';
    percent_15.style.color = '';
    percent_15.style.backgroundColor =  '';
    percent_25.style.color = 'hsl(183, 100%, 15%)';
    percent_25.style.backgroundColor =  'hsl(172, 67%, 45%)';
    percent_50.style.color = '';
    percent_50.style.backgroundColor =  '';
});
percent_50.addEventListener('click', event => {
    percent = 50/100;
    percent_5.style.color = '';
    percent_5.style.backgroundColor =  '';
    percent_10.style.color = '';
    percent_10.style.backgroundColor =  '';
    percent_15.style.color = '';
    percent_15.style.backgroundColor =  '';
    percent_25.style.color = '';
    percent_25.style.backgroundColor =  '';
    percent_50.style.color = 'hsl(183, 100%, 15%)';
    percent_50.style.backgroundColor =  'hsl(172, 67%, 45%)';
});
custom_percent.addEventListener('input', event => {
    percent = custom_percent.value/100;
    percent_5.style.color = '';
    percent_5.style.backgroundColor =  '';
    percent_10.style.color = '';
    percent_10.style.backgroundColor =  '';
    percent_15.style.color = '';
    percent_15.style.backgroundColor =  '';
    percent_25.style.color = '';
    percent_25.style.backgroundColor =  '';
    percent_50.style.color = '';
    percent_50.style.backgroundColor =  '';
});

number_people.addEventListener('input', event => {
    if (number_people.value == '0'){
        error.style.display = 'block';
        number_people.style.borderColor = 'hsl(13, 59%, 60%)';
    }
    else if (number_people.value == ''){
        tip_amount.textContent = '$0.00';
        total_person.textContent = '$0.00';
    }
    else{
        error.style.display = 'none';
        number_people.style.borderColor = '';
        tip_amount.textContent = '$' + ((bill_input.value / number_people.value) * percent).toFixed(2);
        total_person.textContent = '$' + ((bill_input.value / number_people.value) + (bill_input.value / number_people.value) * percent).toFixed(2);
    }
});

reset.addEventListener('click', event => {
    bill_input.value = '';
    number_people.value = '';
    percent_5.style.color = '';
    percent_5.style.backgroundColor =  '';
    percent_10.style.color = '';
    percent_10.style.backgroundColor =  '';
    percent_15.style.color = '';
    percent_15.style.backgroundColor =  '';
    percent_25.style.color = '';
    percent_25.style.backgroundColor =  '';
    percent_50.style.color = '';
    percent_50.style.backgroundColor =  '';
    custom_percent.value = '';
    tip_amount.textContent = '$0.00';
    total_person.textContent = '$0.00';
});