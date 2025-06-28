<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo/Brand -->
          <div class="flex items-center">
            <div class="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center border-2 border-black-600">
                <h1 class="text-xl font-bold text-black">F</h1>
            </div>&nbsp;
            <h1 class="text-xl font-bold text-black">Portfolio</h1>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button 
              @click="toggleMobileMenu" 
              class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle mobile menu"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <div 
          v-show="isMobileMenuOpen" 
          class="md:hidden border-t border-gray-200 bg-white"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#about" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8">
          <div class="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-6">
            <img :src="profile.avatar" alt="Avatar" class="w-full h-full object-cover rounded-full">
          </div>
        </div>
        <h1 class="text-5xl font-bold mb-4">
          Hi, I'm 
          <span class="text-yellow-300 relative">
            {{ typedText }}
            <span class="animate-pulse">|</span>
          </span>
        </h1>
        <p class="text-xl mb-6 opacity-90">{{ profile.title.join(' • ') }}</p>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-80">
          {{ profile.description }}
        </p>
        <div class="flex justify-center space-x-4">
          <a href="#projects" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View My Work
          </a>
          <a href="#contact" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Get In Touch
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in both frontend and backend technologies. 
              With years of experience in web development and freelancing, I specialize in creating 
              high-performance, scalable applications that solve real-world problems.
            </p>
            <p class="text-gray-600 mb-6 leading-relaxed">
              My journey in tech started with web development and has evolved to include backend systems, 
              cloud infrastructure, and database design. I love working with modern technologies and 
              staying up-to-date with industry best practices.
            </p>
            <div class="flex space-x-4">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600">{{ experience.experienceYear }}+</div>
                <div class="text-sm text-gray-600">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600">{{ experience.projectTotal }}+</div>
                <div class="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600">{{ experience.clientTotal }}+</div>
                <div class="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
          <div class="bg-gray-100 p-8 rounded-lg">
            <h4 class="text-xl font-semibold text-gray-900 mb-4">What I Do</h4>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Full-stack web development with modern frameworks
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Backend API development and database design
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Cloud infrastructure and DevOps practices
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Performance optimization and scalability
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Freelance consulting and project management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="skill in skills" :key="skill.text" class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span class="w-8 h-8 rounded-lg flex items-center justify-center mr-3" :class="skill.bgColor">
                <font-awesome-icon :icon="skill.icon" :class="skill.textColor" />
              </span>
              {{ skill.text }}
            </h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between" v-for="tech in skill.techStack" :key="tech.text">
                <span class="text-gray-700 flex items-center">
                  <Icon :icon="tech.icon" :class="tech.textColor" class="mr-2" />
                  {{ tech.text }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div class="space-y-8">
          <div class="flex flex-col md:flex-row gap-8" v-for="experience in experience.experiences" :key="experience.title">
            <div class="md:w-1/3">
              <div class="text-white p-4 rounded-lg" :class="experience.bgColor">
                <h3 class="text-xl font-semibold" :class="experience.textColor">{{ experience.title }}</h3>
                <p :class="experience.textColor">{{ experience.company }}</p>
                <p class="text-sm" :class="experience.textColor">{{ experience.year }}</p>
              </div>
            </div>
            <div class="md:w-2/3">
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start" v-for="work in experience.works" :key="work">
                    <span class="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" :class="experience.bgColor"></span>
                    {{ work }}
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow" v-for="project in projects" :key="project.title">
            <div class="h-48 bg-gradient-to-br flex items-center justify-center" :class="project.gradientColor">
              <span class="text-white text-center text-2xl font-bold">{{ project.title }}</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 text-justify">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full" v-for="tech in project.techStack" :key="tech">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Left Column - Contact Information -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Let's Work Together</h3>
            <p class="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <!-- Contact Information -->
            <div class="grid md:grid-cols-2 gap-12">
                <div class="space-y-4 mb-8">
                    <div class="flex items-center" v-for="contact in contacts" :key="contact.text">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4" :class="contact.bgColor">
                            <font-awesome-icon :icon="contact.icon" :class="contact.textColor" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900">{{ contact.label }}</h4>
                            <p class="text-gray-600">{{ beautifyUrl(contact.text) }}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Freelance Platforms -->
                <div>
                    <!-- <h4 class="text-lg font-semibold text-gray-900 mb-4">Freelance Platforms</h4> -->
                    <div class="space-y-4">
                        <div class="flex items-center" v-for="freelance in freelance" :key="freelance.platform">
                            <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gray-100">
                                <Icon :icon="freelance.icon" class="w-6 h-6 text-gray-700" v-if="freelance.icon" />
                                <img :src="freelance.linkIcon" class="w-6 h-6" v-else />
                            </div>
                            <div>
                                <h5 class="font-semibold text-gray-900">{{ freelance.platform }}</h5>
                                <a :href="freelance.link" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <!-- Right Column - Contact Form -->
          <div class="bg-gray-50 p-8 rounded-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form class="space-y-4" ref="contactForm" @submit.prevent="sendMessage">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" v-model="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" v-model="message" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message"></textarea>
              </div>
              <button type="submit" class="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-12 pb-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl font-bold mb-4">{{ profile.name }}</h3>
        <p class="text-gray-400 mb-6">{{ profile.title.join(' • ') }}</p>
        <div class="flex justify-center space-x-6 mb-6">
            <a v-for="contact in contacts" :key="contact.text" :href="contact.value" class="text-gray-400 hover:text-white transition-colors flex items-center">
                <font-awesome-icon :icon="contact.icon" class="mr-2" />
                {{ contact.label }}
            </a>
        </div>
        <div class="flex justify-center space-x-6 mb-6">
            <a v-for="freelance in freelance" :key="freelance.platform" :href="freelance.link" class="text-gray-400 hover:text-white transition-colors flex items-center">
                <Icon :icon="freelance.icon" class="mr-2 w-6 h-6" v-if="freelance.icon" />
                <img :src="freelance.linkIcon" class="mr-2 w-6 h-6" v-else />
                {{ freelance.platform }}
            </a>
        </div>
        <div class="border-t border-gray-800 pt-6">
            <p class="text-gray-400 pb-0">
                &copy; {{ new Date().getFullYear() }} {{ profile.name }}.<br>All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)
