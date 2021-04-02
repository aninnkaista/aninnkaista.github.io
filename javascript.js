const now = dayjs();

const block_birthday = dayjs('1880-11-28');

let is_today = document.getElementById('birthday');

if (
    block_birthday.day() === now.day() &&
    block_birthday.month() === now.month()
) {
    is_today.textContent = 'YES';
} else {
    is_today.textContent = 'NO';
}