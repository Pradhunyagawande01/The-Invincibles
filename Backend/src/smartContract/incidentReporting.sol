// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract IncidentReporting {
    struct Complaint {
        string nameOfThePerson;
        string email;
        int date;
        string description;
        string image;
        bool isComplaintActive;
    }
    int256 private index;

    Complaint[] public complaints;
    // mapping (address => complaints) public addressToComplaint;

    function raiseComplaint(
        string memory _name, 
        string memory _email, 
        int _date, 
        string memory _description, 
        string memory _image
    ) public returns (int256) {
        Complaint memory newComplaint = Complaint(_name, _email, _date, _description, _image, false);
        complaints.push(newComplaint);
        index = index + 1;
        return index;
    }

    function getComplaint(int256 _index) public view returns (Complaint memory) {
    return complaints[uint256(_index)];
}

}
