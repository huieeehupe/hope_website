import CreateProfileForm from "@/components/createProfileForm";

export default function CreateProfilePage() {
  return (
    <div className="center-section bg-[#27262b]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-black">Create Your Profile</h1>
        <CreateProfileForm />
      </div>
    </div>
  );
}
