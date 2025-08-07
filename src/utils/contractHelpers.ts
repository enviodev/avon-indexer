import { createPublicClient, http, parseAbi } from 'viem';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export interface TokenMetadata {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: bigint;
}

const ERC20_ABI = parseAbi([
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
]);

// Create a public client for reading contract state
// Using MegaETH testnet (network ID 6342)
const publicClient = createPublicClient({
  chain: {
    id: 6342,
    name: 'MegaETH Testnet',
    network: 'megaeth-testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'MegaETH',
      symbol: 'METH',
    },
    rpcUrls: {
      default: {
        http: [process.env.RPC_URL || 'https://rpc.ankr.com/megaeth_testnet'],
      },
      public: {
        http: [process.env.RPC_URL || 'https://rpc.ankr.com/megaeth_testnet'],
      },
    },
  },
  transport: http(process.env.RPC_URL),
});

/**
 * Fetch ERC20 token metadata using Viem RPC calls
 * @param tokenAddress The token contract address (can be vault or token)
 * @returns Promise<TokenMetadata> Token metadata
 */
export async function getTokenMetadata(tokenAddress: string): Promise<TokenMetadata> {
  try {
    const [name, symbol, decimals, totalSupply] = await Promise.all([
      publicClient.readContract({
        address: tokenAddress as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'name',
      }),
      publicClient.readContract({
        address: tokenAddress as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'symbol',
      }),
      publicClient.readContract({
        address: tokenAddress as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'decimals',
      }),
      publicClient.readContract({
        address: tokenAddress as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'totalSupply',
      }),
    ]);

    return {
      name,
      symbol,
      decimals: Number(decimals),
      totalSupply,
    };
  } catch (error) {
    console.error(`Error fetching token metadata for ${tokenAddress}:`, error);
    throw error;
  }
}

/**
 * Batch fetch token metadata for multiple tokens
 * @param tokenAddresses Array of token addresses
 * @returns Promise<TokenMetadata[]> Array of token metadata
 */
export async function getBatchTokenMetadata(tokenAddresses: string[]): Promise<TokenMetadata[]> {
  const promises = tokenAddresses.map(address => getTokenMetadata(address));
  return Promise.all(promises);
} 