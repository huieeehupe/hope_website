import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UpdatesCard = ({
  update,
}: {
  update: {
    title: string;
    image: string | undefined;
    description: string;
    date_posted: string;
    semester: string;
  };
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl">{update.title}</h2>
        </CardTitle>
        <CardDescription>{update.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {update.image ? (
          <img
            src={update.image}
            alt={update.title}
            className="w-2/3 h-auto rounded-lg"
          />
        ) : (
          <p></p>
        )}
      </CardContent>
      <CardFooter>
        <p className="mt-2 text-sm text-gray-500">
          Posted on: {update.date_posted} | Semester: {update.semester}
        </p>
      </CardFooter>
    </Card>
  );
};

export default UpdatesCard;
