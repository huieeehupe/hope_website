import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions/auth";

const SignOutButton = () => {
  return (
    <Button
      size={"lg"}
      variant="outline"
      onClick={logout}
      className="text-black"
    >
      Logout
    </Button>
  );
};
export default SignOutButton;