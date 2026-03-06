function totalMonthlyHours(dailyWorkingHours, weeklyDays, monthlyWeeks){
    let monthlyHours = dailyWorkingHours * weeklyDays * monthlyWeeks;
    return monthlyHours;
}

function hourlyRate(salary, totalMonthlyHours){
    let hourRate = salary / totalMonthlyHours;
    return hourRate;
}

function extraValue(extraHours, hourlyRate, jobTitle){
    let e;
    switch(jobTitle){
        case 'Operator':
            e = extraHours * hourlyRate;
            break;
        case 'Salesman':
            e = extraHours * hourlyRate * 1.5;
            break;
        case 'Admin':
            e = extraHours * hourlyRate * 2;
            break;
        default:
            e = 0;
            break;
    }
    return e;
}

function grossSalary(basicSalary, bonus, penalties, extra){
    let gross = parseFloat(basicSalary) + parseFloat(bonus) - penalties + extra;
    return gross;
}

function taxValue(gross, taxRate){
    let taxes = gross * taxRate;
    return taxes;
}

function netSalary(gross, taxes){
    return gross - taxes;
}