/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface VehicleManagerInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "SERVICE_WORKER()": FunctionFragment;
    "_idcar(bytes)": FunctionFragment;
    "_idcarInspectation(uint256)": FunctionFragment;
    "addCar(bytes,string,string,uint256)": FunctionFragment;
    "addInspectionDetails(bytes,uint8,uint8,uint8,uint8,uint8,uint256,uint8)": FunctionFragment;
    "addServiceWorker(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_ADMIN_ROLE"
      | "SERVICE_WORKER"
      | "_idcar"
      | "_idcarInspectation"
      | "addCar"
      | "addInspectionDetails"
      | "addServiceWorker"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "owner"
      | "renounceOwnership"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SERVICE_WORKER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_idcar",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "_idcarInspectation",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addCar",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addInspectionDetails",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addServiceWorker",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SERVICE_WORKER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_idcar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_idcarInspectation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addCar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addInspectionDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addServiceWorker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "VehicleCreated(uint256,bytes,string,string,uint256,uint256)": EventFragment;
    "inspecationCreated(uint256,uint256,uint8,uint8,uint8,uint8,uint8,uint256,uint8)": EventFragment;
    "submitServiceWorker(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VehicleCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "inspecationCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "submitServiceWorker"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface VehicleCreatedEventObject {
  id: BigNumber;
  vin: string;
  brand: string;
  model: string;
  year: BigNumber;
  createdAt: BigNumber;
}
export type VehicleCreatedEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber, BigNumber],
  VehicleCreatedEventObject
>;

export type VehicleCreatedEventFilter = TypedEventFilter<VehicleCreatedEvent>;

export interface inspecationCreatedEventObject {
  id: BigNumber;
  car_id: BigNumber;
  brake: number;
  bumpers: number;
  interior: number;
  light: number;
  tyres: number;
  milleage: BigNumber;
  Engine: number;
}
export type inspecationCreatedEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number,
    number,
    BigNumber,
    number
  ],
  inspecationCreatedEventObject
>;

export type inspecationCreatedEventFilter =
  TypedEventFilter<inspecationCreatedEvent>;

export interface submitServiceWorkerEventObject {
  service_owrker: string;
}
export type submitServiceWorkerEvent = TypedEvent<
  [string],
  submitServiceWorkerEventObject
>;

export type submitServiceWorkerEventFilter =
  TypedEventFilter<submitServiceWorkerEvent>;

