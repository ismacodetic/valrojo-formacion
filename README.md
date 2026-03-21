# Valrojo Formación - Página Web

Academia de formación presencial y a distancia especializada en tecnologías digitales.

## Descripción

Página web moderna y profesional para Valrojo Formación, una academia que ofrece:

- **Cursos Básicos**: Herramientas digitales, trámites online, gestión de móviles, correo electrónico
- **Cursos Avanzados**: Photoshop, Fotografía, Diseño Web, Impresión 3D, Fotogrametría con Drones
- **Charlas Informativas**: Seguridad en redes sociales y conciencia digital

## Características

✨ **Diseño Responsivo** - Funciona perfectamente en dispositivos móviles, tablets y escritorio
🎨 **Interfaz Moderna** - Colores profesionales y componentes bien estructurados
⚡ **Rendimiento Optimizado** - Built con Next.js para máxima velocidad
📱 **SEO Friendly** - Optimizado para motores de búsqueda
🎯 **Navegación Intuitiva** - Menú fluido con secciones claramente definidas

## Secciones

1. **Inicio** - Hero principal con call-to-action
2. **Sobre Nosotros** - Información de la academia y estadísticas
3. **Cursos** - Catálogo completo de cursos organizados por nivel
4. **Contacto** - Formulario de contacto e información de localización
5. **Footer** - Enlaces de navegación y redes sociales

## Instalación

### Requisitos
- Node.js 18+ 
- npm o yarn

### Pasos

1. Navega a la carpeta del proyecto:
```bash
cd valrojo-formacion
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador y ve a `http://localhost:3000`

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Inicia el servidor de producción
npm start

# Validar código
npm lint
```

## Estructura del Proyecto

```
valrojo-formacion/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación
│   ├── Hero.tsx            # Sección principal
│   ├── About.tsx           # Sobre nosotros
│   ├── Courses.tsx         # Catálogo de cursos
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Pie de página
├── public/                 # Archivos estáticos
├── package.json            # Dependencias
├── tailwind.config.js      # Configuración de Tailwind CSS
├── tsconfig.json           # Configuración de TypeScript
└── next.config.js          # Configuración de Next.js
```

## Tecnologías Utilizadas

- **Next.js 14** - Framework React moderno
- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **PostCSS** - Procesador de CSS

## Personalización

### Cambiar Colores
Edita `tailwind.config.js` para modificar la paleta de colores principal.

### Agregar Contenido
- Edita los componentes en `/components` para cambiar textos e imágenes
- Modifica el listado de cursos en `components/Courses.tsx`

### Integrar Email
En `components/Contact.tsx`, conecta un servicio de email como:
- Resend
- SendGrid
- Mailgun

## Mejoras Futuras

- [ ] Integración con base de datos para gestión de cursos
- [ ] Sistema de inscripción en cursos
- [ ] Panel de administración
- [ ] Blog o sección de noticias
- [ ] Galería de proyectos estudiantes
- [ ] Sistema de pagos online
- [ ] Certificaciones digitales

## Licencia

Este proyecto está bajo licencia MIT.

## Contacto

Para preguntas sobre el desarrollo o personalizaciones:
- Web: www.valrojoformacion.com
- Email: info@valrojoformacion.com

---

Desarrollado con ❤️ para Valrojo Formación