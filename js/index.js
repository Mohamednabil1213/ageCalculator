function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
        document.getElementById('result').innerText = 'Please select valid values for day, month, and year.';
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age >= 0) {
        document.getElementById('result').innerText = `You are ${age} years old.`;
    } else {
        document.getElementById('result').innerText = 'Invalid birthdate entered.';
    }
}