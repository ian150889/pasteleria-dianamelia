import './style.css'

/* 
  ========================================
  Main JavaScript Logic / Lógica Principal de JavaScript
  ========================================
*/

document.addEventListener('DOMContentLoaded', () => {

  /* 
    ----------------------------------------
    1. Mobile Menu Toggle / Alternar Menú Móvil
    ----------------------------------------
  */
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');
  const overlay = document.querySelector('.mobile-menu-overlay');
  
  function toggleMenu() {
      navList.classList.toggle('active');
      overlay.style.display = navList.classList.contains('active') ? 'block' : 'none';
      menuBtn.classList.toggle('active');
  }

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  }

  /* 
    ----------------------------------------
    2. WhatsApp Ordering Logic / Lógica de Pedidos por WhatsApp
    ----------------------------------------
  */
  // Define bakery phone number / Definir número de teléfono de la pastelería
  const PHONE_NUMBER = '1234567890'; // Replace with real number / Reemplazar con número real

  // Select all "Add" buttons / Seleccionar todos los botones "Agregar"
  const orderButtons = document.querySelectorAll('.add-btn');

  orderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Get product name from data attribute / Obtener nombre del producto del atributo data
      const product = e.target.closest('.add-btn').dataset.product;
      
      if (product) {
        // Create message / Crear mensaje
        const message = `Hello, I would like to order: ${product}. \nHola, me gustaría ordenar: ${product}.`;
        
        // Encode message for URL / Codificar mensaje para URL
        const encodedMessage = encodeURIComponent(message);
        
        // Build WhatsApp URL / Construir URL de WhatsApp
        const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
        
        // Open in new tab / Abrir en nueva pestaña
        window.open(waUrl, '_blank');
      }
    });
  });

  /* 
    ----------------------------------------
    3. Smooth Scroll
    ----------------------------------------
  */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close menus
        if(navList.classList.contains('active')) toggleMenu();
      }
    });
  });

  /* 
    ----------------------------------------
    4. Newsletter Form
    ----------------------------------------
  */
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing! / ¡Gracias por suscribirte!');
      newsletterForm.reset();
    });
  }

  /* 
    ----------------------------------------
    5. Read More Toggle / Leer Más
    ----------------------------------------
  */
  const readMoreBtn = document.getElementById('read-more-btn');
  const moreHistory = document.getElementById('more-history');

  if (readMoreBtn && moreHistory) {
    readMoreBtn.addEventListener('click', () => {
      const isHidden = moreHistory.classList.contains('hidden');
      if (isHidden) {
        moreHistory.classList.remove('hidden');
        readMoreBtn.textContent = 'Leer Menos';
      } else {
        moreHistory.classList.add('hidden');
        readMoreBtn.textContent = 'Leer Nuestra Historia Completa';
      }
    });
  }

});
