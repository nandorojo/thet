import dynamic from 'next/dynamic'

// this is a work-around we'll have to do often
// it's an annoying hack, but it's required for most pages to work with elastic ui
const Quality = dynamic(() => import('./quality'), { ssr: false })

export default Quality
