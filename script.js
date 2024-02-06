function updateTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const day = now.getDate();
  const month = now.getMonth() + 1; // Los meses comienzan desde 0
  const year = now.getFullYear();

  const formattedTime = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;
  const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;

  document.getElementById('time').textContent = formattedTime;
  document.getElementById('date').textContent = formattedDate;
}

setInterval(updateTime, 1000);
updateTime(); // Mostrar la hora y la fecha actuales inmediatamente
