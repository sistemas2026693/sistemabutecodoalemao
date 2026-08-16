import { motion } from 'framer-motion'
import { ChefHat, Smartphone, Zap } from 'lucide-react'

const iconMap = {
  chef: ChefHat,
  smartphone: Smartphone,
  zap: Zap
}

function Feature({ icon, title, desc }) {
  const Icon = iconMap[icon]
  return (
    <div className="flex items-start gap-3 text-left">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        <Icon className="h-4.5 w-4.5 text-amber-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs leading-relaxed text-zinc-500">{desc}</p>
      </div>
    </div>
  )
}

export default function Landing() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-12">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#E50914]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/3 top-1/4 h-64 w-64 rounded-full bg-amber-400/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex w-full max-w-sm flex-col items-center text-center"
      >
        <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-[2rem] shadow-glowred">
          <img src="/logo.svg" alt="Logo Buteco do Alemão" className="h-full w-full drop-shadow-[0_0_25px_rgba(255,193,7,0.35)]" />
        </div>

        <h1 className="font-display text-[3.4rem] leading-[0.95] tracking-wide text-white">
          BUTECO DO
          <br />
          <span className="text-gold-grad">ALEMÃO</span>
        </h1>

        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
          Pedidos em tempo real
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          Prost! Peça direto do seu celular e veja a cozinha preparar na hora.
        </p>

        <div className="mt-9 w-full space-y-3.5">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.hash = '#/cardapio')}
            className="btn-red flex w-full items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-sm font-bold tracking-wide"
          >
            <Smartphone className="h-5 w-5" />
            Fazer Pedido
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.hash = '#/cozinha')}
            className="glass flex w-full items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-sm font-bold tracking-wide text-zinc-200 transition hover:border-amber-400/40 hover:text-white"
          >
            <ChefHat className="h-5 w-5 text-amber-400" />
            Painel da Cozinha
          </motion.button>
        </div>

        <div className="mt-12 w-full space-y-4">
          <Feature
            icon="zap"
            title="Envio instantâneo"
            desc="O pedido chega na cozinha no mesmo segundo, via WebSocket."
          />
          <Feature
            icon="chef"
            title="Painel do balcão"
            desc="Kanban ao vivo: Novos, Preparando e Prontos."
          />
          <Feature
            icon="smartphone"
            title="Acompanhe do seu lugar"
            desc="Receba alerta quando seu pedido estiver pronto."
          />
        </div>
      </motion.div>
    </div>
  )
}
