// app/login/page.tsx
// 💡 A importação DEVE SER padrão, sem chaves {}.
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* O erro aponta para esta linha */}
      <LoginForm />
    </div>
  );
}