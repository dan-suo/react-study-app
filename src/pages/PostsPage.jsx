import { PostsList } from '../components/ui/PostsList';

export default function PostsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Список постов</h1>
      <PostsList />
    </div>
  );
}