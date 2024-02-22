let mockSQL = [
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock1",
        "capacity": 3,
        "numberBedrooms": 2,
        "size": 420,
        "price": 100,
        "rating": "0,356362633",
        "start": "2023-02-23",
        "end": "2023-03-18",
        "id": 0
    },
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock2",
        "capacity": 2,
        "numberBedrooms": 3,
        "size": 69,
        "price": 200,
        "rating": "1,052910956",
        "start": "2023-02-24",
        "end": "2023-03-19",
        "id": 1
    },
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock3",
        "capacity": 5,
        "numberBedrooms": 4,
        "size": 239,
        "price": 300,
        "rating": "3,613606819",
        "start": "2023-02-25",
        "end": "2023-03-20",
        "id": 2
    },
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock4",
        "capacity": 4,
        "numberBedrooms": 5,
        "size": 80,
        "price": 400,
        "rating": "0,321357677",
        "start": "2023-02-26",
        "end": "2023-03-21",
        "id": 3
    },
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock5",
        "capacity": 8,
        "numberBedrooms": 1,
        "size": 23,
        "price": 500,
        "rating": "2,710792459",
        "start": "2023-02-27",
        "end": "2023-03-22",
        "id": 4
    },
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock6",
        "capacity": 7,
        "numberBedrooms": 2,
        "size": 53,
        "price": 600,
        "rating": "4,248603618",
        "start": "2023-02-28",
        "end": "2023-03-23",
        "id": 5
    },
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock7",
        "capacity": 4,
        "numberBedrooms": 3,
        "size": 59,
        "price": 700,
        "rating": "4,938947305",
        "start": "2023-03-01",
        "end": "2023-03-24",
        "id": 6
    },
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock8",
        "capacity": 5,
        "numberBedrooms": 4,
        "size": 23,
        "price": 800,
        "rating": "1,405554729",
        "start": "2023-03-02",
        "end": "2023-03-25",
        "id": 7
    },
    {
        "address": "Da Nang",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock9",
        "capacity": 3,
        "numberBedrooms": 5,
        "size": 54,
        "price": 900,
        "rating": "1,151570886",
        "start": "2023-03-03",
        "end": "2023-03-26",
        "id": 8
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock10",
        "capacity": 2,
        "numberBedrooms": 1,
        "size": 435,
        "price": 1000,
        "rating": "4,445223228",
        "start": "2023-03-04",
        "end": "2023-03-27",
        "id": 9
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock11",
        "capacity": 5,
        "numberBedrooms": 2,
        "size": 234,
        "price": 1100,
        "rating": "2,768999468",
        "start": "2023-03-05",
        "end": "2023-03-28",
        "id": 10
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock12",
        "capacity": 4,
        "numberBedrooms": 3,
        "size": 54,
        "price": 1200,
        "rating": "1,074922399",
        "start": "2023-03-06",
        "end": "2023-03-29",
        "id": 11
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock13",
        "capacity": 8,
        "numberBedrooms": 4,
        "size": 243,
        "price": 1300,
        "rating": "0,298515851",
        "start": "2023-03-07",
        "end": "2023-03-30",
        "id": 12
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock14",
        "capacity": 7,
        "numberBedrooms": 5,
        "size": 54,
        "price": 1400,
        "rating": "4,901045868",
        "start": "2023-03-08",
        "end": "2023-03-31",
        "id": 13
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock15",
        "capacity": 4,
        "numberBedrooms": 1,
        "size": 34,
        "price": 1500,
        "rating": "0,765714721",
        "start": "2023-03-09",
        "end": "2023-04-01",
        "id": 14
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock16",
        "capacity": 5,
        "numberBedrooms": 2,
        "size": 43,
        "price": 1600,
        "rating": "4,222038919",
        "start": "2023-03-10",
        "end": "2023-04-02",
        "id": 15
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock17",
        "capacity": 3,
        "numberBedrooms": 3,
        "size": 54,
        "price": 1700,
        "rating": "0,085146418",
        "start": "2023-03-11",
        "end": "2023-04-03",
        "id": 16
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock18",
        "capacity": 2,
        "numberBedrooms": 4,
        "size": 23,
        "price": 1800,
        "rating": "4,781187981",
        "start": "2023-03-12",
        "end": "2023-04-04",
        "id": 17
    },
    {
        "address": "Ho Chi Minh",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock19",
        "capacity": 5,
        "numberBedrooms": 5,
        "size": 54,
        "price": 1900,
        "rating": "3,075872502",
        "start": "2023-03-13",
        "end": "2023-04-05",
        "id": 18
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock20",
        "capacity": 4,
        "numberBedrooms": 1,
        "size": 43,
        "price": 2000,
        "rating": "1,26116052",
        "start": "2023-03-14",
        "end": "2023-04-06",
        "id": 19
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock21",
        "capacity": 8,
        "numberBedrooms": 2,
        "size": 23,
        "price": 2100,
        "rating": "2,367201053",
        "start": "2023-03-15",
        "end": "2023-04-07",
        "id": 20
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock22",
        "capacity": 7,
        "numberBedrooms": 3,
        "size": 43,
        "price": 2200,
        "rating": "3,753289131",
        "start": "2023-03-16",
        "end": "2023-04-08",
        "id": 21
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock23",
        "capacity": 4,
        "numberBedrooms": 4,
        "size": 54,
        "price": 2300,
        "rating": "2,79917594",
        "start": "2023-03-17",
        "end": "2023-04-09",
        "id": 22
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock24",
        "capacity": 5,
        "numberBedrooms": 5,
        "size": 23,
        "price": 2400,
        "rating": "0,909235465",
        "start": "2023-03-18",
        "end": "2023-04-10",
        "id": 23
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock25",
        "capacity": 3,
        "numberBedrooms": 1,
        "size": 84,
        "price": 2500,
        "rating": "0,224356499",
        "start": "2023-03-19",
        "end": "2023-04-11",
        "id": 24
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock26",
        "capacity": 2,
        "numberBedrooms": 2,
        "size": 54,
        "price": 2600,
        "rating": "4,571710143",
        "start": "2023-03-20",
        "end": "2023-04-12",
        "id": 25
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock27",
        "capacity": 5,
        "numberBedrooms": 3,
        "size": 23,
        "price": 2700,
        "rating": "3,98991641",
        "start": "2023-03-21",
        "end": "2023-04-13",
        "id": 26
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock28",
        "capacity": 4,
        "numberBedrooms": 4,
        "size": 54,
        "price": 2800,
        "rating": "3,839538589",
        "start": "2023-03-22",
        "end": "2023-04-14",
        "id": 27
    },
    {
        "address": "Mekong Delta",
        "description": "this is a description I guess, I cba writing anything proper but this is a long text I guess so deal with this as a mock value",
        "name": "mock29",
        "capacity": 8,
        "numberBedrooms": 5,
        "size": 48,
        "price": 2900,
        "rating": "1,962031651",
        "start": "2023-03-23",
        "end": "2023-04-15",
        "id": 28
    }
]

function compareByProperty(property, type){
    if(type === 'asc'){
        return (a, b) => { return a[property] - b[property]}
    }
    return (a, b) => { return b[property] - a[property]}
}

exports.GetAllProperties = async (req, res) => {
    var data = [];
    var sqlResult = mockSQL;
    let type = req.query.sort_by.split(':')[0];
    let attribute = req.query.sort_by.split(':')[1];

    if(req.query.price){sqlResult = sqlResult.filter((x) => {return (x['price'] <= req.query.price[0].split(':')[1] && x['price'] >= req.query.price[1].split(':')[1]);})}
    if(req.query.availability){sqlResult = sqlResult.filter((x) => {return (new Date(x['start']) <= new Date(req.query.availability[1].split(':')[1]) && new Date(x['end']) >= new Date(req.query.availability[0].split(':')[1]))})}

    sqlResult.sort(compareByProperty(attribute, type))

    for (let i = parseInt(req.query.after_id); i < parseInt(req.query.after_id) + parseInt(req.query.limit); i++) {
        if(sqlResult[i]){
            data.push(sqlResult[i]);
        }
    }
    res.send(data);
}

exports.GetSingleProperty = async (req, res) => {
    res.send(mockSQL[req.query.id])
}