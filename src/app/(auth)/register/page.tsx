import { AuthForm } from "@/components/auth/AuthForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function RegisterPage() {
  return (
    <div className="mx-auto w-full max-w-lg space-y-8 px-6 py-20">
      <SectionHeading
        title="Join SG Sports"
        subtitle="Create your athlete profile and access the member arena."
      />
      <AuthForm mode="register" />
    </div>
  );
}