let name = ref('')
let message = ref('')
const phoneNumber = ref('628998810086')

// Typing animation state
const typedText = ref('')
const names = ['Xrilozs', 'Fajar Ramadhan Hidayah']
let currentNameIndex = 0
let currentCharIndex = 0
let isDeleting = false
let typingSpeed = 150
let deletingSpeed = 100
let pauseTime = 2000

// Typing animation function
const typeText = () => {
  const currentName = names[currentNameIndex]
  
  if (isDeleting) {
    // Deleting text
    typedText.value = currentName.substring(0, currentCharIndex - 1)
    currentCharIndex--
    typingSpeed = deletingSpeed
  } else {
    // Typing text
    typedText.value = currentName.substring(0, currentCharIndex + 1)
    currentCharIndex++
    typingSpeed = 150
  }
  
  // Handle transitions
  if (!isDeleting && currentCharIndex === currentName.length) {
    // Finished typing, pause then start deleting
    setTimeout(() => {
      isDeleting = true
    }, pauseTime)
  } else if (isDeleting && currentCharIndex === 0) {
    // Finished deleting, move to next name
    isDeleting = false
    currentNameIndex = (currentNameIndex + 1) % names.length
  }
  
  // Continue the animation
  setTimeout(typeText, typingSpeed)
}

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  if (isMobileMenuOpen.value && !event.target.closest('nav')) {
    closeMobileMenu()
  }
}

