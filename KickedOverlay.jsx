import { motion } from 'framer-motion'
import { ShieldX } from 'lucide-react'

export default function KickedOverlay() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-coal/95 px-6 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-xs flex-col items-center rounded-3xl border border-red-500/30 bg-carbon p-8 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15">
          <ShieldX className="h-8 w-8 text-red-400" />
        </div>
        <h2 className="mt-4 font-display text-2xl tracking-wide text-white">
          ACESSO ENCERRADO
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Este acesso foi removido pelo balcão. Procure o responsável se achar que é um engano.
        </p>
        <button
          onClick={() => {
            window.location.hash = '#/'
            window.location.reload()
          }}
          className="btn-red mt-6 w-full rounded-2xl px-6 py-3.5 text-sm font-bold tracking-wide"
        >
          Voltar ao início
        </button>
      </motion.div>
    </div>
  )
}
