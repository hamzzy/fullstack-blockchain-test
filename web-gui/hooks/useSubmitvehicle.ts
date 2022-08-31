import { useAccount, useNetwork } from 'wagmi'
import React, { useContext, useEffect,useState } from 'react'
import useVehicleContract from './contracts/useAddVehicleContract'

export default function useCreateGrant(
	data: any,
){
    const [error, setError] = useState<string>()
	const [loading, setLoading] = useState(false)	
    const { data: accountData } = useAccount()

    const vehiclecontract = useVehicleContract()
    vehiclecontract

}