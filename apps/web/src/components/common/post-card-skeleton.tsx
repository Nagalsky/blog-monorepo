import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const PostCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-[30px]" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-60" />
        <div className="space-y-2">
          <Skeleton className="h-4 max-w-[250px]" />
          <Skeleton className="h-4 max-w-[220px]" />
          <Skeleton className="h-4 max-w-[200px]" />
        </div>
        <Skeleton className="h-4 max-w-[120px]" />
        <Skeleton className="mt-4 ml-auto h-4 max-w-[120px]" />
      </CardContent>
    </Card>
  );
};

export default PostCardSkeleton;
