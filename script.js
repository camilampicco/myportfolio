// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('scripts.js loaded');
  });

  
document.addEventListener('DOMContentLoaded', () => {

    /*** 1️⃣ KPIs y Pills que se iluminan al entrar en la vista ***/
    const interactiveElements = document.querySelectorAll('.kpi, .pill');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.5 });
  
    interactiveElements.forEach(el => observer.observe(el));
  
    /*** 2️⃣ Microinteracción hover en Pills ***/
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-2px) scale(1.05)';
        el.style.boxShadow = '0 6px 18px rgba(15,118,110,0.15)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
        el.style.boxShadow = '';
      });
    });
  
    /*** 3️⃣ Acordeón para timeline o tareas ***/
    const tItems = document.querySelectorAll('.t-item');
    tItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });
  
    /*** 4️⃣ Hover dinámico en imágenes ***/
    const images = document.querySelectorAll('.large-img, .styled-img, .small-img');
    images.forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.03)';
        img.style.boxShadow = '0 12px 28px rgba(15,118,110,0.2)';
      });
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
      });
    });
  
    /*** 5️⃣ Tooltips dinámicos para KPIs o Pills ***/
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', e => {
        const tooltipText = el.getAttribute('data-tooltip');
        if (!tooltipText) return;
  
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = tooltipText;
        document.body.appendChild(tooltip);
  
        const rect = el.getBoundingClientRect();
        tooltip.style.top = rect.top - 35 + window.scrollY + 'px';
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
      });
  
      el.addEventListener('mouseleave', () => {
        document.querySelectorAll('.tooltip').forEach(t => t.remove());
      });
    });
  
    /*** 6️⃣ Scroll progress bar ***/
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      document.documentElement.style.setProperty('--scroll', scrollPercent + '%');
    });
  
  });
  