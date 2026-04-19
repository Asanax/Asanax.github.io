/*==================== TR - EN Dil Çeviri Sistemi ====================*/
const translations = {
    tr: {
        nav_home: "Ana Sayfa", nav_about: "Hakkımda", nav_skills: "Yetenekler", nav_exp: "Deneyim", nav_eba: "eBA Süreçleri", nav_ref: "Referanslar", nav_extra: "Ek Bilgiler",
        home_greet: "Merhaba, Ben", home_role: "Bir ",
        home_desc: "15’ten fazla kurumsal firmada dijitalleşme ve sistem entegrasyonu projelerini tamamlamış bir Yazılım Geliştiriciyim. C#, T-SQL ve API entegrasyonları konularında ileri düzey yetkinlik ile karmaşık iş akışlarını optimize ederek operasyonel verimlilik sağlıyorum.",
        btn_cv: "CV İndir",
        about_title: "Hakkımda", about_subtitle: "Süreç & Dijitalleşme", about_expert: "Uzmanı",
        about_desc: "Kariyerim boyunca iş akış tasarımı ve optimizasyonu ile kurumsal dijital dönüşüm süreçlerinde operasyonel verimlilik sağlamaya odaklandım. Karmaşık iş süreçlerinin eBA üzerinde modellenmesi, manuel iş yükünü azaltan dijital formların geliştirilmesi ve eBA ile SAP arasında dinamik veri aktarımı gibi kritik görevleri üstlendim. Ayrıca kurumsal firmalara yönetim ve akış sistemleri alanında danışmanlık hizmeti veriyorum.",
        skills_title1: "Teknik", skills_title2: "Yetkinlikler",
        skills_prog: "Programlama & Veritabanı", skills_proc: "Süreç Yönetimi & Araçlar",
        lvl_advanced: "İleri Düzey", lvl_expert: "Uzman", lvl_basic: "Temel Düzey", skill_flow: "İş Akış Tasarımı",
        exp_title1: "Profesyonel", exp_title2: "Tecrübe",
        exp_role: " | eBA Geliştiricisi", exp_date: "(Şubat 2022 – Eylül 2024)",
        exp_desc: "İş akış tasarımı ve optimizasyonu ile kurumsal dijital dönüşüm süreçlerinde operasyonel verimlilik ve sistem entegrasyonu sağlandı.",
        exp_li1: "Karmaşık iş süreçlerinin eBA üzerinde modellenmesi, manuel iş yükünü azaltan dijital formlar ve akışların geliştirilmesi.",
        exp_li2: "eBA ile SAP arasında dinamik veri aktarımı ve entegrasyon sağlanması.",
        exp_li3: "Kurumlara yönetim ve akış sistemleri tarafında danışmanlık hizmeti verilmesi.",
        exp_li4: "Uygulama içi kullanıcı dokümanlarının oluşturulması.",
        exp_skills: "Kullanılan Yetkinlikler", tag_flow: "İş Akış Tasarımı", tag_consult: "Dijital Dönüşüm Danışmanlığı",
        eba_title1: "Geliştirilen eBA", eba_title2: "Süreçleri", eba_clear: "Aramayı Temizle", search_placeholder: "Firma veya süreç ara (Örn: Satınalma...)",
        tag_corp: "Kurumsal Entegrasyon", tag_purchase: "Satınalma", tag_law: "Hukuk & Satınalma", tag_comprehensive: "Kapsamlı Süreç Ağı", tag_medical: "Medikal Süreçler", tag_bank: "Banka İçi Operasyon", tag_production: "Üretim & Lojistik", tag_factory: "Üretim Operasyonları", tag_various: "Çeşitli Çözümler",
        other_firms: "Diğer Kurumsal Firmalar", ref_title1: "(eBA) Çalıştığım", ref_title2: "Firmalar",
        ext_title1: "Ek", ext_title2: "Bilgiler", ext_uni_title: "Üniversite Projeleri", ext_uni_p: "Personel Bordro Takip Programı", ext_uni_desc: "(Tez projesi olarak geliştirilmiştir. Veritabanı mimarisi ve çalışan maaş, bordro takibi süreçlerini kapsar.)",
        ext_doc_btn: "Dokümanı İndir",
        ext_free_title: "Freelancer Proje", ext_free_desc: "Marka için modern, duyarlı ve performanslı Front-End websitesi geliştirilmesi.", ext_free_btn: "Siteyi Gör",
        ext_hs_title: "eBA Nedir ?", ext_hs_p: "Süreç ve Belge Yönetimi", ext_hs_desc: "eBA, işletmelerin iş süreçlerini dijitalleştiren, operasyonel verimliliği maksimize eden kapsamlı bir platformdur.", ext_det_btn: "Detayı Gör", foot_copy: "Copyright ©", foot_rights: "Tüm Hakları Saklıdır.",
        
        proc_contract_transfer: "Sözleşme Aktarım Süreci", proc_special_mail: "Özel Mail Süreci", proc_leave_report: "İzin Rapor Süreci", proc_e_invoice: "e-Fatura Onay Süreci", proc_invoice_pre: "Fatura Ön Onay Süreci", proc_purchase: "Satınalma Süreci", proc_condition: "Kondisyon Onay Süreci", proc_credit_limit: "Müşteri Kredi Limit Onay Süreci", proc_budget: "Bütçe Kalemleri Süreci", proc_waybill: "İrsaliye Süreci", proc_contract: "Sözleşme Süreci", proc_title_deed: "Tapu Vekalet Süreci", proc_agency: "Acente DCF Talep Süreci", proc_dealer_term: "Bayilik Fesih Süreci", proc_fleet_card: "Filo Kartlı Satış BTM Süreci", proc_return_check: "İade Çek Süreci", proc_expense: "Masraf Bildirim Süreci", proc_engineering: "Mühendislik İş İstek Süreci", proc_customer_limit: "Müşteri Limit Süreci", proc_poa: "Opet Vekaletname Süreci", proc_reference: "Referans Mektubu Süreci", proc_contract_mng: "Sözleşme Yönetimi Süreci", proc_spot_sales: "Spot Satış Talep Süreci", proc_doubtful: "Şüpheli Alacak Süreci", proc_appreciation: "Takdir Talep Süreci", proc_meeting: "Toplantı Bildirim Süreci", proc_fuel: "Yakıt Dolum Kartı Süreci", proc_donation: "Bağış Onay Süreci", proc_due_diligence: "Durum Tespit Süreci", proc_internal_material: "İç Kullanıma Yönelik Materyal Onay Formu", proc_promo_material: "Tanıtım Malzemesi Medikal/Ruhsat Onay Formu", proc_contract_remind: "Sözleşme Hatırlatma Süreci", proc_sponsor: "Sponsorluk Onay Süreci", proc_gas_limit: "Benzin Ve Temsil Limitleri Süreci", proc_unit_price: "Birim Fiyatlı Satın Alma Süreci", proc_expense_notif: "Gider Bildirimi Süreci", proc_spending: "Harcama Beyan Süreci", proc_limited_exp: "Limitlli Giderler Süreci", proc_invoice_app: "Fatura Onay Süreci", proc_expense_dec: "Masraf Beyan Süreci", proc_family: "Aile Durum Bildirimi Süreci", proc_transporter: "Nakliyeci Teklif Değerlendirme Süreci", proc_prod_order: "Üretim İş Emri Süreci", proc_stock_card: "Stok Kartı Süreci", proc_order_form: "Sipariş Formu Süreci", proc_shipment: "Sevkiyat Formu Süreci", proc_mold: "Kalıp - Aparat - Fikstür Talep Süreci", proc_apparatus: "Aparat Teslim Süreci", proc_exam: "Sınav Soruları Süreci", proc_hr_entry: "Personel Talep / İşe Giriş-Çıkış Süreci", proc_supplier: "Kritik Tedarikçi Belirleme Süreci", proc_improvement: "Süreç İyileştirme Çalışmaları", proc_kvkk: "KVKK Envanter Süreci", proc_offer_ws: "Teklif Süreci Webservis Düzenlenmesi"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_exp: "Experience", nav_eba: "eBA Processes", nav_ref: "References", nav_extra: "Extra Info",
        home_greet: "Hello, I'm", home_role: "A ",
        home_desc: "I am a Software Developer who has completed digital transformation and system integration projects in over 15 corporate companies. I provide operational efficiency by optimizing complex workflows with my advanced expertise in C#, T-SQL, and API integrations.",
        btn_cv: "Download CV",
        about_title: "About Me", about_subtitle: "Process & Digitalization", about_expert: "Expert",
        about_desc: "Throughout my career, I focused on providing operational efficiency in corporate digital transformation processes with workflow design and optimization. I took on critical tasks such as modeling complex business processes on eBA, developing digital forms that reduce manual workload, and providing dynamic data transfer between eBA and SAP. I also provide consultancy services in management and flow systems.",
        skills_title1: "Technical", skills_title2: "Skills",
        skills_prog: "Programming & Database", skills_proc: "Process Management & Tools",
        lvl_advanced: "Advanced", lvl_expert: "Expert", lvl_basic: "Basic Level", skill_flow: "Workflow Design",
        exp_title1: "Professional", exp_title2: "Experience",
        exp_role: " | eBA Developer", exp_date: "(February 2022 – September 2024)",
        exp_desc: "Operational efficiency and system integration were provided in corporate digital transformation processes with workflow design and optimization.",
        exp_li1: "Modeling complex business processes on eBA, developing digital forms and flows that reduce manual workload.",
        exp_li2: "Providing dynamic data transfer and integration between eBA and SAP.",
        exp_li3: "Providing consultancy services to institutions regarding management and flow systems.",
        exp_li4: "Creating in-app user documentation.",
        exp_skills: "Skills Used", tag_flow: "Workflow Design", tag_consult: "Digital Transformation Consulting",
        eba_title1: "Developed eBA", eba_title2: "Processes", eba_clear: "Clear Search", search_placeholder: "Search company or process (e.g. Purchase...)",
        tag_corp: "Corporate Integration", tag_purchase: "Purchasing", tag_law: "Legal & Purchasing", tag_comprehensive: "Comprehensive Network", tag_medical: "Medical Processes", tag_bank: "Bank Operations", tag_production: "Production & Logistics", tag_factory: "Factory Operations", tag_various: "Various Solutions",
        other_firms: "Other Corporate Firms", ref_title1: "Partner", ref_title2: "Companies",
        ext_title1: "Extra", ext_title2: "Information", ext_uni_title: "University Projects", ext_uni_p: "Personnel Payroll Tracking Program", ext_uni_desc: "(Developed as a graduation thesis. Includes database architecture and employee salary/payroll tracking processes.)",
        ext_doc_btn: "Download Doc",
        ext_free_title: "Freelance Project", ext_free_desc: "Development of a modern, responsive, and performant Front-End website for the brand.", ext_free_btn: "Visit Site",
        ext_hs_title: "What is eBA ?", ext_hs_p: "Process and Document Management", ext_hs_desc: "eBA is a comprehensive platform that digitalizes business processes and maximizes operational efficiency.", ext_det_btn: "View Details", foot_copy: "Copyright ©", foot_rights: "All Rights Reserved.",
        
        proc_contract_transfer: "Contract Transfer Process", proc_special_mail: "Special Mail Process", proc_leave_report: "Leave Report Process", proc_e_invoice: "e-Invoice Approval Process", proc_invoice_pre: "Invoice Pre-Approval Process", proc_purchase: "Purchasing Process", proc_condition: "Condition Approval Process", proc_credit_limit: "Customer Credit Limit Approval Process", proc_budget: "Budget Items Process", proc_waybill: "Waybill Process", proc_contract: "Contract Process", proc_title_deed: "Title Deed POA Process", proc_agency: "Agency DCF Request Process", proc_dealer_term: "Dealership Termination Process", proc_fleet_card: "Fleet Card Sales BTM Process", proc_return_check: "Return Check Process", proc_expense: "Expense Notification Process", proc_engineering: "Engineering Job Request Process", proc_customer_limit: "Customer Limit Process", proc_poa: "Opet Power of Attorney Process", proc_reference: "Reference Letter Process", proc_contract_mng: "Contract Management Process", proc_spot_sales: "Spot Sales Request Process", proc_doubtful: "Doubtful Receivables Process", proc_appreciation: "Appreciation Request Process", proc_meeting: "Meeting Notification Process", proc_fuel: "Fuel Filling Card Process", proc_donation: "Donation Approval Process", proc_due_diligence: "Due Diligence Process", proc_internal_material: "Internal Material Approval Form", proc_promo_material: "Promotional Material Medical Approval", proc_contract_remind: "Contract Reminder Process", proc_sponsor: "Sponsorship Approval Process", proc_gas_limit: "Gas and Rep Limit Process", proc_unit_price: "Unit Price Purchasing Process", proc_expense_notif: "Expense Notification Process", proc_spending: "Spending Declaration Process", proc_limited_exp: "Limited Expenses Process", proc_invoice_app: "Invoice Approval Process", proc_expense_dec: "Expense Declaration Process", proc_family: "Family Status Notification Process", proc_transporter: "Transporter Offer Evaluation Process", proc_prod_order: "Production Work Order Process", proc_stock_card: "Stock Card Process", proc_order_form: "Order Form Process", proc_shipment: "Shipment Form Process", proc_mold: "Mold - Apparatus - Fixture Request Process", proc_apparatus: "Apparatus Delivery Process", proc_exam: "Exam Questions Process", proc_hr_entry: "Personnel Request / Entry-Exit Process", proc_supplier: "Critical Supplier Determination Process", proc_improvement: "Process Improvement Studies", proc_kvkk: "KVKK Inventory Process", proc_offer_ws: "Offer Process Webservice Arrangement"
    }
};

