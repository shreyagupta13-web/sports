import { AuthForm } from "@/components/auth/AuthForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-lg space-y-8 px-6 py-20">
      <SectionHeading title="Member Login" subtitle="Access your SG Sports dashboard." />
      <AuthForm mode="login" />
    </div>
  );
}
