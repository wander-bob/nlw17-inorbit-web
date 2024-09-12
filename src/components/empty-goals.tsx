import { Plus } from 'lucide-react';
import { DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import letsStart from '../assets/lets-start-illustration.svg';
import logoImg from '../assets/logo-in-orbit.svg';

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logoImg} alt="in.orbit" />
      <img src={letsStart} alt="Let's start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
