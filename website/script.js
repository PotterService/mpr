document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const here=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.links a').forEach(a=>{if(a.getAttribute('href')===here)a.classList.add('active')});
