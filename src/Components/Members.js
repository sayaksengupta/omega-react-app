import { MDBDataTable } from "mdbreact";
import moment from "moment";
import React from "react";

function Members({ allMembers, setSelectedNav, setSelectedMember }) {
  const members = allMembers;

  const members_data = {
    columns: [
      {
        label: "S.no",
        field: "s_no",
        sort: "asc",
        width: 50,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 270,
      },
      {
        label: "Date of Joining",
        field: "doj",
        sort: "asc",
        width: 200,
      },
      {
        label: "Premium",
        field: "premium",
        sort: "asc",
        width: 100,
      },
      {
        label: "Verified",
        field: "verified",
        sort: "asc",
        width: 100,
      },
      {
        label: "Wallet",
        field: "wallet",
        sort: "asc",
        width: 100,
      },
      {
        label: "Role",
        field: "role",
        sort: "asc",
        width: 100,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 300,
      },
    ],
    rows: members.map((member, length) => {
      return {
        s_no: length + 1,
        name: member.name,
        email: member.email,
        desc: member.description,
        phone: member.phone,
        doj: moment(member.doj).format("DD/MM/YYYY"),
        role: (
          <select value={member.role}>
            <option value="none">None</option>
            <option value="admin">Admin</option>
          </select>
        ),
        wallet: member.wallet,
        premium: (
          <td
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <button
              type="button"
              style={{
                fontSize: "0.6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={
                member.premium === false ? `btn btn-danger` : `btn btn-success`
              }
            >
              {member.premium === false ? `No` : `Yes`}
            </button>
          </td>
        ),
        verified: (
          <td
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <button
              type="button"
              style={{
                fontSize: "0.6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              //   onClick={() => {setOpenWarning(true);setSelectedMember({id : member._id}); setWarning({text : `Do you want to change the Verification Status to ${member.verified === 1? `Pending?` : `Approved?`}`, type: "verified" })}}
              className={
                member.verified === 0
                  ? member.verified === 2
                    ? `btn btn-success`
                    : `btn btn-danger`
                  : `btn btn-secondary`
              }
            >
              {member.verified === 0
                ? member.verified === 2
                  ? `Yes`
                  : `No`
                : `Pending`}
            </button>
          </td>
        ),
        actions: (
          <td
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <button
              className="btn btn-success"
              style={{
                width: "4rem",
                fontSize: "0.6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                setSelectedNav("memberDetails");
                setSelectedMember(member._id);
              }}
            >
              View Details
            </button>
            <button
              type="button"
              // onClick={() => {setOpenWarning(true); setWarning({text : `Do you want to remove the member?`, type: "delete"}); setSelectedMember(member)}}
              style={{
                width: "2rem",
                fontSize: "0.6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="btn btn-danger"
            >
              <i className="fas fa-trash"></i>
            </button>
          </td>
        ),
      };
    }),
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <MDBDataTable
              striped
              bordered
              small
              data={members_data}
              style={{ marginTop: "1rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
