import { useNavigate } from "react-router";
import { Button } from "../ui/button";

const Page404 = () => {
  const navigate = useNavigate();
    return (
      <div className="backdrop-blur flex flex-col items-center justify-center min-h-[70dvh] text-center gap-4">
        <p className="text-sm">404</p>
        <p className="text-3xl font-bold">Page not found</p>
        <span className="pb-2.5">
          Sorry, we couldn’t find the page you’re looking for.
        </span>
        <Button onClick={() => {navigate('/')}} variant="secondary">← Back to home </Button>
      </div>
    );
}

export default Page404;
