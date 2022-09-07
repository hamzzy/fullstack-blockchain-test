// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract VehicleManager is Ownable, AccessControl {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _carId;
    Counters.Counter private _inspectationId;

    struct Vehicle {
        uint256 id;
        bytes vin;
        string brand;
        string model;
        uint256 year;
        uint256 createdAt;
    }

    enum InspecationState {
        Excelent,
        Good,
        Fair,
        Bad
    }

    struct vehicleInspectation {
        uint256 id;
        uint256 car_id;
        InspecationState brake;
        InspecationState bumpers;
        InspecationState interior;
        InspecationState light;
        InspecationState tyres;
        uint256 milleage;
        InspecationState engine;
    }

    mapping(bytes => Vehicle) public _idcar;
    mapping(uint256 => vehicleInspectation) public _idcarInspectation;
    bytes32 public constant SERVICE_WORKER = keccak256("SERVICE_WORKER");

    event VehicleCreated(
        uint256 id,
        bytes vin,
        string brand,
        string model,
        uint256 year,
        uint256 createdAt
    );

    event submitServiceWorker(address service_owrker);

    event inspecationCreated(
        uint256 id,
        uint256 car_id,
        InspecationState brake,
        InspecationState bumpers,
        InspecationState interior,
        InspecationState light,
        InspecationState tyres,
        uint256 milleage,
        InspecationState Engine
    );

    /**
     * @notice Submit a new car
     * @param _vin address of the service worker to be added
     * @param _brand the brand that built the car
     * @param _model the modelof the vehicle
     * @param _year year which the vehicle was built
     */
    function addCar(
        bytes memory _vin,
        string memory _brand,
        string memory _model,
        uint256 _year
    ) public ownerOrWorkersPermission {
        require(
            keccak256(_idcar[_vin].vin) != keccak256(_vin),
            "car already exist"
        );

        _carId.increment();
        uint256 carId = _carId.current();
        _idcar[_vin] = Vehicle(
            carId,
            _vin,
            _brand,
            _model,
            _year,
            block.timestamp
        );

        emit VehicleCreated(
            carId,
            _vin,
            _brand,
            _model,
            _year,
            block.timestamp
        );
    }

    /**
     * @notice Add Service Worker
     * @param _service_worker address of the service worker to be added
     */
    function addServiceWorker(address _service_worker) public onlyOwner {
        if (hasRole(SERVICE_WORKER, _service_worker)) {
            revert("user added already");
        } else {
            _setupRole(SERVICE_WORKER, _service_worker);
        }

        emit submitServiceWorker(_service_worker);
    }

    /**
     * @notice Add InspectationDetails
     * @param _brake  brake conditon on inspecation
     * @param _bumpers bumper conditon on inspecation
     * @param _interior interior conditon on inspecation
     * @param _light  light conditon on inspecation
     * @param _tyres tyres  conditon on inspecation
     * @param _milleage  milleage conditon on inspecation
     * @param _engine  conditon on inspecation
     */

    function addInspectionDetails(
        bytes memory _vin,
        InspecationState _brake,
        InspecationState _bumpers,
        InspecationState _interior,
        InspecationState _light,
        InspecationState _tyres,
        uint256 _milleage,
        InspecationState _engine
    ) public ownerOrWorkersPermission {
        require(
            keccak256(_idcar[_vin].vin) == keccak256(_vin),
            "car doesn't exist"
        );

        _inspectationId.increment();
        uint256 inspectId = _inspectationId.current();
        _idcarInspectation[inspectId] = vehicleInspectation(
            inspectId,
            _idcar[_vin].id,
            _brake,
            _bumpers,
            _interior,
            _light,
            _tyres,
            _milleage,
            _engine
        );

        emit inspecationCreated(
            inspectId,
            _idcar[_vin].id,
            _brake,
            _bumpers,
            _interior,
            _light,
            _tyres,
            _milleage,
            _engine
        );
    }

    modifier ownerOrWorkersPermission() {
        require(
            (owner() == msg.sender) || (hasRole(SERVICE_WORKER, msg.sender)),
            "Unauthorised: DOES_NOT_HAVE_PERMISSION"
        );

        _;
    }
}
