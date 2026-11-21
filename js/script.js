document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('formMessage');
    
    // Проверка на @ (Требование)
    if (!email.includes('@')) {
        messageElement.style.color = 'red';
        messageElement.style.textAlign = 'center';
        messageElement.style.marginTop = '15px';
        messageElement.textContent = 'Ошибка: Email должен содержать символ @';
        return;
    }
    
    messageElement.style.color = 'green';
    messageElement.style.textAlign = 'center';
    messageElement.style.marginTop = '15px';
    messageElement.textContent = 'Заявка успешно отправлена! Мы свяжемся с вами.';
    this.reset(); 
});