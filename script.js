// Manejo del formulario de contacto con Formspree - VERSIÓN CORREGIDA
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const confirmationModal = document.getElementById('confirmationModal');
  const closeModalSpan = document.querySelector('.close-modal');
  const cancelBtn = document.getElementById('cancelBtn');
  
  // Manejar envío del formulario
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Validación básica
      const nombre = contactForm.name.value.trim();
      const correo = contactForm.email.value.trim();
      const asunto = contactForm.subject.value.trim();
      const mensaje = contactForm.message.value.trim();
      
      if (!nombre || !correo || !asunto || !mensaje) {
        showError('Por favor complete todos los campos obligatorios.');
        return;
      }
      
      // Validar formato de correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo)) {
        showError('Por favor ingrese un correo electrónico válido.');
        return;
      }
      
      // Mostrar modal de confirmación
      if (confirmationModal) {
        confirmationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
  }
  
  // Manejar envío real después de confirmación
  document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Mostrar modal y luego enviar
    if (confirmationModal) {
      confirmationModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      
      // Enviar después de confirmación visual
      setTimeout(() => {
        sendFormToFormspree();
      }, 1000);
    } else {
      sendFormToFormspree();
    }
  });
  
  // Función para enviar formulario a Formspree
  async function sendFormToFormspree() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    try {
      // Deshabilitar botón
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitButton.disabled = true;
      
      // Preparar datos para Formspree
      const formData = new FormData(contactForm);
      
      // Log para depuración
      console.log('Enviando formulario a Formspree:');
      console.log('Endpoint:', 'https://formspree.io/f/mrekappr');
      console.log('Datos:', Object.fromEntries(formData));
      
      // Enviar a Formspree
      const response = await fetch('https://formspree.io/f/mrekappr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      console.log('Respuesta de Formspree:', response.status, response.statusText);
      
      if (response.ok) {
        // Éxito: cerrar modal y mostrar mensaje
        if (confirmationModal) {
          confirmationModal.style.display = 'none';
        }
        
        // Mostrar mensaje de éxito
        showSuccessMessage();
        
        // Redirigir para mostrar parámetro success en URL
        setTimeout(() => {
          window.location.href = window.location.pathname + '?success=true#contacto';
        }, 2000);
        
      } else {
        // Error de Formspree
        const errorData = await response.text();
        console.error('Error de Formspree:', errorData);
        throw new Error(`Formspree responded with status: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      
      // Mostrar error específico
      let errorMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.';
      
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Error de conexión. Por favor, verifica tu conexión a internet e inténtalo de nuevo.';
      } else if (error.message.includes('429')) {
        errorMessage = 'Demasiados intentos de envío. Por favor, espera unos minutos e inténtalo de nuevo.';
      } else if (error.message.includes('Each email address')) {
        errorMessage = 'Error de configuración: correo duplicado en los campos. Por favor, contacta al administrador.';
      }
      
      showError(errorMessage);
      
      // Restaurar botón
      if (submitButton) {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }
      
      // Cerrar modal si está abierto
      if (confirmationModal) {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  }
  
  // Mostrar mensaje de error
  function showError(message) {
    alert(message);
  }
  
  // Mostrar mensaje de éxito
  function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <h3>¡Mensaje Enviado Exitosamente!</h3>
      <p>Tu mensaje ha sido enviado correctamente a través de Formspree.</p>
      <p>Recibirás una copia en tu correo electrónico.</p>
      <div class="modal-info" style="background: rgba(16, 185, 129, 0.1); margin-top: 16px; padding: 12px; border-radius: 8px;">
        <p><i class="fas fa-envelope"></i> <strong>Destinatario:</strong> 181591@upslp.edu.mx</p>
        <p><i class="fas fa-link"></i> <strong>Endpoint:</strong> formspree.io/f/mrekappr</p>
        <p><i class="fas fa-check"></i> <strong>Estado:</strong> Envío confirmado</p>
      </div>
    `;
    
    // Insertar después del formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.style.display = 'none';
      contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
    }
  }
  
  // Cerrar modal
  function closeModal() {
    if (confirmationModal) {
      confirmationModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
  
  // Event listeners para cerrar modal
  if (closeModalSpan) {
    closeModalSpan.addEventListener('click', closeModal);
  }
  
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal);
  }
  
  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener('click', function(e) {
    if (e.target === confirmationModal) {
      closeModal();
    }
  });
  
  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && confirmationModal.style.display === 'block') {
      closeModal();
    }
  });
  
  // Suavizar desplazamiento para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Efecto hover en tarjetas
  const cards = document.querySelectorAll('.intro-card, .profile-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Animación de habilidades al cargar
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      tag.style.opacity = '1';
      tag.style.transform = 'translateY(0)';
    }, 100 + index * 50);
  });
  
  // Manejar parámetros de URL después del envío de Formspree
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('success')) {
    // Mostrar mensaje de éxito si viene de Formspree
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <h3>¡Mensaje Enviado Exitosamente!</h3>
      <p>Tu mensaje ha sido recibido a través de Formspree y será respondido pronto.</p>
      <div class="modal-info" style="background: rgba(16, 185, 129, 0.1); margin-top: 16px; padding: 12px; border-radius: 8px;">
        <p><i class="fas fa-link"></i> <strong>Endpoint usado:</strong> formspree.io/f/mrekappr</p>
        <p><i class="fas fa-check"></i> <strong>Estado:</strong> Formulario procesado correctamente</p>
      </div>
    `;
    
    // Insertar después del formulario
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      const contactForm = contactSection.querySelector('form');
      if (contactForm) {
        contactForm.style.display = 'none';
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
      }
    }
    
    // Limpiar URL después de mostrar mensaje
    setTimeout(() => {
      window.history.replaceState({}, document.title, window.location.pathname + '#contacto');
    }, 3000);
  }
});