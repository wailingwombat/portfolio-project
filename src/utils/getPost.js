import fs from 'fs';
import path from 'path';

export async function getPost(slug) {
  const filePath = path.join(process.cwd(), 'src/content/writing', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter
  const frontmatter = {};
  const content = fileContent.replace(/^---\n([\s\S]*?)\n---\n/, (match, p1) => {
    p1.split('\n').forEach(line => {
      const [key, value] = line.split(':').map(s => s.trim());
      if (key && value) {
        frontmatter[key] = value.replace(/"/g, '');
      }
    });
    return '';
  }).trim();

  return {
    frontmatter,
    content
  };
} 