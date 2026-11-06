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
2. **Sobre Nosotros** - Información de la academia, estadísticas y resumen de lo que se enseña (básico, sistema operativo y avanzado)
3. **Cursos** - Catálogo completo de cursos organizados por nivel
4. **Financiación** - Opciones de financiación disponibles
5. **Contacto** - Formulario de contacto con mapa de localización
6. **Footer** - Enlaces de navegación y redes sociales

### Página independiente: Ayudas (`/ayudas/`)

Página aparte de la portada, accesible desde el logo de la UE del navbar (se abre en la misma ventana). Muestra a la izquierda el título y la descripción de la ayuda (ICECYL, convocatoria de creación de empresas 2022, cofinanciada por FEDER) y a la derecha el PDF embebido (`public/docs/Creacion_Empresas_Academia_Formacion_Valrojo.pdf`). Incluye el mismo footer que la portada y está en el sitemap.

Para cambiar el documento, sustituye el PDF en `public/docs/` (o actualiza la constante `PDF_URL` en `app/ayudas/page.tsx`) y edita los textos de esa misma página.

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

# Validar código
npm run lint
```

## Estructura del Proyecto

```
valrojo-formacion/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   ├── ayudas/
│   │   └── page.tsx        # Página de Ayudas (texto + PDF embebido)
│   ├── globals.css         # Estilos globales
│   ├── robots.ts           # Reglas para crawlers (SEO)
│   └── sitemap.ts          # Sitemap dinámico (SEO)
├── components/
│   ├── Header.tsx          # Navegación (incluye enlace a Ayudas con logo UE)
│   ├── Hero.tsx            # Sección principal
│   ├── About.tsx           # Sobre nosotros
│   ├── Courses.tsx         # Catálogo de cursos
│   ├── Financiation.tsx    # Opciones de financiación
│   ├── Map.tsx             # Mapa de localización
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Pie de página (compartido por portada y Ayudas)
├── public/
│   ├── CNAME               # Dominio personalizado (GitHub Pages)
│   ├── docs/               # Documentos PDF (p. ej. el de Ayudas)
│   └── images/             # Imágenes estáticas (incluye logo-ue.webp)
├── package.json            # Dependencias
├── tailwind.config.js      # Configuración de Tailwind CSS
├── tsconfig.json           # Configuración de TypeScript
└── next.config.js          # Configuración de Next.js
```

## Tecnologías Utilizadas

- **Next.js 14** - Framework React con exportación estática
- **React 18** - Librería de UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 3** - Framework de CSS utilitario
- **PostCSS** - Procesador de CSS
- **cross-env** - Variables de entorno multiplataforma (build)

## Despliegue

El sitio se publica como sitio estático en **GitHub Pages** con dominio personalizado.

- `next build` genera la carpeta `out/` con el HTML/CSS/JS estático (`output: 'export'`)
- El archivo `public/CNAME` apunta al dominio `valrojoformacion.es`
- El archivo `.nojekyll` evita que GitHub Pages procese las carpetas con guion bajo de Next.js

```bash
npm run build   # genera out/ listo para desplegar
```

Con `output: 'export'` no se usa `npm start`; para previsualizar el resultado puedes servir la carpeta `out/` con cualquier servidor estático (p. ej. `npx serve out`). Las rutas se generan con barra final (`trailingSlash: true`), por lo que la página de ayudas queda en `/ayudas/`.

```
```

## Personalización

### Cambiar Colores
Edita `tailwind.config.js` para modificar la paleta de colores principal.

### Agregar Contenido
- Edita los componentes en `/components` para cambiar textos e imágenes
- Modifica el listado de cursos en `components/Courses.tsx`
- Los enlaces del footer usan `/#seccion` (no solo `#seccion`) para funcionar también desde `/ayudas/`

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