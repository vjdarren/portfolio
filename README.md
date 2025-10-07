# VJ Darren - Personal Portfolio

A modern, responsive personal portfolio website for Valentinus Javier Darren Sebastian, a Computing Undergraduate at the University of Greenwich.

## 🚀 Features

- **Modern Design**: Clean, minimal, and developer-focused aesthetic
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Smooth navigation between sections
- **Performance Optimized**: Fast loading with minimal dependencies
- **SEO Ready**: Optimized meta tags and structure for search engines

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features
- **GitHub Pages** - Hosting platform

## 📁 Project Structure

```
portfolio-2/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Experience.jsx  # Experience & Education
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer component
│   ├── App.jsx             # Main App component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles with Tailwind
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vjdarren/portfolio-2.git
cd portfolio-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📱 Sections

### 1. Hero Section
- Full name and tagline
- Introduction paragraph
- Call-to-action buttons (View Projects, Download CV)
- Subtle background pattern

### 2. About Me
- Personal bio and background
- Quick facts grid (Location, Email, Languages, Skills)
- Professional headshot placeholder

### 3. Projects
- 5 featured projects with descriptions
- Technology tags for each project
- GitHub and Demo links
- Responsive grid layout

### 4. Experience & Education
- Professional experience timeline
- Educational background
- Academic achievements highlight

### 5. Contact
- Contact form with validation
- Contact information
- Social media links

### 6. Footer
- Copyright information
- Quick navigation links
- Social media links

## 🎨 Design Features

- **Color Scheme**: Light background with blue accent colors
- **Typography**: Inter and Poppins fonts
- **Animations**: Subtle hover effects and transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and minimal JavaScript

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your code to a GitHub repository
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

The site will be available at: `https://vjdarren.github.io/portfolio-2`

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the `homepage` field in `package.json`

## 🔧 Customization

### Updating Content

1. **Personal Information**: Update the content in each component file
2. **Projects**: Modify the `projects` array in `Projects.jsx`
3. **Experience**: Update the `experience` and `education` arrays in `Experience.jsx`
4. **Contact**: Update contact information in `Contact.jsx` and `Footer.jsx`

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind config
- **Layout**: Adjust spacing and sizing using Tailwind classes

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Add navigation link in `Navbar.jsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/vjdarren/portfolio-2/issues).

## 📞 Contact

**Valentinus Javier Darren Sebastian**

- Email: darrensebastian@gmail.com
- GitHub: [@vjdarren](https://github.com/vjdarren)
- LinkedIn: [VJ Darren](https://linkedin.com/in/vjdarren)
- Location: Orpington, UK

---

Built with ❤️ by VJ Darren
# portfolio
