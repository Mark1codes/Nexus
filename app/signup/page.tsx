import AuthLayout from "@/components/auth-layout"
import SignupForm from "@/components/signup-form"

export default function SignupPage() {
  return (
    <AuthLayout title="Create Account" subtitle="Join NEXUS and discover premium apparel" showBackButton={true}>
      <SignupForm />
    </AuthLayout>
  )
}
