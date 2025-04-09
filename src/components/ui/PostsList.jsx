import { useGetPostsQuery } from '../../stores/api';

export function PostsList() {  
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul className="space-y-2">
      {posts?.map((post) => (
        <li key={post.id} className="p-2 border-b">
          {post.title}
        </li>
      ))}
    </ul>
  );
}