import { CONTRACT_ADDRESS } from 'constant';
import { useContract, useSigner } from 'wagmi'
import Vehicle from "../../abis/VehicleManager.json";


export default function useVehicleContract() {
	const { data: signer } = useSigner()
	const Contract = useContract({
		addressOrName: CONTRACT_ADDRESS,
		contractInterface: Vehicle,
		signerOrProvider: signer,
	})

	return Contract;
}
