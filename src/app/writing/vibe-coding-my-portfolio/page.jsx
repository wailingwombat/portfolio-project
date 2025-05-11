import BlogLayout from '@/components/Blog/BlogLayout';
import { getPost } from '@/utils/getPost';

export default async function VibeCodingPost() {
  const { frontmatter, content } = await getPost('vibe-coding-my-portfolio');

  return (
    <BlogLayout 
      title={frontmatter.title}
      date={frontmatter.date}
      readingTime={frontmatter.readingTime}
    >
      {content}
    </BlogLayout>
  );
} 