import dynamic from 'next/dynamic'

export const importEui = (mod: ReturnType<typeof import('@elastic/eui')>) =>
  dynamic(() => import('@elastic/eui').then(module => module[mod]))
