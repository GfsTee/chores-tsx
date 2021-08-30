
const allData: {
    sideline: string;
    data: {
        name: string;
        goesUp: boolean;
        time: number;
    }[];
}[] = [
        {
            sideline: "Katzen",
            data: [
                {
                    name: "Brunnen",
                    goesUp: false,
                    time: 5 // in days
                },
                {
                    name: "Toilette",
                    goesUp: false,
                    time: 3 // in days
                }
            ]
        },
        {
            sideline: "Wohnung",
            data: [
                {
                    name: "Aufräumen",
                    goesUp: false,
                    time: 7 // in days
                },
                {
                    name: "Bad Mülleimer",
                    goesUp: false,
                    time: 14 // in days
                }
            ]
        },
        {
            sideline: "Sport",
            data: [
                {
                    name: "Org",
                    goesUp: true,
                    time: 3 // in days
                },
                {
                    name: "Trin",
                    goesUp: true,
                    time: 3 // in days
                }
            ]
        },
    ]

export default allData