import { BigInt } from "@graphprotocol/graph-ts"
import {
  VehicleManager,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  VehicleCreated,
  inspecationCreated,
  submitServiceWorker
} from "../generated/VehicleManager/VehicleManager"
import { VehicleEntity,ServiceWorkersEntity } from "../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleVehicleCreated(event: VehicleCreated): void {
 
   const vehicle = new VehicleEntity(event.params.id.toString())
   vehicle.vin = event.params.vin;
   vehicle.brand = event.params.brand;
   vehicle.model = event.params.model;
   vehicle.year = event.params.year;
   vehicle.save()


}

export function handleinspecationCreated(event: inspecationCreated): void {

}

export function handlesubmitServiceWorker(event: submitServiceWorker): void {

  const worker = new ServiceWorkersEntity(event.params.id)
   worker.service_worker = event.params.service_worker;
   worker.save()


}