let currentLang = 'tr';
let typedInstance = null; // Typed.js referansı

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Arama Çubuğu Placeholder Çevirisi
    const searchInput = document.getElementById('search-input');
    if(searchInput) {
        searchInput.placeholder = translations[lang]['search_placeholder'];
    }

    // Typed.js (Yazma efekti) yeniden başlatma
    if(typedInstance) {
        typedInstance.destroy();
    }
    const typedStrings = lang === 'tr' 
        ?['eBA Geliştiricisi', 'Süreç Geliştirme Uzmanı', 'Yazılım Geliştirici', 'Dijital Dönüşüm Danışmanı'] 
        :['eBA Developer', 'Process Development Expert', 'Software Developer', 'Digital Transformation Consultant'];
        
    typedInstance = new Typed('.typed-text', {
        strings: typedStrings,
        typeSpeed: 60, backSpeed: 40, backDelay: 1500, loop: true
    });
}

// Dil Değiştirme Butonu
document.getElementById('lang-toggle').addEventListener('click', function() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    this.innerText = currentLang === 'tr' ? 'EN' : 'TR';
    updateLanguage(currentLang);
});

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-row, .company-container, .cards-container, .info-grid', { origin: 'bottom' });
ScrollReveal().reveal('.home-img', { origin: 'right' });
ScrollReveal().reveal('.about-img', { origin: 'left' });

/*==================== Açık/Koyu Tema Geçişi ====================*/
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    this.classList.toggle('bx-toggle-right');
});

/*==================== eBA Processes Filter ====================*/
document.addEventListener('DOMContentLoaded', function() {
    // İlk Dil Yüklemesi
    updateLanguage(currentLang);

    const cards = document.querySelectorAll('.card');
    const searchInput = document.querySelector('.search-input');
    const searchResetButton = document.querySelector('.search-reset-btn');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        cards.forEach(card => {
            const cardText = card.innerText.toLowerCase();
            const cardTags = card.dataset.tags ? card.dataset.tags.toLowerCase() : "";
            if(cardText.includes(searchTerm) || cardTags.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    searchResetButton.addEventListener('click', () => {
        if(searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.focus();
        }
    });

    /*==================== Swiper JS (Firmalar Slider'ı) ====================*/
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});