import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  VehicleCreated,
  inspecationCreated,
  submitServiceWorker
} from "../generated/VehicleManager/VehicleManager"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createVehicleCreatedEvent(
  id: BigInt,
  vin: Bytes,
  brand: string,
  model: string,
  year: BigInt,
  createdAt: BigInt
): VehicleCreated {
  let vehicleCreatedEvent = changetype<VehicleCreated>(newMockEvent())

  vehicleCreatedEvent.parameters = new Array()

  vehicleCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  vehicleCreatedEvent.parameters.push(
    new ethereum.EventParam("vin", ethereum.Value.fromBytes(vin))
  )
  vehicleCreatedEvent.parameters.push(
    new ethereum.EventParam("brand", ethereum.Value.fromString(brand))
  )
  vehicleCreatedEvent.parameters.push(
    new ethereum.EventParam("model", ethereum.Value.fromString(model))
  )
  vehicleCreatedEvent.parameters.push(
    new ethereum.EventParam("year", ethereum.Value.fromUnsignedBigInt(year))
  )
  vehicleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )

  return vehicleCreatedEvent
}

export function createinspecationCreatedEvent(
  id: BigInt,
  car_id: BigInt,
  brake: i32,
  bumpers: i32,
  interior: i32,
  light: i32,
  tyres: i32,
  milleage: BigInt,
  Engine: i32
): inspecationCreated {
  let inspecationCreatedEvent = changetype<inspecationCreated>(newMockEvent())

  inspecationCreatedEvent.parameters = new Array()

  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam("car_id", ethereum.Value.fromUnsignedBigInt(car_id))
  )
  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "brake",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(brake))
    )
  )
  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "bumpers",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(bumpers))
    )
  )
  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "interior",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(interior))
    )
  )
  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "light",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(light))
    )
  )
  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tyres",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tyres))
    )
  )
  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "milleage",
      ethereum.Value.fromUnsignedBigInt(milleage)
    )
  )
  inspecationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "Engine",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(Engine))
    )
  )

  return inspecationCreatedEvent
}

export function createsubmitServiceWorkerEvent(
  service_owrker: Address
): submitServiceWorker {
  let submitServiceWorkerEvent = changetype<submitServiceWorker>(newMockEvent())

  submitServiceWorkerEvent.parameters = new Array()

  submitServiceWorkerEvent.parameters.push(
    new ethereum.EventParam(
      "service_owrker",
      ethereum.Value.fromAddress(service_owrker)
    )
  )

  return submitServiceWorkerEvent
}
