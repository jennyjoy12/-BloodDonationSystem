flowchart LR

    D[Donor]
    P[Patient / Requester]
    A[Admin]

    subgraph S[Blood Donation Networking and Matching Emergency System]

        D1[Register / Login]
        D2[Update Blood Group]
        D3[Update Location]
        D4[Set Availability]
        D5[Receive Emergency Request]
        D6[Accept Donation Request]

        P1[Register / Login]
        P2[Create Blood Request]
        P3[Enter Blood Group]
        P4[Enter Location]
        P5[View Matched Donors]
        P6[Contact Donor]

        A1[Manage Donors]
        A2[Manage Users]
        A3[Manage Blood Requests]
        A4[Verify Donors]
        A5[Monitor Emergency Requests]

    end

    D --> D1
    D --> D2
    D --> D3
    D --> D4
    D --> D5
    D --> D6

    P --> P1
    P --> P2
    P --> P3
    P --> P4
    P --> P5
    P --> P6

    A --> A1
    A --> A2
    A --> A3
    A --> A4
    A --> A5
