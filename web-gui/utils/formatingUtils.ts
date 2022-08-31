export const trimAddress = (address: string, digitQuantity: number) => `${address.slice(0, digitQuantity)}...${address.slice(-4)}`
