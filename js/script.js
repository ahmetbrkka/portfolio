// ================================
// NAVIGATION SCROLL EFFECT + LOGO MODE
// ================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update logo mode on scroll
    updateLogoMode();
});

// ================================
// MOBILE MENU TOGGLE (WITH BODY NO-SCROLL)
// ================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const body = document.body;
    
    menu.classList.toggle('active');
    body.classList.toggle('body-no-scroll');
}
// ================================
// PAGE SWITCHING (UPDATED FOR ALL PAGES)
// ================================
function showPage(page) {
    const professionalPage = document.getElementById('professionalPage');
    const blogPage = document.getElementById('blogPage');
    const allProjectsPage = document.getElementById('allProjectsPage');
    const blogPostPage = document.getElementById('blogPostPage');
    
    // Remove active from all pages
    professionalPage.classList.remove('active');
    blogPage.classList.remove('active');
    allProjectsPage.classList.remove('active');
    if (blogPostPage) blogPostPage.classList.remove('active');
    
    // Add active to the target page after a tiny delay
    setTimeout(() => {
        if (page === 'blog') {
            blogPage.classList.add('active');
        } else if (page === 'all-projects') {
            allProjectsPage.classList.add('active');
        } else if (page === 'blog-post') {
            if (blogPostPage) blogPostPage.classList.add('active');
        } else {
            professionalPage.classList.add('active');
        }
        
        // Update logo mode after page switch
        updateLogoMode();
    }, 50);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ================================
// SMOOTH SCROLL TO SECTION (FIXED)
// ================================
function scrollToSection(sectionId) {
    const professionalPage = document.getElementById('professionalPage');
    const currentlyOnProfessional = professionalPage && professionalPage.classList.contains('active');
    
    // If not on professional page, switch to it first
    if (!currentlyOnProfessional) {
        professionalPage.classList.add('active');
        document.getElementById('blogPage').classList.remove('active');
        document.getElementById('allProjectsPage').classList.remove('active');
        const blogPostPage = document.getElementById('blogPostPage');
        if (blogPostPage) blogPostPage.classList.remove('active');
        
        // Update logo after page switch
        updateLogoMode();
    }
    
    // Small delay to ensure page is visible, then scroll to section
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 40;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    }, currentlyOnProfessional ? 0 : 100);
}

// ================================
// BLOG FILTER
// ================================
function filterPosts(category) {
    const posts = document.querySelectorAll('.post-preview');
    const buttons = document.querySelectorAll('.filters button');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// ================================
// BLOG SEARCH
// ================================
function searchPosts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.post-preview');
    
    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// ================================
// LIGHTBOX FUNCTIONALITY
// ================================
let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-item img');

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = galleryImages[index].src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById('lightboxImg').src = galleryImages[currentImageIndex].src;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('lightboxImg').src = galleryImages[currentImageIndex].src;
}

// ================================
// KEYBOARD NAVIGATION FOR LIGHTBOX
// ================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    }
});

// ================================
// SCROLL REVEAL ANIMATIONS + INITIALIZE LOGO MODE ON LOAD (NEW)
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Set initial logo mode
    updateLogoMode();
    // Select all elements that should reveal on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    // Create intersection observer
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class when element enters viewport
                    entry.target.classList.add('visible');
                    // Stop observing this element (animate only once)
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );
    
    // Observe all reveal elements
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});

// ================================
// GO TO BLOG SECTION (FIXED)
// ================================
function goToBlogSection(sectionId) {
    // Switch to blog page
    showPage('blog');
    
    // Wait for page transition, then scroll to section
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 40;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    }, 300);
}
// ================================
// UPDATE LOGO MODE (EMPTY/TEXT)
// ================================
function updateLogoMode() {
    const logo = document.querySelector('.logo');
    const professionalPage = document.getElementById('professionalPage');
    const hero = document.getElementById('hero');
    
    if (!logo || !hero) return;
    
    // Check if we're on the professional page
    const onProfessionalPage = professionalPage && professionalPage.classList.contains('active');
    
    if (onProfessionalPage) {
        // Check scroll position relative to hero
        const heroHeight = hero.offsetHeight;
        const scrollThreshold = heroHeight * 0.6;
        
        if (window.scrollY < scrollThreshold) {
            // Show empty mode (at top of professional page)
            logo.classList.remove('logo-text-mode');
            logo.classList.add('logo-empty-mode');
        } else {
            // Show text mode (scrolled past hero)
            logo.classList.remove('logo-empty-mode');
            logo.classList.add('logo-text-mode');
        }
    } else {
        // On other pages (blog, all projects, post detail), always show text
        logo.classList.remove('logo-empty-mode');
        logo.classList.add('logo-text-mode');
    }
}

