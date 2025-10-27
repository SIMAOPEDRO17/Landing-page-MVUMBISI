// script.js 
(function(){
  'use strict';

  // Translations dictionary (pt,en,fr,es,zh)
  const translations = {
    pt: { title:"MVUMBISI TECH ACADEMY", slogan:"“Conquistamos com excelência, superamos com força e vencemos pelo trabalho.”", btn_servicos:"Conhecer Serviços", btn_contact:"Contacte-nos", tag_academy:"Academia • Consultoria • Assessoria", tag_remote:"Atendemos Freelancers & Remoto", about_title:"Sobre Nós", about_text:"A MVUMBISI TECH ACADEMY (Academia Tecnológica dos Conquistadores) combina consultoria, assessoria e formação profissional em TI e Supply Chain, transformando desordem tecnológica em eficiência internacional.", services_title:"Serviços", svc_web:"Desenvolvimento Web", svc_web_text:"Sites institucionais, Landing Pages, E‑commerce e Sistemas de Gestão (ERP).", svc_infra:"Infraestrutura & Suporte", svc_infra_text:"Redes, servidores, sistemas operativos, bases de dados e reparação de equipamentos.", svc_consult:"Consultoria & Assessoria", svc_consult_text:"Análise, planeamento, implementação e acompanhamento para domínio tecnológico.", svc_training:"Formação & Capacitação", svc_training_text:"Excel, Primavera, Gestão de Stock (FIFO, JIT), Picking & Packing, Inventário e Armazenagem.", svc_sc:"Cadeia de Suprimento", svc_sc_text:"Planeamento e otimização dos fluxos de materiais, informação e recursos na cadeia logística.", svc_remote:"Freelancers & Remoto", svc_remote_text:"Atendimento a freelancers e trabalhos remotos — contratamos e alavancamos talento remoto global.", training_title:"Formação / Academia", training_text:"Cursos profissionais: Excel (níveis), Primavera, Formação em Supply Chain, Técnicas de Picking & Packing, FIFO, JIT, inventário e organização de armazéns. Capacitação técnica para equipas empresariais.", projects_title:"Projectos", projects_text:"Apresentamos projectos e casos de estudo que demonstram a nossa capacidade de transformar operações e melhorar performance. (Atualize com exemplos e imagens quando disponíveis.)", remote_title:"Freelancers & Trabalho Remoto", remote_text:"Apoiamos freelancers e equipas remotas com integração em projetos, gestão de entregas e pagamentos — trabalhamos com talentos locais e globais em regimes flexíveis.", partners_title:"Parceiros & Colaborações", partners_text:"A MVUMBISI TECH ACADEMY está aberta a parcerias estratégicas com empresas, instituições e profissionais que partilham a visão de inovação e excelência. Proponha uma parceria através do formulário de contacto.", contact_title:"Contacto", ph_name:"Nome", ph_email:"Email", ph_message:"Mensagem", send_email:"Enviar via E-mail", send_wa:"Enviar via WhatsApp", reset_btn:"Limpar", wa_btn:"Contactar via WhatsApp", legal:"Atendemos empresas, freelancers e trabalhos remotos. © MVUMBISI TECH ACADEMY" },
    en: { title:"MVUMBISI TECH ACADEMY", slogan:"“We conquer with excellence, overpower with strength and win through work.”", btn_servicos:"Explore Services", btn_contact:"Contact Us", tag_academy:"Academy • Consultancy • Advisory", tag_remote:"We serve Freelancers & Remote", about_title:"About Us", about_text:"MVUMBISI TECH ACADEMY (Technological Academy of Conquerors) combines consultancy, hands-on support and professional training in IT and Supply Chain, transforming technological disorder into efficient systems.", services_title:"Services", svc_web:"Web Development", svc_web_text:"Corporate sites, Landing Pages, E‑commerce and Management Systems (ERP).", svc_infra:"Infrastructure & Support", svc_infra_text:"Networks, servers, operating systems, databases and equipment repair.", svc_consult:"Consulting & Advisory", svc_consult_text:"Analysis, planning, implementation and follow-up for technological dominance.", svc_training:"Training & Capacity Building", svc_training_text:"Excel, Primavera, Stock Management (FIFO, JIT), Picking & Packing, Inventory and Warehousing.", svc_sc:"Supply Chain", svc_sc_text:"Planning and optimization of material, information and resource flows in the logistics chain.", svc_remote:"Freelancers & Remote", svc_remote_text:"Support for freelancers and remote work — hiring and enabling global remote talent.", training_title:"Training / Academy", training_text:"Professional courses: Excel (levels), Primavera, Supply Chain training, Picking & Packing, FIFO, JIT, inventory and warehousing. Technical upskilling for teams.", projects_title:"Projects", projects_text:"We showcase projects and case studies that demonstrate our capacity to transform operations and improve performance. (Update with examples and images when available.)", remote_title:"Freelancers & Remote Work", remote_text:"We support freelancers and remote teams with project integration, delivery management and payments — working with local and global talent on flexible terms.", partners_title:"Partners & Collaborations", partners_text:"MVUMBISI TECH ACADEMY is open to strategic partnerships with companies, institutions and professionals who share a vision of innovation and excellence. Propose a partnership via the contact form.", contact_title:"Contact", ph_name:"Name", ph_email:"Email", ph_message:"Message", send_email:"Send via E-mail", send_wa:"Send via WhatsApp", reset_btn:"Clear", wa_btn:"Contact via WhatsApp", legal:"We serve companies, freelancers and remote work. © MVUMBISI TECH ACADEMY" },
    fr: { title:"MVUMBISI TECH ACADEMY", slogan:"« Nous conquérons avec excellence, surpassons par la force et gagnons par le travail. »", btn_servicos:"Découvrir les services", btn_contact:"Contactez-nous", tag_academy:"Académie • Conseil • Assistance", tag_remote:"Nous servons les freelances & le télétravail", about_title:"À propos", about_text:"MVUMBISI TECH ACADEMY (Académie technologique des conquérants) combine conseil, assistance opérationnelle et formation professionnelle en TI et Supply Chain.", services_title:"Services", svc_web:"Développement Web", svc_web_text:"Sites institutionnels, pages d'atterrissage, E‑commerce et systèmes de gestion (ERP).", svc_infra:"Infrastructure & Support", svc_infra_text:"Réseaux, serveurs, systèmes d'exploitation, bases de données et réparation d'équipements.", svc_consult:"Conseil & Assistance", svc_consult_text:"Analyse, planification, mise en œuvre et suivi pour la maîtrise technologique.", svc_training:"Formation & Renforcement", svc_training_text:"Excel, Primavera, gestion des stocks (FIFO, JIT), Picking & Packing, inventaire et entreposage.", svc_sc:"Supply Chain", svc_sc_text:"Planification et optimisation des flux de matériaux, d'informations et de ressources dans la chaîne logistique.", svc_remote:"Freelances & Télétravail", svc_remote_text:"Soutien aux freelances et au travail à distance — embauche et valorisation des talents à distance.", training_title:"Formation / Académie", training_text:"Cours professionnels : Excel (niveaux), Primavera, formation en Supply Chain, Picking & Packing, FIFO, JIT, inventaire et stockage.", projects_title:"Projets", projects_text:"Nous présentons des projets et études de cas qui démontrent notre capacité à transformer les opérations et améliorer la performance. (Mettez à jour avec des exemples et images.)", remote_title:"Freelances & Télétravail", remote_text:"Nous soutenons les freelances et les équipes à distance avec l'intégration de projets, la gestion des livraisons et des paiements.", partners_title:"Partenaires & Collaborations", partners_text:"MVUMBISI TECH ACADEMY est ouverte aux partenariats stratégiques avec des entreprises, institutions et professionnels partageant une vision d'innovation et d'excellence.", contact_title:"Contact", ph_name:"Nom", ph_email:"Email", ph_message:"Message", send_email:"Envoyer via E-mail", send_wa:"Envoyer via WhatsApp", reset_btn:"Effacer", wa_btn:"Contact via WhatsApp", legal:"Nous servons les entreprises, freelances et le télétravail. © MVUMBISI TECH ACADEMY" },
    es: { title:"MVUMBISI TECH ACADEMY", slogan:"“Conquistamos con excelencia, superamos con fuerza y vencemos por el trabajo.”", btn_servicos:"Conocer Servicios", btn_contact:"Contáctanos", tag_academy:"Academia • Consultoría • Asesoría", tag_remote:"Atendemos Freelancers & Remoto", about_title:"Sobre Nosotros", about_text:"MVUMBISI TECH ACADEMY (Academia Tecnológica de los Conquistadores) combina consultoría, apoyo operativo y formación profesional en TI y Supply Chain.", services_title:"Servicios", svc_web:"Desarrollo Web", svc_web_text:"Sitios institucionales, Landing Pages, E‑commerce y sistemas de gestión (ERP).", svc_infra:"Infraestructura & Soporte", svc_infra_text:"Redes, servidores, sistemas operativos, bases de datos y reparación de equipos.", svc_consult:"Consultoría & Asesoría", svc_consult_text:"Análisis, planificación, implementación y seguimiento para dominio tecnológico.", svc_training:"Formación & Capacitación", svc_training_text:"Excel, Primavera, Gestión de Stock (FIFO, JIT), Picking & Packing, Inventario y Almacenamiento.", svc_sc:"Supply Chain", svc_sc_text:"Planificación y optimización de los flujos de materiales, información y recursos en la cadena logística.", svc_remote:"Freelancers & Remoto", svc_remote_text:"Apoyo a freelancers y trabajo remoto — contratación y potenciación de talento remoto global.", training_title:"Formación / Academia", training_text:"Cursos profesionales: Excel (niveles), Primavera, formación en Supply Chain, Picking & Packing, FIFO, JIT, inventario y almacenamiento.", projects_title:"Proyectos", projects_text:"Presentamos proyectos y estudios de caso que demuestran nuestra capacidad para transformar operaciones y mejorar el rendimiento. (Actualiza con ejemplos e imágenes.)", remote_title:"Freelancers & Trabajo Remoto", remote_text:"Apoyamos a freelancers y equipos remotos con integración en proyectos, gestión de entregas y pagos.", partners_title:"Socios & Colaborações", partners_text:"MVUMBISI TECH ACADEMY está abierta a asociaciones estratégicas com empresas, instituciones y profesionales que compartan una visión de innovación y excelencia.", contact_title:"Contacto", ph_name:"Nombre", ph_email:"Correo", ph_message:"Mensaje", send_email:"Enviar via E-mail", send_wa:"Enviar via WhatsApp", reset_btn:"Limpiar", wa_btn:"Contactar via WhatsApp", legal:"Atendemos empresas, freelancers y trabajo remoto. © MVUMBISI TECH ACADEMY" },
    zh: { title:"MVUMBISI 技术学院", slogan:"“以卓越征服，以力量超越，以劳动取胜。”", btn_servicos:"了解服务", btn_contact:"联系我们", tag_academy:"学院 • 咨询 • 顾问", tag_remote:"支持自由职业者与远程工作", about_title:"关于我们", about_text:"MVUMBISI 技术学院（征服者技术学院）结合咨询、执行支持与IT及供应链领域的职业培训。", services_title:"服务", svc_web:"网页开发", svc_web_text:"企业网站、着陆页、电子商务与管理系统（ERP）。", svc_infra:"基础设施与支持", svc_infra_text:"网络、服务器、操作系统、数据库与设备维修。", svc_consult:"咨询与顾问", svc_consult_text:"分析、规划、实施与跟进，助力掌控技术领域。", svc_training:"培训与能力建设", svc_training_text:"Excel、Primavera、库存管理（FIFO、JIT）、拣货与打包、盘点与仓储。", svc_sc:"供应链管理", svc_sc_text:"规划与优化物流链中物料、信息与资源的流动。", svc_remote:"自由职业者与远程工作", svc_remote_text:"支持自由职业者与远程团队，融入项目、交付管理与付款流程。", training_title:"培训 / 学院", training_text:"专业课程：Excel（等级）、Primavera、供应链培训、拣货与打包、FIFO、JIT、盘点与仓储。", projects_title:"项目", projects_text:"我们展示能够证明我们改造运营并提升绩效的项目与案例研究。（可在有样例与图片时更新。）", remote_title:"自由职业者与远程工作", remote_text:"我们支持自由职业者和远程团队，提供项目整合、交付管理与付款支持。", partners_title:"合作伙伴与协作", partners_text:"MVUMBISI 技术学院欢迎与致力于创新与卓越的公司、机构和专业人士建立战略合作。", contact_title:"联系", ph_name:"姓名", ph_email:"电子邮件", ph_message:"消息", send_email:"通过电子邮件发送", send_wa:"通过 WhatsApp 发送", reset_btn:"清除", wa_btn:"通过 WhatsApp 联系", legal:"我们为企业、自由职业者和远程工作提供服务。© MVUMBISI TECH ACADEMY" }
  };

  // Apply translations to page
  function applyTranslations(lang){
    const dict = translations[lang] || translations.pt;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(key && dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(key && dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    document.documentElement.lang = (lang === 'zh' ? 'zh' : lang);
    localStorage.setItem('mv_lang', lang);
  }

  // Init language selector
  const langSelect = document.getElementById('langSelect');
  langSelect.addEventListener('change', (e)=> applyTranslations(e.target.value));
  const initLang = localStorage.getItem('mv_lang') || 'pt';
  langSelect.value = initLang;
  applyTranslations(initLang);

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuToggle');
  const mainNav = document.querySelector('.main-nav');
  if(menuBtn && mainNav){
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      // Update aria-expanded and button text
      const isExpanded = mainNav.classList.contains('active');
      menuBtn.setAttribute('aria-expanded', isExpanded);
      menuBtn.textContent = isExpanded ? '✕' : '☰';
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
      if(!menuBtn.contains(e.target) && !mainNav.contains(e.target) && mainNav.classList.contains('active')){
        mainNav.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
      }
    });

    // Close menu after clicking a link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('[data-scroll]').forEach(link=>{
    link.addEventListener('click', function(e){
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if(target){
        const top = target.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.site-header').offsetHeight;
        window.scrollTo({top, behavior:'smooth'});
      }
    });
  });


  // Sticky header shadow on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 20) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  });


  // Hero image fade-in
  const heroImg = document.querySelector('.hero-image');
  if(heroImg){
    heroImg.addEventListener('load', ()=>{ heroImg.style.opacity = '1'; heroImg.style.transform = 'translateY(0)'; });
    if(heroImg.complete){ heroImg.style.opacity='1'; heroImg.style.transform='translateY(0)'; }
  }


  // Reveal on scroll with IntersectionObserver
  const reveals = document.querySelectorAll('.fade-slide');
  const io = new IntersectionObserver((entries)=>{ 
    entries.forEach(entry=>{ 
      if(entry.isIntersecting) entry.target.classList.add('visible'); 
    }); 
  },{threshold:0.12});
  reveals.forEach(r=> io.observe(r));

  // Observe individual service cards so each animates when scrolled into view
  const serviceCards = document.querySelectorAll('.services-grid .card');
  if(serviceCards && serviceCards.length){
    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          // stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    serviceCards.forEach(c => cardObserver.observe(c));
  }

  
  // Contact: mailto and whatsapp send
  const emailBtn = document.getElementById('emailSendBtn');
  const waBtn = document.getElementById('waSendBtn');
  function buildMailto(name,email,message){
    const subject = encodeURIComponent('Contacto MVUMBISI - ' + (name||'Novo Contato'));
    const body = encodeURIComponent('Nome: ' + (name||'') + '\nEmail: ' + (email||'') + '\n\nMensagem:\n' + (message||''));
    return 'mailto:sipevima17@hotmail.com?subject=' + subject + '&body=' + body;
  }
  function buildWaLink(name,email,message){
    const text = encodeURIComponent('Olá MVUMBISI TECH ACADEMY, tenho um contacto. Nome: ' + (name||'') + ' Email: ' + (email||'') + ' Mensagem: ' + (message||''));
    return 'https://wa.me/244937663075?text=' + text;
  }
  if(emailBtn){
    emailBtn.addEventListener('click', ()=>{
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name||!email||!message){ alert('Por favor preencha todos os campos.'); return; }
      window.location.href = buildMailto(name,email,message);
    });
  }
  if(waBtn){
    waBtn.addEventListener('click', ()=>{
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name||!email||!message){ alert('Por favor preencha todos os campos.'); return; }
      window.open(buildWaLink(name,email,message), '_blank');
    });
  }

})();