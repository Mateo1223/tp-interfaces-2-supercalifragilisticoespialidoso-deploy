import { useState } from 'react'
import { usePageTitle } from '../../hooks/usePageTitle.ts'
import { useAuth } from '../../hooks/useAuth'
import { Button, Input, Label, TextField } from '@heroui/react'
import { useNavigate } from 'react-router'
import { ROUTES } from '../../config/routes'
import { toast } from 'sonner'
import AuthLayout from '../../components/AuthLayout'
import Logo from '../../components/Logo/index.tsx'

const Register = () => {
  usePageTitle('Register')
  const { register, isLoading } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ nickname: '', name: '', email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await register(formData.nickname, formData.name, formData.email, formData.password)
      navigate('/')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al registrarse'
      toast.error(message)
    }
  }

  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="text-3xl font-bold">
          Registrate en <Logo className="inline h-[40px] w-auto align-middle" />
        </h1>
        <p className="pt-2">Internet ya era un caos. Nosotros lo organizamos</p>
      </div>

      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField>
            <Label>Nombre</Label>
            <Input
              className="mt-2"
              type="name"
              placeholder="Ingresa tu nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </TextField>

          <TextField>
            <Label>Usuario</Label>
            <Input
              className="mt-2"
              type="nickname"
              placeholder="Ingresa tu usuario"
              value={formData.nickname}
              onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              required
            />
          </TextField>

          <TextField>
            <Label>Email</Label>
            <Input
              className="mt-2"
              type="email"
              placeholder="Ingresa tu email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </TextField>

          <TextField>
            <Label>Contraseña</Label>
            <Input
              className="mt-2"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </TextField>

          <Button type="submit" variant="primary" fullWidth isDisabled={isLoading}>
            {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
          </Button>

          <Button
            variant="outline"
            fullWidth
            className="rounded-full border-accent text-accent"
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Iniciar sesión
          </Button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Register
