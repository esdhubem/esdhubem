const fs = require('fs');

// 1. Update Hero.tsx
let heroPath = 'src/components/Hero.tsx';
let hero = fs.readFileSync(heroPath, 'utf8');

hero = hero.replace(/import React, \{ useState \} from 'react';/, "import React from 'react';");

hero = hero.replace(/interface HeroProps \{[\s\S]*?export const Hero: React\.FC<HeroProps> = \(\{[\s\S]*?\}\) => \{[\s\S]*?const handleQuickTagClick = [\s\S]*?\};/, 
`interface HeroProps {
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
}) => {`);

hero = hero.replace(/\s*\{\/\* Search Box - "Buscar cursos online" with "Buscar" button \*\/\}[\s\S]*?Desenvolvimento Pessoal\n                <\/button>\n              <\/div>\n            <\/div>/, '');

fs.writeFileSync(heroPath, hero);


// 2. Update App.tsx
let appPath = 'src/App.tsx';
let app = fs.readFileSync(appPath, 'utf8');

app = app.replace(/<Hero\s*onSearch=\{\(query\) => setSearchTerm\(query\)\}\s*onSelectCategory=\{\(cat\) => \{\s*setSelectedCategory\(cat\);\s*const el = document\.getElementById\('catalogo-cursos'\);\s*if \(el\) el\.scrollIntoView\(\{ behavior: 'smooth' \}\);\s*\}\}\s*searchTerm=\{searchTerm\}\s*\/>/, 
`<Hero
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              const el = document.getElementById('catalogo-cursos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />`);

fs.writeFileSync(appPath, app);

console.log('Fixed files');
