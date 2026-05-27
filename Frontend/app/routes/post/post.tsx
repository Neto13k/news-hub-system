import PostContent from "~/components/post";

export function meta() {
  return [{ title: "Post | News Hub" }];
}

export default function Post() {
  return (
    <div>
      <PostContent />
    </div>
  );
}