export interface VehicleManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VehicleManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    SERVICE_WORKER(overrides?: CallOverrides): Promise<[string]>;

    _idcar(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber] & {
        id: BigNumber;
        vin: string;
        brand: string;
        model: string;
        year: BigNumber;
        createdAt: BigNumber;
      }
    >;

    _idcarInspectation(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number,
        number,
        BigNumber,
        number
      ] & {
        id: BigNumber;
        car_id: BigNumber;
        brake: number;
        bumpers: number;
        interior: number;
        light: number;
        tyres: number;
        milleage: BigNumber;
        engine: number;
      }
    >;

    addCar(
      _vin: PromiseOrValue<BytesLike>,
      _brand: PromiseOrValue<string>,
      _model: PromiseOrValue<string>,
      _year: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addInspectionDetails(
      _vin: PromiseOrValue<BytesLike>,
      _brake: PromiseOrValue<BigNumberish>,
      _bumpers: PromiseOrValue<BigNumberish>,
      _interior: PromiseOrValue<BigNumberish>,
      _light: PromiseOrValue<BigNumberish>,
      _tyres: PromiseOrValue<BigNumberish>,
      _milleage: PromiseOrValue<BigNumberish>,
      _engine: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addServiceWorker(
      _service_worker: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  SERVICE_WORKER(overrides?: CallOverrides): Promise<string>;

  _idcar(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber, BigNumber] & {
      id: BigNumber;
      vin: string;
      brand: string;
      model: string;
      year: BigNumber;
      createdAt: BigNumber;
    }
  >;

  _idcarInspectation(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      number,
      number,
      number,
      number,
      number,
      BigNumber,
      number
    ] & {
      id: BigNumber;
      car_id: BigNumber;
      brake: number;
      bumpers: number;
      interior: number;
      light: number;
      tyres: number;
      milleage: BigNumber;
      engine: number;
    }
  >;

  addCar(
    _vin: PromiseOrValue<BytesLike>,
    _brand: PromiseOrValue<string>,
    _model: PromiseOrValue<string>,
    _year: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addInspectionDetails(
    _vin: PromiseOrValue<BytesLike>,
    _brake: PromiseOrValue<BigNumberish>,
    _bumpers: PromiseOrValue<BigNumberish>,
    _interior: PromiseOrValue<BigNumberish>,
    _light: PromiseOrValue<BigNumberish>,
    _tyres: PromiseOrValue<BigNumberish>,
    _milleage: PromiseOrValue<BigNumberish>,
    _engine: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addServiceWorker(
    _service_worker: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    SERVICE_WORKER(overrides?: CallOverrides): Promise<string>;

    _idcar(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber] & {
        id: BigNumber;
        vin: string;
        brand: string;
        model: string;
        year: BigNumber;
        createdAt: BigNumber;
      }
    >;

    _idcarInspectation(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number,
        number,
        BigNumber,
        number
      ] & {
        id: BigNumber;
        car_id: BigNumber;
        brake: number;
        bumpers: number;
        interior: number;
        light: number;
        tyres: number;
        milleage: BigNumber;
        engine: number;
      }
    >;

    addCar(
      _vin: PromiseOrValue<BytesLike>,
      _brand: PromiseOrValue<string>,
      _model: PromiseOrValue<string>,
      _year: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addInspectionDetails(
      _vin: PromiseOrValue<BytesLike>,
      _brake: PromiseOrValue<BigNumberish>,
      _bumpers: PromiseOrValue<BigNumberish>,
      _interior: PromiseOrValue<BigNumberish>,
      _light: PromiseOrValue<BigNumberish>,
      _tyres: PromiseOrValue<BigNumberish>,
      _milleage: PromiseOrValue<BigNumberish>,
      _engine: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addServiceWorker(
      _service_worker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;

    "VehicleCreated(uint256,bytes,string,string,uint256,uint256)"(
      id?: null,
      vin?: null,
      brand?: null,
      model?: null,
      year?: null,
      createdAt?: null
    ): VehicleCreatedEventFilter;
    VehicleCreated(
      id?: null,
      vin?: null,
      brand?: null,
      model?: null,
      year?: null,
      createdAt?: null
    ): VehicleCreatedEventFilter;

    "inspecationCreated(uint256,uint256,uint8,uint8,uint8,uint8,uint8,uint256,uint8)"(
      id?: null,
      car_id?: null,
      brake?: null,
      bumpers?: null,
      interior?: null,
      light?: null,
      tyres?: null,
      milleage?: null,
      Engine?: null
    ): inspecationCreatedEventFilter;
    inspecationCreated(
      id?: null,
      car_id?: null,
      brake?: null,
      bumpers?: null,
      interior?: null,
      light?: null,
      tyres?: null,
      milleage?: null,
      Engine?: null
    ): inspecationCreatedEventFilter;

    "submitServiceWorker(address)"(
      service_owrker?: null
    ): submitServiceWorkerEventFilter;
    submitServiceWorker(service_owrker?: null): submitServiceWorkerEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    SERVICE_WORKER(overrides?: CallOverrides): Promise<BigNumber>;

    _idcar(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _idcarInspectation(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addCar(
      _vin: PromiseOrValue<BytesLike>,
      _brand: PromiseOrValue<string>,
      _model: PromiseOrValue<string>,
      _year: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addInspectionDetails(
      _vin: PromiseOrValue<BytesLike>,
      _brake: PromiseOrValue<BigNumberish>,
      _bumpers: PromiseOrValue<BigNumberish>,
      _interior: PromiseOrValue<BigNumberish>,
      _light: PromiseOrValue<BigNumberish>,
      _tyres: PromiseOrValue<BigNumberish>,
      _milleage: PromiseOrValue<BigNumberish>,
      _engine: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addServiceWorker(
      _service_worker: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SERVICE_WORKER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _idcar(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _idcarInspectation(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addCar(
      _vin: PromiseOrValue<BytesLike>,
      _brand: PromiseOrValue<string>,
      _model: PromiseOrValue<string>,
      _year: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addInspectionDetails(
      _vin: PromiseOrValue<BytesLike>,
      _brake: PromiseOrValue<BigNumberish>,
      _bumpers: PromiseOrValue<BigNumberish>,
      _interior: PromiseOrValue<BigNumberish>,
      _light: PromiseOrValue<BigNumberish>,
      _tyres: PromiseOrValue<BigNumberish>,
      _milleage: PromiseOrValue<BigNumberish>,
      _engine: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addServiceWorker(
      _service_worker: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
