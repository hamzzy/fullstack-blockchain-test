import {time, loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {anyValue} from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import {ethers} from "hardhat";
import {expect} from "../helpers/chai-setup";
import { Bytes, utils } from "ethers/lib/ethers";

describe("Vehicle Managment", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.

    async function deployVehicleManagement() { // Contracts are deployed using the first signer/account by default
        const [owner, Account1, Account2, Account3] = await ethers.getSigners();

        const Vehicle = await ethers.getContractFactory("VehicleManager");
        const vehicle = await Vehicle.deploy();

        enum InspecationState {
            Excelent,
            Good,
            Fair,
            Bad
        }

        return {
            vehicle,
            owner,
            Account1,
            Account2,
            Account3,
            InspecationState
        };
    }


    describe("Deployment", function () {

        it("Should set the right owner", async function () {
            const {vehicle, owner} = await loadFixture(deployVehicleManagement);

            expect(await vehicle.owner()).to.equal(owner.address);
        });


    });


    describe("AddCar", function () {
      const  vin: string = utils.formatBytes32String("JH4DC231XWS800471")

        it("it emit add car event", async function () {
            const {vehicle, owner} = await loadFixture(deployVehicleManagement);
            expect(vehicle.addCar(vin, "toyota", "a4", 2022)).to.emit(vehicle, "VehicleCreated")


        });

        it("it should emit event with data", async function () {
            const {vehicle, owner} = await loadFixture(deployVehicleManagement);
            await expect(vehicle.addCar(vin, "toyota", "a4", 2022)).to.emit(vehicle, "VehicleCreated")

        });

        it("it should fail if vin already exist", async function () {
            const {vehicle, owner} = await loadFixture(deployVehicleManagement);
            await vehicle.addCar(vin, "toyota", "a4", 2022)
            await expect(vehicle.addCar(vin, "toyota", "a4", 2023)).revertedWith("car already exist")

        });


    });


    describe("AddServiceWorker", function () {

        it("it emit event after adding service worker", async function () {
            const {vehicle, owner, Account1, Account2} = await loadFixture(deployVehicleManagement);
            await expect(vehicle.addServiceWorker(Account1.getAddress())).to.emit(vehicle, "submitServiceWorker")
            await expect(vehicle.addServiceWorker(Account2.getAddress())).to.emit(vehicle, "submitServiceWorker")

        });

        it("it should validate if service worker already exist", async function () {
            const {vehicle, owner, Account2} = await loadFixture(deployVehicleManagement);
            await expect(vehicle.addServiceWorker(Account2.getAddress())).to.emit(vehicle, "submitServiceWorker")
            await expect(vehicle.addServiceWorker(Account2.getAddress())).to.emit(vehicle, "submitServiceWorker").revertedWith("user added already")
        });


    });


    describe("AddInspectionDetails", function () {


      const  vin: string = utils.formatBytes32String("JH4DC231XWS800471")

        it("it should validate if vin for the car exist", async function () {
            const {
                vehicle,
                owner,
                Account1,
                Account2,
                InspecationState
            } = await loadFixture(deployVehicleManagement);
            const milleage = 23993
            await expect(vehicle.addInspectionDetails(vin, InspecationState.Excelent, InspecationState.Good, InspecationState.Bad, InspecationState.Excelent, InspecationState.Fair, milleage, InspecationState.Bad)).to.revertedWith("car doesn't exist")

        });

        it("it emit event after adding Inspeactation details", async function () {
            const {
                vehicle,
                owner,
                Account1,
                Account2,
                InspecationState
            } = await loadFixture(deployVehicleManagement);
            const milleage = 23993
            await expect(vehicle.addCar(vin, "toyota", "a4", 2022)).to.emit(vehicle, "VehicleCreated")

            await expect(vehicle.addInspectionDetails(vin, InspecationState.Excelent, InspecationState.Good, InspecationState.Bad, InspecationState.Excelent, InspecationState.Fair, milleage, InspecationState.Bad)).to.emit(vehicle, "inspecationCreated");

        });


    });

})