// ================================
// OPEN BLOG POST DETAIL
// ================================
function openBlogPost(postId) {
    // Blog post data
    const posts = {
        'post-1': {
            title: 'Analog Bilgisayarlar İle Derin Öğrenme',
            date: 'January 10, 2023',
            content: `
                <p><em>MDB 302 Akademik Sunum Becerileri - Final Makalesi</em></p>
                
                <h2>1. Giriş</h2>
                
                <p>Yapay zeka ve derin öğrenme uygulamalarının oldukça gündemde ve kullanımda olduğu günümüzde, hali hazırda kullanılan yöntemlerin verimliliği ve hızları daha çok tartışılmaya başlandı. Derin öğrenme için kullanılan donanımlar için yakın zamanda ortaya çıkan gelişmeler; şu an kullanılanlar gibi daha genel amaçlı değil de; daha özel amaçlı, yani sadece derin öğrenme için kullanılabilmesi yönünde.</p>
                
                <p>Günümüzde derin öğrenme algoritmaları, kullanılan donanıma göre zaten oldukça verimliler. Dolayısıyla genel olarak yapay zeka alanındaki bir sonraki büyük adım, yazılımsal değil de donanımsal olacağa benziyor.</p>
                
                <p>Peki bir analog bilgisayar nasıl çalışır? Basitçe anlatılacak olursa; 2 sayıyı toplamak için 3 adet kabloya ihtiyacımız var. 2 kablodan toplamak istediğimiz sayıların değeri kadar akım geçiririz. Ardından bu 2 kabloyu 3. bir kabloda birleştirip bu 3. kablodaki akımı ampermetre ile ölçeriz. Bulduğumuz sonuç toplama işleminin cevabı olur.</p>
                
                <p>Bulduğumuz sonucu da bir başka sayıyla çarpmak istiyorsak da 3. kabloya bir direç bağlarız ve direncin uçlarındaki voltajı, voltmetre ile ölçeriz. Bulduğumuz sonuç çarpma işleminin cevabı olmuş olur. Bu toplama işlemini dijital bir bilgisayar yaklaşık 50 transistör ile yapabilir. Çarpma işlemi için ise 1000 transistöre ihtiyaç duyar.</p>
                
                <p>Burada, fark edileceği üzere, analog bilgisayarlarda neredeyse hiçbir zaman kesin değerlere ulaşılamaz. Çünkü girilen değerler, ayrık değil sürekli değerlerdir. Ayrıca dirençlerin veya ölçüm araçlarının her zaman bir hata payları olur. Ancak derin öğrenme uygulamalarında bu durum, bir problem olmaktan çıkabilir.</p>
                
                <p>Bir görüntü işleme algoritması; bir kedi resmine %98 yerine %95 kedidir dese bile, resimdeki şey hala kedidir. Yani donanımdaki hata payları sonucun kesinliğini minimal bir şekilde etkileyecek olsa bile sonucu değiştirmeyecektir. Kısaca analog bilgisayarlar derin öğrenme için biçilmiş kaftan gibi gözüküyorlar.</p>
                
                <h2>2. Araştırmalar ve Çalışmalar</h2>
                
                <p>Derin öğrenme uygulamalarında asıl işlem yükü matris çarpımlarıdır. Bundan dolayı bu uygulamalarda çoğunlukla GPU'lar kullanılır. Bunun nedeni, GPU'ların 3D render'lama ve oyun oynama için tasarlandıklarından, sahip oldukları yüksek paralel işlem güçleridir. CPU'lar ise GPU'lardan çok daha az sayıda çekirdeğe sahiptir. Bundan dolayı GPU'lar gibi çok sayıdaki işlemi paralel olarak yürütemezler.</p>
                
                <p>Tabi ki işlem gücünün yanı sıra, oluşturulacak donanımların verimliliği de çok önemli. Örneğin bir bilgisayarda; işlemciden RAM'e kadar olan veri transferi bus'lar ile sağlanır ve bu mesafenin kısalması, o donanımın hızını önemli ölçüde etkiler. Geleneksel dijital bilgisayarlar için hazırlanan derin ağlar, bu yüzden hafızaya erişimin en az olacağı şekilde tasarlanır.</p>
                
                <p>Analog bilgisayar teknolojisini nöral ağlar için kullanabilmek için çalışan bilim insanları; derin öğrenme algoritmalarını verimli bir şekilde kullanabilmek için, "memristör crossbar array" adlı bir yapıyı kullanmayı mantıklı buluyor. Ancak bunun üzerine yapılan çalışmaların geniş skalalarda olamadığını belirtiyorlar.</p>
                
                <p>Çünkü gerçekten düzgünce çalışabilecek ve programlanabilecek bir "memristör crossbar array" tasarlarken memristörde yapısındaki malzemelerin kullanımını zorlu buluyorlar. Yaptıkları el yazması rakamları tanıma testinde, 89.9% kesinliğe ulaştıklarını ve bir çipe dönüştürülecek olursa 1 watt'ta saniyede 100 trilyon işleme ulaşabilmesinin mümkün olduğunu belirtiyorlar.</p>
                
                <h3>Memristör Crossbar Array</h3>
                
                <p>Memristör crossbar array vektör-matris çarpımı için kullanılabilen bir elektronik devredir. Örneğin V x G = I için; V, n elemanlı bir sütun vektör. G, memristörlerin iletkenliğinden oluşan n x r bir matris. I ise bu vektör ve matrisin çarpımı olan n elemanlı bir satır matrisi. Fiziksel bir devrede ise her memristörün üzerindeki I değeri alt alta kümülatif olarak toplanır ve I satır matrisini bulabiliriz.</p>
                
                <h2>3. Sonuç</h2>
                
                <p>Görüldüğü üzere derin öğrenme algoritmaları, analog bilgisayarların eksilerinden sonuçları değiştirecek kadar etkilenmiyor. Bu yüzden bu alanda çalışanlar analog bilgisayarlarla hızlandırılmış derin öğrenme donanımlarının ileride oldukça iyi yerlere geleceğini düşünüyorlar.</p>
                
                <p>Oldukça heyecan verici olan bu araştırma ve gelişmelerin ileride yapay zekanın geleceğini önemli ölçüde etkileyeceğini düşünüyorum.</p>
                
                <h2>Referanslar</h2>
                
                <ol style="font-size: 14px; line-height: 1.6; color: #666;">
                    <li>Haensch, W., Gokmen, T., & Puri, R. (2018). The next generation of deep learning hardware: Analog computing. <em>Proceedings of the IEEE, 107</em>(1), 108-122. doi: 10.1109/JPROC.2018.2871057.</li>
                    
                    <li>Hu, M., Graves, C. E., Li, C., Li, Y., Ge, N., Montgomery, E., ... & Strachan, J. P. (2018). Memristor‐based analog computation and neural network classification with a dot product engine. <em>Advanced Materials, 30</em>(9), 1705914. https://doi.org/10.1002/adma.201705914</li>
                    
                    <li>A. Shafiee et al., "ISAAC: A Convolutional Neural Network Accelerator with In-Situ Analog Arithmetic in Crossbars," <em>2016 ACM/IEEE 43rd Annual International Symposium on Computer Architecture (ISCA)</em>, 2016, pp. 14-26, doi: 10.1109/ISCA.2016.12.</li>
                    
                    <li>Kim, H., Kim, T., Kim, J., & Kim, J. J. (2018). Deep neural network optimized to resistive memory with nonlinear current-voltage characteristics. <em>ACM Journal on Emerging Technologies in Computing Systems (JETC), 14</em>(2), 1-17. https://doi.org/10.48550/arXiv.1703.10642</li>
                    
                    <li>MythicAI CTO/Founder blog post: https://medium.com/mythic-ai/mythic-hot-chips-2018-637dfb9e38b7</li>
                </ol>
            `
        }
    };
    
    const post = posts[postId];
    if (!post) return;
    
    // Update post content
    document.querySelector('.post-title').textContent = post.title;
    document.querySelector('.post-date').textContent = post.date;
    document.querySelector('.post-body').innerHTML = post.content;
    
    // Switch to blog post page
    showPage('blog-post');
}