// Your existing data
const profile = {
    name: 'Fajar Ramadhan Hidayah',
    nickname: 'Xrilozs',
    avatar: "/profile-picture.jpg",
    title: ['Full-Stack Developer', 'Backend Specialist', 'Freelancer'],
    description: 'Passionate about building scalable web applications and robust backend systems. Experienced in modern web technologies and cloud infrastructure.',
}
const experience = {
    experienceYear: 7,
    projectTotal: 50,
    clientTotal: 40,
    experiences: [
        {
            title: 'Web Developer',
            company: 'Sekode',
            year: '2018 - 2019',
            bgColor: 'bg-blue-600',
            textColor: 'text-white',
            works: [
                "Built scalable supply chain management system",
                "Developed anime streaming web application with dynamic content delivery",
                "Implemented online procurement system for B2B clients",
            ]
        },
        {
            title: 'Backend Developer',
            company: 'Kokatto',
            year: '2019 - 2021',
            bgColor: 'bg-red-300',
            textColor: 'text-white',
            works: [
                "Implemented microservices architecture with Node.js Serverless",
                "Developed scalable omni-channel messaging platform integrating Meta",
                "Developed and maintained warehouse and inventory systems",
            ]
        },
        {
            title: 'Ops and Backend Developer',
            company: 'Kokatto - Bukalapak',
            year: '2021 - Present',
            bgColor: 'bg-red-600',
            textColor: 'text-white',
            works: [
                "Implemented microservices architecture with Golang and Redis",
                "Implemented microservices architecture with Node.js Serverless",
                "Developed and maintained Capital & Finance platforms for enterprise clients",
                "Enhanced microsites and backend systems for major insurance provider",
                "Built internal tools to streamline company operations",
                "Created data transformation services for client needs",
                "Created Queue and booking system for insurance company",
            ]
        },
        {
            title: 'Freelance Full-stack Developer',
            company: 'Self-Employed',
            year: '2018 - Present',
            bgColor: 'bg-yellow-600',
            textColor: 'text-white',
            works: [
                "Completed 50+ projects for various clients worldwide",
                "Specialized in e-commerce, SaaS, and custom web applications",
                "Provided technical consulting and project management services",
            ]
        }
    ]
}
const skills = [
    {
        text: 'Backend Development',
        icon: ['fas', 'server'], 
        bgColor: 'bg-red-100', 
        textColor: 'text-red-600',
        techStack: [
            {text: 'Node.js', icon: "skill-icons:nodejs-light", bgColor: 'bg-yellow-100', textColor: 'text-yellow-600'},
            {text: 'Golang', icon: "skill-icons:golang", bgColor: 'bg-green-100', textColor: 'text-green-600'},
            {text: 'PHP', icon: "material-icon-theme:php", bgColor: 'bg-purple-100', textColor: 'text-purple-600'},
            {text: 'PostgreSQL', icon: "skill-icons:postgresql-light", bgColor: 'bg-blue-100', textColor: 'text-blue-600'},
            {text: 'MySQL', icon: "skill-icons:mysql-light", bgColor: 'bg-blue-100', textColor: 'text-blue-600'},
            {text: 'DynamoDB', icon: "skill-icons:dynamodb-light", bgColor: 'bg-orange-100', textColor: 'text-orange-600'},
            {text: 'Redis', icon: "skill-icons:redis-light", bgColor: 'bg-green-100', textColor: 'text-green-600'},
        ],
    },
    {
        text: 'Frontend Development', 
        icon: ['fas', 'laptop-code'], 
        bgColor: 'bg-green-100', 
        textColor: 'text-green-600',
        techStack: [
            {text: 'Vue.js', icon: "skill-icons:vuejs-light", bgColor: 'bg-blue-100', textColor: 'text-blue-600'},
            {text: 'Nuxt.js', icon: "skill-icons:nuxtjs-light", bgColor: 'bg-green-100', textColor: 'text-green-600'},
            {text: 'JavaScript', icon: "skill-icons:javascript-light", bgColor: 'bg-yellow-100', textColor: 'text-yellow-600'},
            {text: 'Tailwind', icon: "skill-icons:tailwindcss-light", bgColor: 'bg-green-100', textColor: 'text-green-600'},
            {text: 'Vuetify', icon: "skill-icons:vuetify-light", bgColor: 'bg-blue-300', textColor: 'text-blue-600'},
            {text: 'Bootstrap', icon: "skill-icons:bootstrap", bgColor: 'bg-yellow-100', textColor: 'text-yellow-600'},
        ],
    },
    {
        text: 'Cloud & DevOps', 
        icon: ['fas', 'cloud'], 
        bgColor: 'bg-blue-100', 
        textColor: 'text-blue-600',
        techStack: [
            {text: 'AWS', icon: "skill-icons:aws-light", bgColor: 'bg-orange-100', textColor: 'text-orange-600'},
            {text: 'Serverless', icon: "material-icon-theme:serverless", bgColor: 'bg-red-100', textColor: 'text-red-600'},
            {text: 'Docker', icon: "skill-icons:docker", bgColor: 'bg-blue-100', textColor: 'text-blue-600'},
            {text: 'Git', icon: "skill-icons:git", bgColor: 'bg-yellow-100', textColor: 'text-yellow-600'},
            {text: 'Linux', icon: "skill-icons:linux-light", bgColor: 'bg-green-100', textColor: 'text-green-600'},
        ],
    },
]
const contacts = [
    {label: 'Email', text: 'xrilozs@gmail.com', value: 'mailto:xrilozs@gmail.com', icon: ['fas', 'envelope'], bgColor: 'bg-blue-100', textColor: 'text-blue-600'},
    {label: 'LinkedIn', text: 'Fajar Ramadhan Hidayah', value: 'https://www.linkedin.com/in/fajar-hidayah-686139113/', icon: ['fab', 'linkedin'],bgColor: 'bg-green-100', textColor: 'text-green-600'},
    {label: 'GitHub', text: 'xrilozs', value: 'https://github.com/xrilozs', icon: ['fab', 'github'],bgColor: 'bg-purple-100', textColor: 'text-purple-600'},
    {label: 'GitLab', text: 'xrilozs', value: 'https://gitlab.com/xrilozs', icon: ['fab', 'gitlab'],bgColor: 'bg-yellow-100', textColor: 'text-yellow-600'},
]
const projects = [
    {
        title: 'IoT Portal',
        description: 'Full-stack IoT portal solution with device management, data visualization, and admin dashboard.',
        techStack: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL', 'Tuya API'],
        gradientColor: 'from-blue-400 to-blue-600',
    },
    {
        title: 'Online Shop',
        description: 'Full-stack online shop solution with payment integration, inventory management, and admin dashboard.',
        techStack: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
        gradientColor: 'from-blue-400 to-purple-500',
    },
    {
        title: 'Guestpost E-Commerce',
        description: 'Full-stack guestpost e-commerce solution with payment integration, wallet management, blog, and admin dashboard.',
        techStack: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
        gradientColor: 'from-red-400 to-red-600',
    },
    {
        title: 'Payment Gateway Backoffice Management System',
        description: 'Complete dashboard for managing payment gateway and payment transactions.',
        techStack: ['Vue.js', 'Tailwind'],
        gradientColor: 'from-green-400 to-green-600',
    },
    {
        title: 'eSIM Management and Top-up for Travelers',
        description: 'Web application for managing eSIMs and processing top-ups for international travelers.',
        techStack: ['Vue.js', 'Express.js', 'Tailwind', 'MySQL'],
        gradientColor: 'from-yellow-400 to-yellow-600',
    },
    {
        title: 'Omni-channel Customer Service and Communication',
        description: 'High-performance and scalable omni-channel system integrating WhatsApp, Instagram, Facebook, and e-commerce platforms. Supports WhatsApp, Email, SMS, and Voice Call channels.',
        techStack: ['Vue.js', 'Vuetify', 'Node.js', 'Serverless', 'AWS', 'DynamoDB', 'Redis'],
        gradientColor: 'from-purple-400 to-purple-600',
    },
    {
        title: 'Queue and Booking System',
        description: 'Dynamic queue and booking platform with real-time dashboard and integrated reporting for service-based businesses.',
        techStack: ['Vue.js', 'Vuetify', 'Node.js', 'Serverless', 'AWS', 'DynamoDB', 'Redis', 'Metabase'],
        gradientColor: 'from-orange-400 to-orange-600',
    },
    {
        title: 'Outbound Blast Gateway',
        description: 'Gateway service to validate and relay outbound communication requests to blast system endpoints with high throughput.',
        techStack: ['Golang', 'Redis', 'Serverless', 'AWS', 'DynamoDB'],
        gradientColor: 'from-red-400 to-red-600',
    },
    {
        title: 'E-Procurement',
        description: 'End-to-end electronic procurement system for managing vendor orders, approvals, and inventory digitally.',
        techStack: ['Vue.js', 'Vuetify', 'Node.js', 'Serverless', 'AWS', 'DynamoDB'],
        gradientColor: 'from-green-400 to-green-600',
    },
];
const freelance = [
    {
        platform: 'Upwork',
        link: 'https://www.upwork.com/freelancers/~017000000000000000',
        icon: "logos:upwork",
        linkIcon: ""
    },
    {
        platform: 'Sribu',
        link: 'https://www.sribu.com/id/users/xrilozs7',
        icon: "",
        linkIcon: "https://www.sribu.com/favicon.ico"
    },
    {
        platform: 'Projects.co.id',
        link: 'https://projects.co.id/public/browse_users/view/45d120/fajar-ramadhan-hidayah',
        icon: "",
        linkIcon: "https://cdn.projects.co.id/assets/img/favicon.ico"
    },
]


onMounted(() => {
  // Start typing animation
  typeText()
  
  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
  
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})

onUnmounted(() => {
  // Clean up event listener
  document.removeEventListener('click', handleClickOutside)
})

const beautifyUrl = (url) => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '')
}

const constructWALink = () => {
    return `https://wa.me/${phoneNumber.value}?text=${encodeURIComponent(`Hai, saya ${name.value}\n${message.value}`)}`
}

const sendMessage = () => {
    window.open(constructWALink(), '_blank')
}
</script> 