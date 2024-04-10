const eth = "/assets/img/svgs/crypto-currencies/eth.svg";
const xrp = "/assets/img/svgs/crypto-currencies/xrp.svg";
const ltc = "/assets/img/svgs/crypto-currencies/ltc.svg";
const xmr = "/assets/img/svgs/crypto-currencies/xmr.svg";
const steem = "/assets/img/svgs/crypto-currencies/steem.svg";
const dash = "/assets/img/svgs/crypto-currencies/dash.svg";
const waves = "/assets/img/svgs/crypto-currencies/waves.svg";
const user2 = "/assets/img/users/2.jpg";
const user3 = "/assets/img/users/3.jpg";
const user4 = "/assets/img/users/4.jpg";
const user5 = "/assets/img/users/5.jpg";
const user6 = "/assets/img/users/6.jpg";
const user7 = "/assets/img/users/7.jpg";
const user9 = "/assets/img/users/9.jpg";
const user11 = "/assets/img/users/11.jpg";
const btc = "/assets/img/svgs/crypto-currencies/btc.svg";


export const columns = [
    {
        name: "",
        selector: (row, i) => row.direction,
        sortable: true,
        cell: row =>
            <span className="crypto-icon bg-primary-transparent me-3 my-auto">
                <i className={`fe fe-arrow-${row.direction}-${row.position} text-primary`}></i></span>
    },

    {
        name: "TRANSACTION HASH",
        selector: (row, i) => row.transaction,
        cell: row => <div className="font-weight-bold">
            {row.transaction}
        </div>,
        sortable: true
    },
    {
        name: "DATE",
        selector: (row, i) => row.date,
        sortable: true,
        cell: row =>
            <div>
                {row.date}
            </div>

    },
    {
        name: "FROM",
        selector: (row, i) => row.from,
        sortable: true,
        cell: row =>
            <div>
                {row.from}
            </div>
    },
    {
        name: "TO",
        selector: (row, i) => row.to,
        cell: row =>
            <div className="d-flex my-auto">
                <div className="avatar avatar-sm me-2">
                    <img src={row.idcard} className="avatar avatar-sm me-2"
                        alt={row.idcard}
                    />
                </div>
                <span className="my-auto">{row.to}</span>
            </div>,

        sortable: true,

    },
    {
        name: "COIN",
        selector: (row, i) => row.currencyname,
        sortable: true,
        cell: row =>
            <div className="font-weight-semibold">
                <div className="d-flex my-auto">
                    <div className="avatar avatar-sm me-2">
                        <img
                            src={row.currency}
                            alt=""
                        />
                    </div>
                    <span className="my-auto">{row.currencyname}</span>
                </div>
            </div>

    },
    {
        name: "AMOUNT",
        selector: (row, i) => row.profit,
        sortable: true,
        cell: row =>
            <div className={`text-${row.winning} font-weight-bold`}>
                {row.profit}
            </div>
    },

    {
        name: "STATUS",
        selector: (row, i) => row.taskinformation,
        sortable: true,
        cell: row => <div className={`text-${row.winning} font-weight-bold`}>
            {row.taskinformation}
        </div>
    },
];

export const data = [
    {

        id: 1,
        direction: "up",
        position: "right",
        transaction: "#1242232401",
        date: "03/12/2020",
        from: "Olive Yew",
        idcard: user11 ,
        to: "PegLegge",
        currency: btc ,
        currencyname: "Bitcoin",
        profit: 5,
        winning: "success",
        taskinformation: "COMPLETED",
    },
    {
        id: 2,
        position: "left",
        direction: "down",
        transaction: "#1242232402",
        date: "05/12/2020",
        from: "Addie Minstra",
        idcard: user2 ,
        to: "Art Decco",
        currency: eth ,
        currencyname: "Ethereum",
        profit: -15,
        winning: "danger",
        taskinformation: "CANCELLED"
    },
    {
        id: 3,
        position: "left",
        direction: "down",
        transaction: "#1242232403",
        date: "14/12/2020",
        from: "Stan Dupp",
        idcard: user3 ,
        to: "Neil Down",
        currency: xrp ,
        currencyname: "Ripple",
        profit: -55,
        winning: "muted",
        taskinformation: "PENDING"
    },
    {
        id: 4,
        position: "right",
        direction: "up",
        transaction: "#1242232404",
        date: "16/12/2020",
        from: "Penny Black",
        idcard: user4 ,
        to: "Anna Domino",
        currency: dash ,
        currencyname: "Dash",
        profit: +25,
        winning: "success",
        taskinformation: "COMPLETED"

    },
    {
        id: 5,
        position: "left",
        direction: "down",
        transaction: "#1242232405",
        date: "08/12/2020",
        from: "Olive Yew",
        idcard: user5 ,
        to: "Paul Misunday",
        currency: ltc ,
        currencyname: "litecoin	",
        profit: 75,
        winning: "danger",
        taskinformation: "CANCELLED"
    },
    {
        id: 6,
        position: "left",
        direction: "down",
        transaction: "#1242232406",
        date: "20/12/2020",
        from: "Arty ficial",
        idcard: user6 ,
        to: "Marsha Mello",
        currency: xmr ,
        currencyname: "Monero",
        profit: 55,
        winning: "muted",
        taskinformation: "COMPLETED"
    },
    {
        id: 7,
        position: "left",
        direction: "down",
        transaction: "#1242232409",
        date: "03/12/2020",
        from: "Stew Gots",
        idcard: user9 ,
        to: "Sara Bellum",
        currency: waves ,
        currencyname: "Waves",
        profit: 5,
        winning: "muted",
        taskinformation: "PENDING"
    },
    {
        id: 8,
        position: "right",
        direction: "up",
        transaction: "#1242232418",
        date: "20/12/2020",
        from: "Donatella Nobatt",
        idcard: user7 ,
        to: "Peg Legge",
        currency: steem ,
        currencyname: "Steem",
        profit: 75,
        winning: "success",
        taskinformation: "COMPLETED"
    },
    {
        id: 9,
        position: "left",
        direction: "down",
        transaction: "#1242232405",
        date: "08/12/2020",
        from: "Olive Yew",
        idcard: user5 ,
        to: "Paul Misunday",
        currency: ltc ,
        currencyname: "litecoin	",
        profit: 15,
        winning: "danger",
        taskinformation: "CANCELLED"
    },
    {
        id: 10,
        position: "left",
        direction: "down",
        transaction: "#1242232403",
        date: "14/12/2020",
        from: "Stan Dupp",
        idcard: user3 ,
        to: "Neil Down",
        currency: xrp ,
        currencyname: "Ripple",
        profit: 15,
        winning: "muted",
        taskinformation: "PENDING"
    },
    {
        id: 11,
        position: "left",
        direction: "down",
        transaction: "#1242232403",
        date: "24/12/2020",
        from: "Stan Dupp",
        idcard: user6 ,
        to: "Neil Down",
        currency: xrp ,
        currencyname: "Ripple",
        profit: 5,
        winning: "muted",
        taskinformation: "PENDING"
    },

    {
        id: 12,
        position: "right",
        direction: "up",
        transaction: "#1242232418",
        date: "20/12/2020",
        from: "Donatella Nobatt",
        idcard: user7 ,
        to: "Peg Legge",
        currency: steem ,
        currencyname: "Steem",
        profit: 5,
        winning: "success",
        taskinformation: "COMPLETED"
    }
]

export const tableData = {
    columns,
    data,
};