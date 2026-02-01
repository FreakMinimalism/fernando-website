// Sample thoughts data
const thoughtsData = [
    {
        id: 1,
        date: '2024-01-07',
        title: 'O Poder da Reflexão Diária',
        content: 'Hoje acordei pensando sobre como pequenos momentos de reflexão podem transformar nosso dia. A prática de escrever pensamentos diários não é apenas um registro, mas uma forma de diálogo com nós mesmos.',
        category: 'reflexão',
        readTime: '3 min'
    },
    {
        id: 2,
        date: '2024-01-06',
        title: 'A Beleza nas Coisas Simples',
        content: 'Às vezes, as maiores verdades se escondem nas coisas mais simples. Um café quente pela manhã, o som da chuva, uma conversa sincera. São esses pequenos prazeres que dão sentido à nossa jornada.',
        category: 'vida',
        readTime: '2 min'
    },
    {
        id: 3,
        date: '2024-01-05',
        title: 'Escrevendo para Compreender',
        content: 'Escrever é minha forma de compreender o mundo. Cada palavra é uma tentativa de capturar o efêmero, de dar forma ao indizível. No processo de escrever, descubro não apenas o mundo, mas a mim mesmo.',
        category: 'escrita',
        readTime: '4 min'
    },
    {
        id: 4,
        date: '2024-01-04',
        title: 'A Coragem de Ser Vulnerável',
        content: 'Ser vulnerável não é fraqueza, é coragem. É ter a bravura de mostrar quem realmente somos, com nossas falhas e medos. É nessa autenticidade que encontramos conexões verdadeiras.',
        category: 'autoconhecimento',
        readTime: '3 min'
    },
    {
        id: 5,
        date: '2024-01-03',
        title: 'O Tempo e a Memória',
        content: 'O tempo é estranho. Às vezes parece voar, outras vezes arrasta-se. Mas o que realmente importa é como preenchemos cada momento. As memórias que criamos hoje serão as histórias que contaremos amanhã.',
        category: 'filosofia',
        readTime: '5 min'
    },
    {
        id: 6,
        date: '2024-01-02',
        title: 'A Busca pela Autenticidade',
        content: 'Vivemos em um mundo que constantemente nos diz quem deveríamos ser. Mas a verdadeira jornada é descobrir quem realmente somos. Isso exige coragem, paciência e muita gentileza conosco mesmo.',
        category: 'autoconhecimento',
        readTime: '4 min'
    }
];

let currentThoughtsIndex = 0;
const thoughtsPerLoad = 3;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadThoughts();
    setupEventListeners();
    smoothScroll();
});

// Load thoughts into the container
function loadThoughts() {
    const container = document.getElementById('thoughts-container');
    const endIndex = Math.min(currentThoughtsIndex + thoughtsPerLoad, thoughtsData.length);
    
    for (let i = currentThoughtsIndex; i < endIndex; i++) {
        const thought = thoughtsData[i];
        const thoughtCard = createThoughtCard(thought);
        container.appendChild(thoughtCard);
    }
    
    currentThoughtsIndex = endIndex;
    
    // Hide load more button if all thoughts are loaded
    if (currentThoughtsIndex >= thoughtsData.length) {
        document.getElementById('load-more-thoughts').style.display = 'none';
    }
}

// Create a thought card element
function createThoughtCard(thought) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-lg p-6 card-hover cursor-pointer';
    
    const categoryColors = {
        'reflexão': 'bg-purple-100 text-purple-800',
        'vida': 'bg-green-100 text-green-800',
        'escrita': 'bg-blue-100 text-blue-800',
        'autoconhecimento': 'bg-yellow-100 text-yellow-800',
        'filosofia': 'bg-red-100 text-red-800'
    };
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <span class="text-sm text-gray-500">${formatDate(thought.date)}</span>
            <span class="px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[thought.category] || 'bg-gray-100 text-gray-800'}">
                ${thought.category}
            </span>
        </div>
        <h3 class="text-xl font-bold mb-3 text-gray-800">${thought.title}</h3>
        <p class="text-gray-600 mb-4 line-clamp-3">${thought.content}</p>
        <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">
                <i class="far fa-clock mr-1"></i>${thought.readTime} de leitura
            </span>
            <button class="text-purple-600 hover:text-purple-800 font-semibold text-sm">
                Ler Mais →
            </button>
        </div>
    `;
    
    // Add click event to expand thought
    card.addEventListener('click', function() {
        expandThought(thought);
    });
    
    return card;
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-PT', options);
}

// Expand thought to full view
function expandThought(thought) {
    // Create modal for full thought
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div class="flex justify-between items-start mb-6">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">${thought.title}</h2>
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <span>${formatDate(thought.date)}</span>
                        <span>•</span>
                        <span>${thought.category}</span>
                        <span>•</span>
                        <span><i class="far fa-clock mr-1"></i>${thought.readTime} de leitura</span>
                    </div>
                </div>
                <button id="close-modal" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed text-lg">${thought.content}</p>
            </div>
            <div class="mt-8 pt-6 border-t border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <button class="text-gray-600 hover:text-red-600 transition">
                            <i class="far fa-heart text-2xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-blue-600 transition">
                            <i class="far fa-share-square text-2xl"></i>
                        </button>
                    </div>
                    <button class="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
                        Compartilhar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    document.getElementById('close-modal').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Load more thoughts
    document.getElementById('load-more-thoughts').addEventListener('click', loadThoughts);
    
    // Contact form
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        showNotification('Mensagem enviada com sucesso! Entrarei em contacto brevemente.', 'success');
        this.reset();
    });
    
    // Book purchase
    document.getElementById('buy-book-btn').addEventListener('click', function() {
        document.getElementById('purchase-modal').classList.remove('hidden');
    });
    
    document.getElementById('cancel-purchase').addEventListener('click', function() {
        document.getElementById('purchase-modal').classList.add('hidden');
    });
    
    document.getElementById('confirm-purchase').addEventListener('click', function() {
        const name = document.getElementById('buyer-name').value;
        const email = document.getElementById('buyer-email').value;
        const nif = document.getElementById('buyer-nif').value;
        
        if (name && email && nif) {
            // Simulate purchase processing
            showNotification('Compra realizada com sucesso! Receberá um email com os detalhes.', 'success');
            document.getElementById('purchase-modal').classList.add('hidden');
            
            // Reset form
            document.getElementById('buyer-name').value = '';
            document.getElementById('buyer-email').value = '';
            document.getElementById('buyer-nif').value = '';
        } else {
            showNotification('Por favor, preencha todos os campos.', 'error');
        }
    });
    
    // Close modal when clicking outside
    document.getElementById('purchase-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white'
    };
    
    notification.className += ` ${colors[type]}`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-3"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth scrolling for navigation links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('shadow-xl');
    } else {
        nav.classList.remove('shadow-xl');
    }
});

// Add typing effect to hero text (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroSubtitle = document.querySelector('#home .text-2xl');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 30);
    }
});
