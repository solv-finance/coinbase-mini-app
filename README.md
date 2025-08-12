# Coinbase Mini App 

## Overview

A modern Next.js starter template featuring:
- 🦊 Wagmi for Ethereum interactions
- 🎨 Radix UI primitives for accessible components
- ⚡ Next.js 14 (App Router)
- 🛠 TypeScript support
- 🖌️ Tailwind CSS integration

## Key Features

### Web3 Capabilities
- Wallet connection management (MetaMask, Farcaster)
- Pre-configured Wagmi hooks

### UI Components
- Complete set of Radix UI primitives
- Accessible, unstyled components
- Dark/light mode support
- Fully customizable with Tailwind

## Quick Start

### Installation
```bash
npx create-next-app -e https://github.com/solv-finance-dev/solv-mini-app.git
cd your-app
yarn install
```

### Environment Setup
```bash
cp .env.example .env.local
# Add your WalletConnect project ID
```

### Development
```bash
npm run dev
```

## Component Examples

### Radix UI + Wagmi Integration
```tsx
import { ConnectButton } from './ConnectButton'
import { Dialog, Button, Flex } from '@radix-ui/themes'

export function Web3Dialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Connect Wallet</Button>
      </Dialog.Trigger>
      
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Connect Wallet</Dialog.Title>
        <Flex direction="column" gap="3">
          <ConnectButton />
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
```

## Configuration

### Radix UI Themes
Configure in `app/providers.tsx`:
```tsx
import { Theme } from '@radix-ui/themes'

export function Providers({ children }) {
  return (
    <Theme appearance="light" accentColor="violet">
      {children}
    </Theme>
  )
}
```

### Wagmi Setup
Pre-configured chains and connectors in `lib/wagmi.ts`:
```typescript
const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()]
)
```

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

## License

MIT © 2023 