import { useState } from 'react'
import { usePageTitle } from '../../hooks/usePageTitle.ts'
import { useAuth } from '../../hooks/useAuth'
import { Button, Input, Label, TextField } from '@heroui/react'
import { useNavigate } from 'react-router'
import { ROUTES } from '../../config/routes'
import { toast } from 'sonner'
import AuthLayout from '../../components/AuthLayout'

const Login = () => {
  usePageTitle('Login')
  const { login, isLoading } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ identifier: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(formData.identifier, formData.password)
      navigate('/')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al iniciar sesión'
      toast.error(message)
    }
  }

  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="text-3xl font-bold">Bienvenido nuevamente</h1>
        <p className="mt-1">Compartí lo que pensás, descubrí lo que estás explorando</p>
      </div>

      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField>
            <Label>Email o usuario</Label>
            <Input
              type="text"
              placeholder="Ingresa tu email o usuario"
              value={formData.identifier}
              onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
              required
            />
          </TextField>

          <TextField>
            <Label>Contraseña</Label>
            <Input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </TextField>

          <Button type="submit" variant="primary" fullWidth isDisabled={isLoading}>
            Ingresar
          </Button>

          <Button
            variant="outline"
            fullWidth
            className="rounded-full border-accent text-accent"
            onClick={() => navigate(ROUTES.REGISTER)}
          >
            Crear cuenta
          </Button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
