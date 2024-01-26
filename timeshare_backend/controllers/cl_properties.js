exports.GetAllProperties = async (req, res) => {
    //mocking the database for now
    res.status(200).json([
            {
                name: 'mock1',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SkSX_sRQmYiiV3NV3t8jBZuHCGAVtmVdhhHXSIoq6ZNZfR_VTGN8S746tveLJurNuDo&usqp=CAU',
                imgAlt: 'pool',
                price: 500,
                rating: 5
            },
            {
                name: 'mock2',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SkSX_sRQmYiiV3NV3t8jBZuHCGAVtmVdhhHXSIoq6ZNZfR_VTGN8S746tveLJurNuDo&usqp=CAU',
                imgAlt: 'pool',
                price: 500,
                rating: 4
            },
            {
                name: 'mock3',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SkSX_sRQmYiiV3NV3t8jBZuHCGAVtmVdhhHXSIoq6ZNZfR_VTGN8S746tveLJurNuDo&usqp=CAU',
                imgAlt: 'pool',
                price: 500,
                rating: 3
            }
        ]
    )
}